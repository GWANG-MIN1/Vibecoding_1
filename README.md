# 📰 DAYNEW

개인 맞춤 뉴스 요약 서비스 - 관심사 기반 뉴스 수집 및 AI 요약

## 🚀 기능

- **관심사 기반 뉴스 필터링**: 카테고리별 뉴스 수집
- **키워드 검색**: 원하는 키워드로 뉴스 필터링
- **실시간 업데이트**: 최신 뉴스 자동 수집
- **반응형 디자인**: 모바일/데스크톱 지원

## 🛠 기술 스택

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- 반응형 디자인

### Backend
- Python Flask
- NewsAPI (뉴스 수집)

## 📦 설치 및 실행

### 1. 저장소 클론
```bash
git clone <repository-url>
cd vibecoding_1
```

### 2. Python 의존성 설치
```bash
pip install -r requirements.txt
```

### 3. API 키 설정
`env_example.txt` 파일을 참고하여 `.env` 파일을 생성하고 API 키를 설정하세요:

```bash
# .env 파일 생성
NEWS_API_KEY=your_news_api_key_here
```

#### API 키 발급 방법:
- **NewsAPI**: https://newsapi.org/ (무료)

### 4. 서버 실행
```bash
# 백엔드 서버 실행 (포트 5000)
python app.py

# 프론트엔드 서버 실행 (포트 8000) - 새 터미널에서
python -m http.server 8000
```

### 5. 웹페이지 접속
브라우저에서 `http://localhost:8000`으로 접속하세요!

## 🎯 사용법

1. **관심사 설정**: 원하는 카테고리 선택 (IT/기술, 경제, 스포츠 등)
2. **키워드 입력**: 관심 있는 키워드 입력 (예: AI, 코인, 축구)
3. **뉴스 업데이트**: "📰 뉴스 업데이트" 버튼 클릭
4. **뉴스 확인**: 요약된 뉴스를 카드 형태로 확인

## 📁 프로젝트 구조

```
vibecoding_1/
├── index.html          # 메인 페이지
├── style.css           # 스타일시트
├── script.js           # 프론트엔드 JavaScript
├── app.py              # Flask 백엔드 서버
├── config.py           # 설정 파일
├── requirements.txt    # Python 의존성
├── env_example.txt     # 환경변수 예시
└── README.md           # 프로젝트 설명
```

## 🔧 API 엔드포인트

- `GET /` - 메인 페이지
- `POST /api/news` - 뉴스 조회
- `GET /api/health` - 서버 상태 확인

## 🎨 주요 기능

### 뉴스 수집
- NewsAPI를 통한 실시간 뉴스 수집
- 카테고리별 필터링
- 키워드 기반 검색

### 사용자 경험
- 직관적인 UI/UX
- 실시간 로딩 애니메이션
- 반응형 디자인

## 🚧 향후 계획

- [ ] 사용자 피드백 시스템 (좋아요/싫어요)
- [ ] 뉴스 북마크 기능
- [ ] 이메일 알림 설정
- [ ] 다국어 지원
- [ ] 모바일 앱 개발

## 📄 라이선스

MIT License

## 👨‍💻 개발자
Gwangmin

---

**25-2 딥러닝 과제**
