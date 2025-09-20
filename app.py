from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import requests
import os
from datetime import datetime, timedelta
import json
import time

app = Flask(__name__)
CORS(app)

# API 키 설정 (환경변수에서 가져오기)
NEWS_API_KEY = os.getenv('NEWS_API_KEY', '0f9e0f1c6b6445c797a6aef7d9464568')
GNEWS_API_KEY = os.getenv('GNEWS_API_KEY', 'your_gnews_api_key_here')
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY', 'your_openai_api_key_here')

# 뉴스 API 설정
NEWS_API_BASE_URL = "https://newsapi.org/v2"
GNEWS_API_BASE_URL = "https://gnews.io/api/v4"
DEFAULT_COUNTRY = "kr"  # 한국 뉴스

# 카테고리 매핑
CATEGORY_MAPPING = {
    'technology': 'technology',
    'economy': 'business',
    'sports': 'sports',
    'politics': 'general',
    'entertainment': 'entertainment'
}

# 뉴스 캐시 (실제 구현에서는 Redis 사용 권장)
news_cache = {}
CACHE_DURATION = 300  # 5분

@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)

@app.route('/api/news', methods=['POST'])
def get_news():
    try:
        data = request.get_json()
        interests = data.get('interests', [])
        keywords = data.get('keywords', [])
        summary_length = 'medium'  # 기본값으로 고정
        
        # 캐시 키 생성
        cache_key = f"{'-'.join(sorted(interests))}_{'-'.join(sorted(keywords))}_{summary_length}"
        
        # 캐시 확인
        if cache_key in news_cache:
            cached_data = news_cache[cache_key]
            if time.time() - cached_data['timestamp'] < CACHE_DURATION:
                return jsonify(cached_data['data'])
        
        # 뉴스 수집
        news_articles = []
        
        if interests:
            for category in interests:
                articles = fetch_news_by_category(category, keywords)
                news_articles.extend(articles)
        else:
            # 기본 뉴스 (모든 카테고리)
            all_categories = ['technology', 'economy', 'sports', 'politics', 'entertainment']
            for category in all_categories:
                articles = fetch_news_by_category(category, keywords)
                news_articles.extend(articles)
        
        # 중복 제거 및 정렬
        news_articles = remove_duplicates(news_articles)
        news_articles = sorted(news_articles, key=lambda x: x.get('publishedAt', ''), reverse=True)
        
        # 요약 없이 뉴스 그대로 반환
        summarized_articles = news_articles[:50]  # 최대 50개
        
        result = {
            'articles': summarized_articles,
            'total': len(summarized_articles),
            'timestamp': datetime.now().isoformat()
        }
        
        # 캐시 저장
        news_cache[cache_key] = {
            'data': result,
            'timestamp': time.time()
        }
        
        return jsonify(result)
        
    except Exception as e:
        print(f"Error in get_news: {str(e)}")
        return jsonify({'error': '뉴스를 불러오는 중 오류가 발생했습니다.'}), 500

def fetch_news_by_category(category, keywords=None):
    """카테고리별 뉴스 가져오기 (여러 API 사용)"""
    all_articles = []
    
    # 1. NewsAPI에서 뉴스 가져오기
    newsapi_articles = fetch_from_newsapi(category, keywords)
    all_articles.extend(newsapi_articles)
    
    # 2. GNews API에서 뉴스 가져오기 (무료 API)
    gnews_articles = fetch_from_gnews(category, keywords)
    all_articles.extend(gnews_articles)
    
    # 3. 키워드가 있으면 추가 검색
    if keywords:
        keyword_articles = fetch_by_keywords(keywords)
        all_articles.extend(keyword_articles)
    
    return all_articles

def fetch_from_newsapi(category, keywords=None):
    """NewsAPI에서 뉴스 가져오기"""
    try:
        # NewsAPI 엔드포인트
        if category == 'general':
            url = f"{NEWS_API_BASE_URL}/top-headlines"
            params = {
                'country': DEFAULT_COUNTRY,
                'apiKey': NEWS_API_KEY,
                'pageSize': 30
            }
        else:
            url = f"{NEWS_API_BASE_URL}/everything"
            params = {
                'q': f"{category}",
                'language': 'ko',
                'sortBy': 'publishedAt',
                'apiKey': NEWS_API_KEY,
                'pageSize': 30
            }
        
        # 키워드가 있으면 검색어에 추가
        if keywords:
            keyword_query = ' OR '.join(keywords)
            if 'q' in params:
                params['q'] = f"({params['q']}) AND ({keyword_query})"
            else:
                params['q'] = keyword_query
        
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        
        data = response.json()
        articles = data.get('articles', [])
        
        # 뉴스 데이터 정리
        processed_articles = []
        for article in articles:
            if article.get('title') and article.get('description'):
                processed_article = {
                    'title': article['title'],
                    'description': article['description'],
                    'url': article['url'],
                    'source': article['source']['name'],
                    'publishedAt': article['publishedAt'],
                    'urlToImage': article.get('urlToImage', ''),
                    'category': category,
                    'api_source': 'newsapi'
                }
                processed_articles.append(processed_article)
        
        return processed_articles
        
    except requests.exceptions.RequestException as e:
        print(f"NewsAPI request failed: {str(e)}")
        return []
    except Exception as e:
        print(f"Error fetching from NewsAPI: {str(e)}")
        return []

