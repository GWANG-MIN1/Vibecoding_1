// 전역 변수
let newsData = [];
let isLoading = false;

// DOM 요소들
const loadingSection = document.getElementById('loadingSection');
const newsSection = document.getElementById('newsSection');
const newsGrid = document.getElementById('newsGrid');
const lastUpdate = document.getElementById('lastUpdate');

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    console.log('DAYNEW 로드됨');
    loadUserSettings();
    showPlaceholderNews();
});

// 사용자 설정 로드
function loadUserSettings() {
    const savedSettings = localStorage.getItem('newsSettings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        
        // 체크박스 복원
        if (settings.interests) {
            settings.interests.forEach(interest => {
                const checkbox = document.querySelector(`input[value="${interest}"]`);
                if (checkbox) checkbox.checked = true;
            });
        }
        
        // 키워드 복원
        if (settings.keywords) {
            document.getElementById('keywords').value = settings.keywords;
        }
        
    }
}

// 사용자 설정 저장
function saveUserSettings() {
    const interests = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    
    const settings = {
        interests: interests,
        keywords: document.getElementById('keywords').value
    };
    
    localStorage.setItem('newsSettings', JSON.stringify(settings));
}

// 뉴스 업데이트 함수
async function updateNews() {
    if (isLoading) return;
    
    isLoading = true;
    saveUserSettings();
    
    // 로딩 화면 표시
    showLoading();
    
    try {
        // 사용자 설정 가져오기
        const settings = getUserSettings();
        
        // 뉴스 데이터 생성 (실제로는 API 호출)
        const news = await generateMockNews(settings);
        
        // 뉴스 표시
        displayNews(news);
        
        // 마지막 업데이트 시간 저장
        updateLastUpdateTime();
        
    } catch (error) {
        console.error('뉴스 업데이트 오류:', error);
        showError('뉴스를 불러오는 중 오류가 발생했습니다.');
    } finally {
        isLoading = false;
        hideLoading();
    }
}

// 사용자 설정 가져오기
function getUserSettings() {
    const interests = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    
    return {
        interests: interests,
        keywords: document.getElementById('keywords').value.split(',').map(k => k.trim()).filter(k => k)
    };
}

// 로딩 화면 표시
function showLoading() {
    loadingSection.style.display = 'block';
    newsSection.style.display = 'none';
}

// 로딩 화면 숨기기
function hideLoading() {
    loadingSection.style.display = 'none';
    newsSection.style.display = 'block';
}

// 실제 뉴스 API 호출
async function generateMockNews(settings) {
    try {
        // Flask 서버로 API 요청
        const response = await fetch('http://localhost:5000/api/news', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(settings)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error);
        }
        
        // API 응답을 프론트엔드 형식으로 변환
        const articles = data.articles.map(article => ({
            title: article.title,
            summary: article.description || article.summary || '요약 정보가 없습니다.',
            source: article.source,
            time: formatTimeAgo(article.publishedAt),
            category: article.category || 'general',
            url: article.url,
            imageUrl: article.urlToImage
        }));
        
        return articles;
        
    } catch (error) {
        console.error('API 호출 오류:', error);
        
        // API 오류 시 모의 데이터 반환
        return getFallbackNews(settings);
    }
}

