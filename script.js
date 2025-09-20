// 메뉴 데이터베이스
const menuDatabase = {
    korean: [
        { name: "김치찌개", calories: 350, weather: ["cold", "rainy"], lastEaten: 0, preference: 0.8, season: "all", spicy: "high", place: ["home", "restaurant"], people: [1, 2, 3, 4, 5] },
        { name: "불고기", calories: 650, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.9, season: "all", spicy: "no", place: ["home", "restaurant"], people: [2, 3, 4, 5] },
        { name: "비빔밥", calories: 500, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.7, season: "spring", spicy: "mild", place: ["home", "restaurant", "delivery"], people: [1, 2, 3, 4, 5] },
        { name: "된장찌개", calories: 300, weather: ["cold", "rainy"], lastEaten: 0, preference: 0.6, season: "all", spicy: "no", place: ["home", "restaurant"], people: [1, 2, 3, 4, 5] },
        { name: "갈비탕", calories: 800, weather: ["cold"], lastEaten: 0, preference: 0.85, season: "winter", spicy: "no", place: ["restaurant"], people: [1, 2, 3, 4, 5] },
        { name: "닭볶음탕", calories: 600, weather: ["cold", "cloudy"], lastEaten: 0, preference: 0.75, season: "all", spicy: "high", place: ["home", "restaurant"], people: [2, 3, 4, 5] },
        { name: "삼겹살", calories: 900, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.95, season: "all", spicy: "no", place: ["restaurant"], people: [2, 3, 4, 5] },
        { name: "냉면", calories: 400, weather: ["hot", "sunny"], lastEaten: 0, preference: 0.8, season: "summer", spicy: "mild", place: ["restaurant", "delivery"], people: [1, 2, 3, 4, 5] },
        { name: "족발", calories: 700, weather: ["cloudy"], lastEaten: 0, preference: 0.7, season: "all", spicy: "no", place: ["restaurant", "delivery", "takeout"], people: [2, 3, 4, 5] },
        { name: "보쌈", calories: 450, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.65, season: "all", spicy: "no", place: ["restaurant"], people: [2, 3, 4, 5] },
        { name: "떡볶이", calories: 400, weather: ["cloudy", "rainy"], lastEaten: 0, preference: 0.8, season: "all", spicy: "extreme", place: ["restaurant", "delivery", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "순두부찌개", calories: 350, weather: ["cold", "rainy"], lastEaten: 0, preference: 0.7, season: "all", spicy: "high", place: ["home", "restaurant"], people: [1, 2, 3, 4, 5] }
    ],
    chinese: [
        { name: "짜장면", calories: 600, weather: ["cloudy", "rainy"], lastEaten: 0, preference: 0.8, season: "all", spicy: "no", place: ["restaurant", "delivery"], people: [1, 2, 3, 4, 5] },
        { name: "짬뽕", calories: 550, weather: ["cold", "rainy"], lastEaten: 0, preference: 0.75, season: "all", spicy: "high", place: ["restaurant", "delivery"], people: [1, 2, 3, 4, 5] },
        { name: "탕수육", calories: 800, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.9, season: "all", spicy: "no", place: ["restaurant"], people: [2, 3, 4, 5] },
        { name: "볶음밥", calories: 500, weather: ["sunny"], lastEaten: 0, preference: 0.7, season: "all", spicy: "mild", place: ["restaurant", "delivery"], people: [1, 2, 3, 4, 5] },
        { name: "마파두부", calories: 400, weather: ["cloudy"], lastEaten: 0, preference: 0.6, season: "all", spicy: "high", place: ["restaurant", "delivery"], people: [1, 2, 3, 4, 5] },
        { name: "깐풍기", calories: 700, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.85, season: "all", spicy: "high", place: ["restaurant"], people: [2, 3, 4, 5] }
    ],
    japanese: [
        { name: "초밥", calories: 500, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.9, season: "all", spicy: "no", place: ["restaurant"], people: [1, 2, 3, 4, 5] },
        { name: "라멘", calories: 600, weather: ["cold", "rainy"], lastEaten: 0, preference: 0.8, season: "winter", spicy: "mild", place: ["restaurant"], people: [1, 2, 3, 4, 5] },
        { name: "우동", calories: 450, weather: ["cold", "rainy"], lastEaten: 0, preference: 0.7, season: "winter", spicy: "no", place: ["restaurant", "delivery"], people: [1, 2, 3, 4, 5] },
        { name: "돈카츠", calories: 750, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.85, season: "all", spicy: "no", place: ["restaurant"], people: [1, 2, 3, 4, 5] },
        { name: "텐푸라", calories: 550, weather: ["sunny"], lastEaten: 0, preference: 0.75, season: "all", spicy: "no", place: ["restaurant"], people: [1, 2, 3, 4, 5] },
        { name: "규동", calories: 650, weather: ["cloudy"], lastEaten: 0, preference: 0.8, season: "all", spicy: "no", place: ["restaurant", "delivery"], people: [1, 2, 3, 4, 5] }
    ],
    western: [
        { name: "피자", calories: 800, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.9, season: "all", spicy: "no", place: ["restaurant", "delivery", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "파스타", calories: 600, weather: ["cloudy", "rainy"], lastEaten: 0, preference: 0.8, season: "all", spicy: "mild", place: ["restaurant", "delivery"], people: [1, 2, 3, 4, 5] },
        { name: "스테이크", calories: 900, weather: ["sunny"], lastEaten: 0, preference: 0.95, season: "all", spicy: "no", place: ["restaurant"], people: [1, 2, 3, 4, 5] },
        { name: "햄버거", calories: 700, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.85, season: "all", spicy: "mild", place: ["restaurant", "delivery", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "샐러드", calories: 300, weather: ["hot", "sunny"], lastEaten: 0, preference: 0.6, season: "summer", spicy: "no", place: ["restaurant", "delivery"], people: [1, 2, 3, 4, 5] },
        { name: "리조또", calories: 550, weather: ["cloudy"], lastEaten: 0, preference: 0.75, season: "all", spicy: "mild", place: ["restaurant", "delivery"], people: [1, 2, 3, 4, 5] }
    ],
    convenience: [
        { name: "라면", calories: 500, weather: ["cold", "rainy"], lastEaten: 0, preference: 0.8, season: "all", spicy: "high", place: ["convenience", "home"], people: [1, 2, 3, 4, 5] },
        { name: "김밥", calories: 300, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.7, season: "all", spicy: "no", place: ["convenience", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "도시락", calories: 600, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.75, season: "all", spicy: "mild", place: ["convenience", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "삼각김밥", calories: 200, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.6, season: "all", spicy: "no", place: ["convenience", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "핫도그", calories: 400, weather: ["cold", "cloudy"], lastEaten: 0, preference: 0.7, season: "all", spicy: "mild", place: ["convenience", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "샌드위치", calories: 350, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.65, season: "all", spicy: "no", place: ["convenience", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "튀김", calories: 450, weather: ["cloudy", "rainy"], lastEaten: 0, preference: 0.8, season: "all", spicy: "mild", place: ["convenience", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "떡볶이", calories: 400, weather: ["cloudy", "rainy"], lastEaten: 0, preference: 0.8, season: "all", spicy: "extreme", place: ["convenience", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "순대", calories: 300, weather: ["cold", "cloudy"], lastEaten: 0, preference: 0.7, season: "all", spicy: "high", place: ["convenience", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "치킨", calories: 600, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.85, season: "all", spicy: "mild", place: ["convenience", "takeout"], people: [1, 2, 3, 4, 5] }
    ],
    delivery: [
        { name: "치킨", calories: 800, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.95, season: "all", spicy: "mild", place: ["delivery", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "피자", calories: 900, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.9, season: "all", spicy: "no", place: ["delivery", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "족발", calories: 700, weather: ["cloudy"], lastEaten: 0, preference: 0.85, season: "all", spicy: "no", place: ["delivery", "takeout"], people: [2, 3, 4, 5] },
        { name: "햄버거", calories: 750, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.88, season: "all", spicy: "mild", place: ["delivery", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "보쌈", calories: 650, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.8, season: "all", spicy: "no", place: ["delivery", "takeout"], people: [2, 3, 4, 5] },
        { name: "중화요리", calories: 600, weather: ["cloudy", "rainy"], lastEaten: 0, preference: 0.85, season: "all", spicy: "high", place: ["delivery", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "일식", calories: 550, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.9, season: "all", spicy: "no", place: ["delivery", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "떡볶이", calories: 400, weather: ["cloudy", "rainy"], lastEaten: 0, preference: 0.8, season: "all", spicy: "extreme", place: ["delivery", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "순대", calories: 350, weather: ["cold", "cloudy"], lastEaten: 0, preference: 0.75, season: "all", spicy: "high", place: ["delivery", "takeout"], people: [1, 2, 3, 4, 5] },
        { name: "닭볶음탕", calories: 600, weather: ["cold", "cloudy"], lastEaten: 0, preference: 0.8, season: "all", spicy: "high", place: ["delivery", "takeout"], people: [2, 3, 4, 5] },
        { name: "삼겹살", calories: 900, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.95, season: "all", spicy: "no", place: ["delivery", "takeout"], people: [2, 3, 4, 5] },
        { name: "갈비", calories: 800, weather: ["sunny", "cloudy"], lastEaten: 0, preference: 0.9, season: "all", spicy: "no", place: ["delivery", "takeout"], people: [2, 3, 4, 5] }
    ]
};

// 사용자 데이터 (로컬 스토리지에서 불러오기)
let userData = {
    lastEatenMenus: {},
    preferences: {},
    totalRecommendations: 0,
    weatherHistory: []
};

// 운세 멘트 데이터베이스
const fortuneMessages = {
    positive: [
        "오늘은 정말 좋은 하루가 될 것 같아요! 🌟",
        "운이 좋은 날이에요! 선택한 메뉴가 완벽할 거예요! ✨",
        "오늘 저녁은 특별한 맛이 기다리고 있어요! 🍽️",
        "행운이 가득한 하루입니다! 맛있는 저녁 되세요! 🍀",
        "오늘은 모든 것이 완벽하게 맞아떨어질 것 같아요! 🎯"
    ],
    neutral: [
        "오늘은 평범하지만 안정적인 하루가 될 것 같아요! 😊",
        "꾸준함이 최고의 맛을 만들어낼 거예요! 💪",
        "오늘 저녁은 든든하고 맛있을 것 같아요! 🍚",
        "차근차근 하나씩, 좋은 하루를 만들어가세요! 🌱",
        "오늘은 조용하지만 만족스러운 하루가 될 거예요! 🤗"
    ],
    negative: [
        "오늘은 조금 힘들 수 있지만, 맛있는 저녁으로 힘을 내세요! 💪",
        "어려운 날이지만 좋은 음식이 위로가 될 거예요! 🤗",
        "오늘은 조심스럽게, 하지만 맛있게 드세요! 🍽️",
        "작은 기쁨이라도 찾아서 즐거운 저녁 되세요! 🌸",
        "힘든 하루였지만, 저녁은 특별하게 보내세요! ✨"
    ]
};

const adviceMessages = [
    "오늘의 메뉴는 당신의 마음을 정확히 읽었어요!",
    "날씨와 기분을 고려한 완벽한 선택이에요!",
    "오랫동안 안 먹은 메뉴를 추천해드렸어요!",
    "칼로리와 선호도를 모두 고려한 맞춤 추천입니다!",
    "AI가 분석한 당신만의 특별한 메뉴예요!",
    "오늘의 컨디션에 딱 맞는 메뉴를 찾았어요!",
    "데이터 분석 결과, 이 메뉴가 최적의 선택이에요!"
];

// 현재 날씨 정보
let currentWeather = {
    temperature: 20,
    condition: "sunny",
    humidity: 50
};

// DOM 요소들
const userInput = document.getElementById('userInput');
const recommendBtn = document.getElementById('recommendBtn');
const loadingSection = document.getElementById('loadingSection');
const resultSection = document.getElementById('resultSection');
const weatherText = document.getElementById('weatherText');
const caloriePreference = document.getElementById('caloriePreference');

// 설정 폼 요소들
const recentMenusInput = document.getElementById('recentMenus');
const weatherInput = document.getElementById('weatherInput');
const spicyLevel = document.getElementById('spicyLevel');
const peopleCount = document.getElementById('peopleCount');
const eatingPlace = document.getElementById('eatingPlace');
const mood = document.getElementById('mood');

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    loadUserData();
    updateWeather();
    setupEventListeners();
    
    // 5초마다 날씨 업데이트
    setInterval(updateWeather, 300000); // 5분
});

// 이벤트 리스너 설정
function setupEventListeners() {
    recommendBtn.addEventListener('click', handleRecommendation);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleRecommendation();
        }
    });
    
    // 날씨 입력이 변경되면 자동으로 날씨 업데이트
    weatherInput.addEventListener('change', function() {
        const weatherOptions = {
            'sunny': { condition: 'sunny', temp: 25, humidity: 40, icon: '☀️', text: '맑음 25°C' },
            'cloudy': { condition: 'cloudy', temp: 20, humidity: 60, icon: '☁️', text: '흐림 20°C' },
            'rainy': { condition: 'rainy', temp: 15, humidity: 80, icon: '🌧️', text: '비 15°C' },
            'cold': { condition: 'cold', temp: 5, humidity: 70, icon: '❄️', text: '추움 5°C' },
            'hot': { condition: 'hot', temp: 30, humidity: 50, icon: '🔥', text: '더움 30°C' }
        };
        
        const selectedWeather = weatherOptions[this.value];
        if (selectedWeather) {
            currentWeather = {
                temperature: selectedWeather.temp,
                condition: selectedWeather.condition,
                humidity: selectedWeather.humidity
            };
            weatherText.textContent = `${selectedWeather.icon} ${selectedWeather.text}`;
        }
    });
}

// 사용자 데이터 로드
function loadUserData() {
    const saved = localStorage.getItem('dinnerRecommendationData');
    if (saved) {
        userData = { ...userData, ...JSON.parse(saved) };
    }
}

// 사용자 데이터 저장
function saveUserData() {
    localStorage.setItem('dinnerRecommendationData', JSON.stringify(userData));
}

// 날씨 업데이트 (실제로는 API를 사용해야 하지만, 여기서는 시뮬레이션)
function updateWeather() {
    const weathers = [
        { condition: "sunny", temp: 25, humidity: 40, icon: "☀️", text: "맑음 25°C" },
        { condition: "cloudy", temp: 20, humidity: 60, icon: "☁️", text: "흐림 20°C" },
        { condition: "rainy", temp: 15, humidity: 80, icon: "🌧️", text: "비 15°C" },
        { condition: "cold", temp: 5, humidity: 70, icon: "❄️", text: "추움 5°C" },
        { condition: "hot", temp: 30, humidity: 50, icon: "🔥", text: "더움 30°C" }
    ];
    
    const randomWeather = weathers[Math.floor(Math.random() * weathers.length)];
    currentWeather = {
        temperature: randomWeather.temp,
        condition: randomWeather.condition,
        humidity: randomWeather.humidity
    };
    
    weatherText.textContent = `${randomWeather.icon} ${randomWeather.text}`;
}

// 메뉴 추천 처리
async function handleRecommendation() {
    const input = userInput.value.trim();
    
    if (!input || !input.includes('추천')) {
        alert('"오늘 저녁 메뉴 추천해줘"라고 입력해주세요!');
        return;
    }
    
    // 로딩 애니메이션 시작
    showLoading();
    
    // 3초 후 결과 표시 (로또 머신 효과)
    setTimeout(() => {
        const recommendations = generateRecommendations();
        displayResults(recommendations);
        hideLoading();
    }, 3000);
}

// 로딩 화면 표시
function showLoading() {
    loadingSection.style.display = 'block';
    resultSection.style.display = 'none';
    
    // 로또 머신 애니메이션 시작
    const balls = document.querySelectorAll('.ball');
    balls.forEach((ball, index) => {
        ball.style.animation = `spin ${2 + index * 0.2}s linear infinite`;
    });
}

// 로딩 화면 숨기기
function hideLoading() {
    loadingSection.style.display = 'none';
    resultSection.style.display = 'block';
    resultSection.classList.add('show');
}

// 메뉴 추천 생성
function generateRecommendations() {
    const caloriePref = caloriePreference.value;
    
    // 사용자 입력 정보 가져오기
    const userInputs = getUserInputs();
    
    // 모든 메뉴 가져오기 (카테고리 구분 없이)
    let availableMenus = [];
    Object.values(menuDatabase).forEach(menus => {
        availableMenus = availableMenus.concat(menus);
    });
    
    // 칼로리 필터링
    availableMenus = availableMenus.filter(menu => {
        switch (caloriePref) {
            case 'low': return menu.calories <= 500;
            case 'medium': return menu.calories > 500 && menu.calories <= 800;
            case 'high': return menu.calories > 800;
            default: return true;
        }
    });
    
    // 사용자 입력 기반 필터링
    availableMenus = availableMenus.filter(menu => {
        // 매운맛 필터링
        if (userInputs.spicyLevel === 'no' && menu.spicy !== 'no') return false;
        if (userInputs.spicyLevel === 'mild' && (menu.spicy === 'high' || menu.spicy === 'extreme')) return false;
        if (userInputs.spicyLevel === 'medium' && menu.spicy === 'extreme') return false;
        
        // 장소 필터링
        if (!menu.place.includes(userInputs.eatingPlace)) return false;
        
        // 인원수 필터링
        if (!menu.people.includes(parseInt(userInputs.peopleCount))) return false;
        
        return true;
    });
    
    // 필터링된 메뉴가 없으면 모든 메뉴에서 다시 선택
    if (availableMenus.length === 0) {
        availableMenus = [];
        Object.values(menuDatabase).forEach(menus => {
            availableMenus = availableMenus.concat(menus);
        });
    }
    
    // 각 메뉴에 대해 점수 계산
    const scoredMenus = availableMenus.map(menu => {
        const score = calculateMenuScore(menu, userInputs);
        return { ...menu, score };
    });
    
    // 점수순으로 정렬하고 상위 3개 선택
    const top3 = scoredMenus
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
    
    // 사용자 데이터 업데이트
    userData.totalRecommendations++;
    top3.forEach(menu => {
        userData.lastEatenMenus[menu.name] = new Date().toISOString();
    });
    saveUserData();
    
    return top3;
}

// 사용자 입력 정보 가져오기
function getUserInputs() {
    const recentMenus = recentMenusInput.value.split(',').map(menu => menu.trim()).filter(menu => menu);
    
    return {
        recentMenus: recentMenus,
        weather: weatherInput.value,
        spicyLevel: spicyLevel.value,
        peopleCount: peopleCount.value,
        eatingPlace: eatingPlace.value,
        mood: mood.value
    };
}

// 메뉴 점수 계산
function calculateMenuScore(menu, userInputs) {
    let score = 0;
    
    // 1. 기본 선호도 점수 (0-30점)
    score += menu.preference * 30;
    
    // 2. 최근에 먹은 메뉴 우선순위 (0-40점)
    const recentMenus = userInputs.recentMenus;
    if (recentMenus.length > 0) {
        if (recentMenus.includes(menu.name)) {
            // 최근에 먹은 메뉴는 점수 감점
            score -= 20;
        } else {
            // 안 먹은 메뉴는 보너스
            score += 20;
        }
    } else {
        // 최근 메뉴 정보가 없으면 기존 로직 사용
        const lastEaten = userData.lastEatenMenus[menu.name];
        if (lastEaten) {
            const daysSinceLastEaten = Math.floor((new Date() - new Date(lastEaten)) / (1000 * 60 * 60 * 24));
            score += Math.min(daysSinceLastEaten * 2, 30);
        } else {
            score += 30; // 처음 먹는 메뉴는 보너스
        }
    }
    
    // 3. 날씨 적합성 (0-15점)
    if (menu.weather.includes(userInputs.weather)) {
        score += 15;
    } else {
        score += 5; // 부분 점수
    }
    
    // 4. 매운맛 선호도 (0-10점)
    const spicyScore = getSpicyScore(menu.spicy, userInputs.spicyLevel);
    score += spicyScore;
    
    // 5. 기분에 따른 적합성 (0-10점)
    const moodScore = getMoodScore(menu, userInputs.mood);
    score += moodScore;
    
    // 6. 계절 적합성 (0-5점)
    const currentSeason = getCurrentSeason();
    if (menu.season === 'all' || menu.season === currentSeason) {
        score += 5;
    }
    
    // 7. 랜덤 요소 (0-10점) - 게임 요소
    score += Math.random() * 10;
    
    return Math.round(score * 10) / 10; // 소수점 첫째자리까지
}

// 매운맛 점수 계산
function getSpicyScore(menuSpicy, userSpicyLevel) {
    const spicyLevels = { 'no': 0, 'mild': 1, 'medium': 2, 'high': 3, 'extreme': 4 };
    const menuSpicyLevel = spicyLevels[menuSpicy] || 0;
    const userSpicyLevelNum = spicyLevels[userSpicyLevel] || 0;
    
    const diff = Math.abs(menuSpicyLevel - userSpicyLevelNum);
    return Math.max(0, 10 - diff * 2.5); // 차이가 클수록 점수 감점
}

// 기분에 따른 점수 계산
function getMoodScore(menu, mood) {
    const moodPreferences = {
        'happy': { high: ['피자', '치킨', '초밥', '스테이크'], medium: ['불고기', '탕수육'] },
        'normal': { high: ['비빔밥', '된장찌개', '우동'], medium: ['김치찌개', '짜장면'] },
        'tired': { high: ['라면', '라멘', '우동'], medium: ['된장찌개', '순두부찌개'] },
        'stressed': { high: ['떡볶이', '짬뽕', '마파두부'], medium: ['김치찌개', '닭볶음탕'] },
        'celebrating': { high: ['스테이크', '초밥', '삼겹살'], medium: ['탕수육', '갈비탕'] }
    };
    
    const preferences = moodPreferences[mood];
    if (!preferences) return 5;
    
    if (preferences.high.includes(menu.name)) return 10;
    if (preferences.medium.includes(menu.name)) return 7;
    return 5;
}

// 현재 계절 계산
function getCurrentSeason() {
    const month = new Date().getMonth() + 1;
    if (month >= 3 && month <= 5) return 'spring';
    if (month >= 6 && month <= 8) return 'summer';
    if (month >= 9 && month <= 11) return 'autumn';
    return 'winter';
}

// 결과 표시
function displayResults(recommendations) {
    // 메뉴 정보 업데이트
    recommendations.forEach((menu, index) => {
        const menuCard = document.getElementById(`menu${index + 1}`);
        const menuName = document.getElementById(`menu${index + 1}Name`);
        const menuScore = document.getElementById(`menu${index + 1}Score`);
        const menuReason = document.getElementById(`menu${index + 1}Reason`);
        
        menuName.textContent = menu.name;
        menuScore.textContent = `점수: ${menu.score}점`;
        menuReason.textContent = generateMenuReason(menu);
        
        // 카드 애니메이션
        menuCard.style.opacity = '0';
        menuCard.style.transform = 'translateY(20px)';
        setTimeout(() => {
            menuCard.style.transition = 'all 0.6s ease';
            menuCard.style.opacity = '1';
            menuCard.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // AI 운세 및 멘트 생성
    generateFortuneMessage(recommendations);
}

// 메뉴 추천 이유 생성
function generateMenuReason(menu) {
    const userInputs = getUserInputs();
    
    // 유쾌한 추천 멘트 데이터베이스
    const funReasons = {
        // 기분별 추천
        'happy': [
            '기분이 좋을 때는 더 좋은 걸 먹어야죠!',
            '좋은 기분에 완벽한 메뉴예요!',
            '기분 좋은 날엔 이런 게 딱이죠!',
            '좋은 하루의 마무리로 완벽해요!'
        ],
        'normal': [
            '평범한 하루에 든든한 한 끼!',
            '일상의 소소한 행복을 찾아보세요!',
            '평범하지만 확실한 맛이에요!',
            '꾸준한 맛으로 위로해드려요!'
        ],
        'tired': [
            '피곤할 때는 이런 게 최고죠!',
            '지친 몸과 마음을 달래줄 거예요!',
            '피곤한 하루의 완벽한 마무리!',
            '힘든 하루 끝에 든든한 위로!'
        ],
        'stressed': [
            '스트레스 받을 때는 고기 앞으로!',
            '바로 고기 먹으러 가는 거 어때요?',
            '스트레스 해소엔 이게 최고예요!',
            '힘든 하루의 달콤한 보상!'
        ],
        'celebrating': [
            '축하할 때는 특별한 걸로!',
            '기쁜 날엔 이런 게 딱이죠!',
            '축하의 순간을 더욱 특별하게!',
            '기쁜 하루의 완벽한 마무리!'
        ]
    };
    
    // 메뉴별 특별한 멘트
    const menuSpecialReasons = {
        '김치찌개': '한국인의 소울푸드! 따뜻한 위로가 필요할 때!',
        '불고기': '달콤한 불고기로 마음을 달래보세요!',
        '치킨': '치킨은 언제나 정답이에요! 치킨 앞에 무릎 꿇어요!',
        '피자': '피자 한 조각으로 모든 게 해결돼요!',
        '라면': '라면의 힘으로 하루를 버텨보세요!',
        '초밥': '정갈한 초밥으로 마음을 정리해보세요!',
        '떡볶이': '매운 떡볶이로 스트레스를 날려버려요!',
        '짜장면': '짜장면 한 그릇의 위로!',
        '라멘': '진한 국물이 몸과 마음을 따뜻하게!',
        '스테이크': '고급스러운 스테이크로 특별한 하루를!',
        '삼겹살': '삼겹살과 함께하는 행복한 시간!',
        '족발': '족발 한 점으로 모든 고민이 사라져요!',
        '햄버거': '햄버거 한 입에 모든 스트레스가!',
        '보쌈': '신선한 보쌈으로 몸도 마음도 깨끗하게!',
        '중화요리': '중화요리의 달콤함에 빠져보세요!',
        '일식': '일본의 정갈함을 느껴보세요!',
        '순대': '순대의 쫄깃함이 일상을 즐겁게!',
        '닭볶음탕': '매콤달콤한 닭볶음탕으로 하루를 마무리!',
        '갈비': '갈비의 부드러움이 마음을 달래줘요!',
        '도시락': '든든한 도시락으로 하루를 시작해보세요!'
    };
    
    // 기분에 따른 멘트 선택
    const moodReasons = funReasons[userInputs.mood] || funReasons['normal'];
    const randomMoodReason = moodReasons[Math.floor(Math.random() * moodReasons.length)];
    
    // 메뉴별 특별한 멘트 선택
    const specialReason = menuSpecialReasons[menu.name] || '완벽한 선택이에요!';
    
    // 두 멘트를 조합해서 반환
    return `${randomMoodReason} ${specialReason}`;
}

// AI 운세 메시지 생성
function generateFortuneMessage(recommendations) {
    const fortuneText = document.getElementById('fortuneText');
    const fortuneAdvice = document.getElementById('fortuneAdvice');
    
    // 전체 점수에 따라 운세 결정
    const totalScore = recommendations.reduce((sum, menu) => sum + menu.score, 0);
    const avgScore = totalScore / recommendations.length;
    
    let fortuneType;
    if (avgScore >= 80) {
        fortuneType = 'positive';
    } else if (avgScore >= 60) {
        fortuneType = 'neutral';
    } else {
        fortuneType = 'negative';
    }
    
    // 운세 메시지 선택
    const fortuneMessage = fortuneMessages[fortuneType][Math.floor(Math.random() * fortuneMessages[fortuneType].length)];
    const adviceMessage = adviceMessages[Math.floor(Math.random() * adviceMessages.length)];
    
    // 타이핑 효과
    typeText(fortuneText, fortuneMessage, 50);
    setTimeout(() => {
        typeText(fortuneAdvice, adviceMessage, 30);
    }, 1000);
}

// 타이핑 효과
function typeText(element, text, speed) {
    element.textContent = '';
    let i = 0;
    const timer = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i > text.length) {
            clearInterval(timer);
        }
    }, speed);
}

// 다시 추천받기
function resetRecommendation() {
    resultSection.style.display = 'none';
    resultSection.classList.remove('show');
    userInput.value = '오늘 저녁 메뉴 추천해줘';
    userInput.focus();
}

// 키워드 감지 및 자동 추천
userInput.addEventListener('input', function() {
    const input = this.value.toLowerCase();
    if (input.includes('추천') && input.includes('메뉴')) {
        recommendBtn.style.background = 'linear-gradient(45deg, #4ecdc4, #44a08d)';
        recommendBtn.style.transform = 'scale(1.05)';
    } else {
        recommendBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24)';
        recommendBtn.style.transform = 'scale(1)';
    }
});

// 페이지 로드 시 환영 메시지
window.addEventListener('load', function() {
    setTimeout(() => {
        console.log('🍽️ AI 저녁 메뉴 추천 시스템이 준비되었습니다!');
        console.log('💡 "오늘 저녁 메뉴 추천해줘"라고 입력해보세요!');
    }, 1000);
});
