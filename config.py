import os
from dotenv import load_dotenv

# .env 파일 로드
load_dotenv()

class Config:
    # API 키 설정
    NEWS_API_KEY = os.getenv('NEWS_API_KEY', 'your_news_api_key_here')
    OPENAI_API_KEY = os.getenv('OPENAI_API_KEY', 'your_openai_api_key_here')
    
    # 뉴스 API 설정
    NEWS_API_BASE_URL = "https://newsapi.org/v2"
    DEFAULT_COUNTRY = "kr"
    DEFAULT_LANGUAGE = "ko"
    
    # 캐시 설정
    CACHE_DURATION = 300  # 5분
    MAX_CACHE_SIZE = 100
    
    # 요약 설정
    MAX_SUMMARY_LENGTH = 500
    MIN_SUMMARY_LENGTH = 50
    
    # 뉴스 제한
    MAX_ARTICLES_PER_REQUEST = 20
    MAX_ARTICLES_FOR_SUMMARIZATION = 10

# 카테고리 매핑
CATEGORY_MAPPING = {
    'technology': {
        'api_category': 'technology',
        'keywords': ['AI', '인공지능', '기술', 'IT', '소프트웨어', '하드웨어']
    },
    'economy': {
        'api_category': 'business',
        'keywords': ['경제', '금융', '주식', '부동산', '코인', '암호화폐']
    },
    'sports': {
        'api_category': 'sports',
        'keywords': ['축구', '야구', '농구', '올림픽', '월드컵', '스포츠']
    },
    'politics': {
        'api_category': 'general',
        'keywords': ['정치', '정부', '국회', '선거', '정책']
    },
    'entertainment': {
        'api_category': 'entertainment',
        'keywords': ['연예', '영화', '드라마', '음악', '배우', '가수']
    }
}

# 요약 길이 설정
SUMMARY_LENGTH_CONFIG = {
    'short': {
        'max_sentences': 1,
        'max_chars': 100
    },
    'medium': {
        'max_sentences': 3,
        'max_chars': 200
    },
    'long': {
        'max_sentences': 5,
        'max_chars': 300
    }
}