// API 오류 시 사용할 모의 데이터
function getFallbackNews(settings) {
    const mockNews = [
        {
            title: "AI 기술의 새로운 돌파구, GPT-5 출시 예정",
            summary: "OpenAI가 GPT-5의 출시를 발표했습니다. 이번 업데이트는 더욱 정확한 답변과 창의적인 콘텐츠 생성 능력을 제공할 것으로 예상됩니다.",
            source: "TechCrunch",
            time: "2시간 전",
            category: "technology",
            url: "#",
            imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop"
        },
        {
            title: "비트코인 가격, 24시간 만에 15% 상승",
            summary: "암호화폐 시장에서 비트코인이 급등세를 보이고 있습니다. 기관 투자자들의 관심이 높아지면서 가격이 상승하고 있습니다.",
            source: "CoinDesk",
            time: "1시간 전",
            category: "economy",
            url: "#",
            imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=200&fit=crop"
        },
        {
            title: "프리미어리그, 맨체스터 시티 우승 확정",
            summary: "맨체스터 시티가 프리미어리그에서 우승을 확정지었습니다. 펩 과르디올라 감독의 전술이 빛을 발했습니다.",
            source: "ESPN",
            time: "3시간 전",
            category: "sports",
            url: "#",
            imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=200&fit=crop"
        },
        {
            title: "정부, AI 규제 법안 통과",
            summary: "국회에서 AI 기술의 안전한 사용을 위한 규제 법안이 통과되었습니다. 이는 AI 기술의 발전과 안전성의 균형을 맞추기 위한 조치입니다.",
            source: "연합뉴스",
            time: "4시간 전",
            category: "politics",
            url: "#",
            imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=200&fit=crop"
        },
        {
            title: "새로운 스마트폰 출시, 혁신적인 카메라 기능",
            summary: "최신 스마트폰이 출시되며 혁신적인 카메라 기능으로 주목받고 있습니다. AI 기반 사진 보정 기능이 특히 인기를 끌고 있습니다.",
            source: "The Verge",
            time: "5시간 전",
            category: "technology",
            url: "#",
            imageUrl: "https://images.unsplash.com/photo-1511707171631-5f897ff02aa9?w=400&h=200&fit=crop"
        },
        {
            title: "K-POP 그룹, 글로벌 차트 1위 달성",
            summary: "한국 대중음악 그룹이 미국 빌보드 차트에서 1위를 차지했습니다. 전 세계 팬들의 열렬한 지지가 이어지고 있습니다.",
            source: "엔터테인먼트 뉴스",
            time: "6시간 전",
            category: "entertainment",
            url: "#",
            imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop"
        },
        {
            title: "부동산 시장, 전국적으로 가격 상승세",
            summary: "전국 부동산 시장에서 가격 상승세가 이어지고 있습니다. 수도권을 중심으로 거래량도 증가하고 있습니다.",
            source: "부동산 뉴스",
            time: "7시간 전",
            category: "economy",
            url: "#",
            imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop"
        },
        {
            title: "올림픽 준비, 국가대표 선수단 결성",
            summary: "다가오는 올림픽을 위해 국가대표 선수단이 결성되었습니다. 각 종목별 최고 선수들이 참여합니다.",
            source: "스포츠 뉴스",
            time: "8시간 전",
            category: "sports",
            url: "#",
            imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=200&fit=crop"
        }
    ];
    
    // 설정에 따른 필터링
    let filteredNews = mockNews;
    
    if (settings.interests.length > 0) {
        filteredNews = filteredNews.filter(news => 
            settings.interests.includes(news.category)
        );
    }
    
    if (settings.keywords.length > 0) {
        filteredNews = filteredNews.filter(news => 
            settings.keywords.some(keyword => 
                news.title.toLowerCase().includes(keyword.toLowerCase()) ||
                news.summary.toLowerCase().includes(keyword.toLowerCase())
            )
        );
    }
    
    return filteredNews.slice(0, 6);
}

// 시간 포맷팅 함수
function formatTimeAgo(dateString) {
    if (!dateString) return "시간 정보 없음";
    
    const now = new Date();
    const articleDate = new Date(dateString);
    const diffInMinutes = Math.floor((now - articleDate) / (1000 * 60));
    
    if (diffInMinutes < 1) return "방금 전";
    if (diffInMinutes < 60) return `${diffInMinutes}분 전`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}시간 전`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}일 전`;
}

// 요약 길이 조정
function adjustSummaryLength(summary, length) {
    const sentences = summary.split('.').filter(s => s.trim());
    
    switch (length) {
        case 'short':
            return sentences[0] + '.';
        case 'long':
            return summary;
        default: // medium
            return sentences.slice(0, 2).join('.') + '.';
    }
}

// 뉴스 표시
function displayNews(news) {
    newsGrid.innerHTML = '';
    
    if (news.length === 0) {
        newsGrid.innerHTML = `
            <div class="news-card placeholder">
                <div class="news-icon">🔍</div>
                <h3>관련 뉴스가 없습니다</h3>
                <p>다른 키워드나 카테고리를 선택해보세요!</p>
            </div>
        `;
        return;
    }
    
    news.forEach((article, index) => {
        const newsCard = createNewsCard(article, index);
        newsGrid.appendChild(newsCard);
    });
}