def fetch_from_gnews(category, keywords=None):
    """GNews API에서 뉴스 가져오기 (무료)"""
    try:
        # GNews API는 무료이지만 API 키가 필요할 수 있음
        if GNEWS_API_KEY == 'your_gnews_api_key_here':
            return []
            
        # 카테고리 매핑
        gnews_category = category
        if category == 'economy':
            gnews_category = 'business'
        elif category == 'politics':
            gnews_category = 'general'
        
        url = f"{GNEWS_API_BASE_URL}/search"
        params = {
            'q': category,
            'lang': 'ko',
            'country': 'kr',
            'max': 20,
            'apikey': GNEWS_API_KEY
        }
        
        # 키워드가 있으면 검색어에 추가
        if keywords:
            keyword_query = ' OR '.join(keywords)
            params['q'] = f"{category} {keyword_query}"
        
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        
        data = response.json()
        articles = data.get('articles', [])
        
        # 뉴스 데이터 정리
        processed_articles = []
        for article in articles:
            if article.get('title') and article.get('description'):
                processed_article = {
                    'title': article['title'],
                    'description': article['description'],
                    'url': article['url'],
                    'source': article['source']['name'],
                    'publishedAt': article['publishedAt'],
                    'urlToImage': article.get('image', ''),
                    'category': category,
                    'api_source': 'gnews'
                }
                processed_articles.append(processed_article)
        
        return processed_articles
        
    except requests.exceptions.RequestException as e:
        print(f"GNews API request failed: {str(e)}")
        return []
    except Exception as e:
        print(f"Error fetching from GNews: {str(e)}")
        return []

def fetch_by_keywords(keywords):
    """키워드로 직접 검색"""
    try:
        # NewsAPI에서 키워드 검색
        url = f"{NEWS_API_BASE_URL}/everything"
        keyword_query = ' OR '.join(keywords)
        params = {
            'q': keyword_query,
            'language': 'ko',
            'sortBy': 'publishedAt',
            'apiKey': NEWS_API_KEY,
            'pageSize': 20
        }
        
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        
        data = response.json()
        articles = data.get('articles', [])
        
        # 뉴스 데이터 정리
        processed_articles = []
        for article in articles:
            if article.get('title') and article.get('description'):
                processed_article = {
                    'title': article['title'],
                    'description': article['description'],
                    'url': article['url'],
                    'source': article['source']['name'],
                    'publishedAt': article['publishedAt'],
                    'urlToImage': article.get('urlToImage', ''),
                    'category': 'keyword_search',
                    'api_source': 'newsapi_keywords'
                }
                processed_articles.append(processed_article)
        
        return processed_articles
        
    except requests.exceptions.RequestException as e:
        print(f"Keyword search failed: {str(e)}")
        return []
    except Exception as e:
        print(f"Error in keyword search: {str(e)}")
        return []

def remove_duplicates(articles):
    """중복 뉴스 제거 (개선된 버전)"""
    seen_titles = set()
    seen_urls = set()
    unique_articles = []
    
    for article in articles:
        title = article.get('title', '').lower().strip()
        url = article.get('url', '').strip()
        
        # 제목과 URL 모두 체크하여 중복 제거
        if title and title not in seen_titles and url not in seen_urls:
            seen_titles.add(title)
            seen_urls.add(url)
            unique_articles.append(article)
    
    return unique_articles

def summarize_article(article, summary_length):
    """AI를 사용한 뉴스 요약"""
    try:
        # OpenAI API 호출 (실제 구현)
        summary = call_openai_api(article, summary_length)
        
        return {
            **article,
            'summary': summary,
            'summaryLength': summary_length
        }
        
    except Exception as e:
        print(f"Error summarizing article: {str(e)}")
        # AI 요약 실패 시 원본 설명 사용
        return {
            **article,
            'summary': article.get('description', ''),
            'summaryLength': summary_length
        }

def call_openai_api(article, summary_length):
    """기본 요약 기능 (OpenAI API 제거)"""
    return get_basic_summary(article, summary_length)

def get_basic_summary(article, summary_length):
    """기본 요약 로직 (API 없이)"""
    title = article.get('title', '')
    description = article.get('description', '')
    
    # 문장 단위로 분리
    sentences = [s.strip() for s in description.split('.') if s.strip()]
    
    if not sentences:
        return description
    
    # 요약 길이에 따른 처리
    if summary_length == 'short':
        # 1-2문장으로 간단히
        if len(sentences) >= 2:
            return sentences[0] + '. ' + sentences[1] + '.'
        else:
            return sentences[0] + '.'
    
    elif summary_length == 'long':
        # 5-6문장으로 자세히
        if len(sentences) >= 6:
            return '. '.join(sentences[:6]) + '.'
        else:
            return description
    
    else:  # medium
        # 3-4문장으로 핵심 내용
        if len(sentences) >= 4:
            return '. '.join(sentences[:4]) + '.'
        elif len(sentences) >= 2:
            return '. '.join(sentences[:2]) + '.'
        else:
            return sentences[0] + '.'

@app.route('/api/health')
def health_check():
    """서버 상태 확인"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'cache_size': len(news_cache)
    })

if __name__ == '__main__':
    print("🚀 DAYNEW 서버 시작...")
    print(f"📰 News API Key: {'설정됨' if NEWS_API_KEY != 'your_news_api_key_here' else '설정 필요'}")
    print(f"🤖 OpenAI API Key: {'설정됨' if OPENAI_API_KEY != 'your_openai_api_key_here' else '설정 필요'}")
    print("🌐 서버 주소: http://localhost:5000")
    
    app.run(debug=True, host='0.0.0.0', port=5000)