// 뉴스 카드 생성
function createNewsCard(article, index) {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const categoryEmoji = getCategoryEmoji(article.category);
    const imageHtml = article.imageUrl ? 
        `<div class="news-image">
            <img src="${article.imageUrl}" alt="${article.title}" onerror="this.style.display='none'">
        </div>` : '';
    
    card.innerHTML = `
        ${imageHtml}
        <div class="news-content">
            <div class="news-icon">${categoryEmoji}</div>
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <div class="news-meta">
                <span class="news-source">${article.source}</span>
                <span class="news-time">${article.time}</span>
            </div>
            <div class="news-feedback">
                <button class="feedback-btn like-btn" onclick="handleFeedback(event, 'like', ${index})">
                    👍 <span class="count">0</span>
                </button>
                <button class="feedback-btn dislike-btn" onclick="handleFeedback(event, 'dislike', ${index})">
                    👎 <span class="count">0</span>
                </button>
            </div>
        </div>
    `;
    
    // 클릭 이벤트 추가
    card.addEventListener('click', () => {
        if (article.url && article.url !== '#') {
            window.open(article.url, '_blank');
        }
    });
    
    return card;
}

// 카테고리별 이모지
function getCategoryEmoji(category) {
    const emojis = {
        technology: '💻',
        economy: '💰',
        sports: '⚽',
        politics: '🏛️',
        entertainment: '🎬'
    };
    return emojis[category] || '📰';
}

// 플레이스홀더 뉴스 표시
function showPlaceholderNews() {
    newsGrid.innerHTML = `
        <div class="news-card placeholder">
            <div class="news-icon">📰</div>
            <h3>뉴스를 불러오는 중...</h3>
            <p>관심사 설정 후 '뉴스 업데이트' 버튼을 눌러주세요!</p>
        </div>
    `;
}

// 오류 메시지 표시
function showError(message) {
    newsGrid.innerHTML = `
        <div class="news-card placeholder">
            <div class="news-icon">❌</div>
            <h3>오류가 발생했습니다</h3>
            <p>${message}</p>
        </div>
    `;
}

// 마지막 업데이트 시간 업데이트
function updateLastUpdateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit'
    });
    lastUpdate.textContent = timeString;
}

// 키보드 이벤트 처리
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.id === 'keywords') {
        updateNews();
    }
});

// 피드백 처리 함수
function handleFeedback(event, type, index) {
    event.stopPropagation(); // 카드 클릭 이벤트 방지
    
    const button = event.target.closest('.feedback-btn');
    const countSpan = button.querySelector('.count');
    let currentCount = parseInt(countSpan.textContent) || 0;
    
    // 피드백 데이터 저장
    const feedbackKey = `news_feedback_${index}`;
    const feedbackData = JSON.parse(localStorage.getItem(feedbackKey) || '{"like": 0, "dislike": 0}');
    
    if (type === 'like') {
        feedbackData.like += 1;
        button.style.backgroundColor = '#e8f5e8';
        button.style.color = '#2e7d32';
    } else {
        feedbackData.dislike += 1;
        button.style.backgroundColor = '#ffebee';
        button.style.color = '#c62828';
    }
    
    // 로컬 스토리지에 저장
    localStorage.setItem(feedbackKey, JSON.stringify(feedbackData));
    
    // 카운트 업데이트
    countSpan.textContent = feedbackData[type];
    
    // 애니메이션 효과
    button.style.transform = 'scale(1.1)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
}

// 키워드 검색 함수
function searchByKeywords() {
    const keywords = document.getElementById('keywords').value.trim();
    if (!keywords) {
        alert('검색할 키워드를 입력해주세요!');
        return;
    }
    
    if (isLoading) return;
    
    showLoading();
    saveUserSettings();
    
    // 키워드만으로 검색 (카테고리 무시)
    const searchSettings = {
        interests: [], // 카테고리 비우기
        keywords: keywords.split(',').map(k => k.trim()).filter(k => k)
    };
    
    console.log('키워드 검색 설정:', searchSettings);
    
    // API 호출
    fetch('http://localhost:5000/api/news', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchSettings)
    })
    .then(response => response.json())
    .then(data => {
        console.log('키워드 검색 결과:', data);
        newsData = data.articles || [];
        displayNews(newsData);
        updateLastUpdateTime();
        
        // 검색 결과 표시
        const newsHeader = document.querySelector('.news-header h2');
        newsHeader.textContent = `🔍 "${keywords}" 검색 결과 (${newsData.length}개)`;
    })
    .catch(error => {
        console.error('키워드 검색 오류:', error);
        displayError('키워드 검색 중 오류가 발생했습니다.');
    })
    .finally(() => {
        hideLoading();
    });
}

// 자동 새로고침 (5분마다)
setInterval(() => {
    if (!isLoading && document.visibilityState === 'visible') {
        updateNews();
    }
}, 5 * 60 * 1000); // 5분
