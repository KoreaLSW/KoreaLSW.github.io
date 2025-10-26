# 🌤️ 날씨 포트폴리오 프로젝트

## 📋 프로젝트 개요

실시간 날씨 정보를 제공하고 사용자 위치 기반으로 맞춤형 날씨 서비스를 제공하는 React 기반 웹 애플리케이션입니다.

## 🎯 프로젝트 목적

- **실시간 날씨 정보 제공**: OpenWeatherMap API를 활용한 정확한 날씨 데이터 제공
- **위치 기반 서비스**: 사용자 현재위치를 활용한 개인화된 날씨 정보
- **사용자 경험 향상**: 직관적인 UI/UX로 날씨 정보를 쉽게 확인할 수 있도록 구현
- **반응형 웹 디자인**: 다양한 디바이스에서 최적화된 사용자 경험 제공

## 🛠️ 핵심 기술 스택

### Frontend Framework & Library

- **React**: JavaScript를 사용하여 컴포넌트 기반 UI 개발
- **React Router DOM**: SPA 라우팅 및 중첩 라우팅 구현
- **CSS Modules**: 컴포넌트별 스타일 격리 및 관리

### 상태 관리 & 데이터 페칭

- **TanStack Query**: 서버 상태 관리 및 캐싱
- **Axios**: HTTP 클라이언트 라이브러리
- **React Hooks**: 함수형 컴포넌트 상태 관리

### 지도 & 위치 서비스

- **Kakao Maps SDK**: 지도 표시 및 위치 검색
- **React Hook Geolocation**: GPS 위치 정보 활용

### UI/UX

- **React Icons**: 다양한 아이콘 라이브러리
- **Custom CSS**: 반응형 디자인 및 애니메이션

## 🏗️ 프로젝트 구조

```
src/
├── api/                    # API 통신 모듈
│   └── weatherAPIs.js      # 날씨 API 함수들
├── component/              # 재사용 가능한 컴포넌트
│   ├── clock/              # 시계 컴포넌트
│   ├── navbar/             # 네비게이션 바
│   └── notfound/           # 404 페이지
├── hooks/                  # 커스텀 훅
│   └── useMapWeather.jsx   # 지도 날씨 데이터 관리
├── pages/                  # 페이지 컴포넌트
│   ├── home/               # 홈 페이지
│   ├── weather/            # 주간 날씨 페이지
│   ├── location/           # 지도 기반 날씨 페이지
│   └── option/             # 설정 페이지
├── javascript/             # 유틸리티 함수
│   ├── ui.js               # UI 관련 함수
│   └── unixTimeConvert.js   # 시간 변환 함수
└── App.js                  # 메인 앱 컴포넌트
```

## 🚀 주요 기능

### 1. 실시간 날씨 정보

- **현재 날씨**: 온도, 날씨 상태, 체감온도 표시
- **주간 예보**: 5일간의 날씨 예보 제공
- **날씨 아이콘**: 직관적인 날씨 상태 표시

### 2. 위치 기반 서비스

- **GPS 위치 감지**: 사용자 현재 위치 자동 감지
- **지도 인터랙션**: 카카오맵API을 통한 위치 선택
- **주소 변환**: 좌표를 주소로 변환하여 표시

### 3. 사용자 맞춤 서비스

- **옷차림 추천**: 온도에 따른 의상 추천
- **실시간 시계**: 현재 시간 표시
- **반응형 디자인**: 모바일/데스크톱 최적화

## 💡 기술적 특징

### 1. 효율적인 데이터 관리

```javascript
// React Query를 활용한 서버 상태 관리
const { data: weather } = useQuery(["toDayWeather"], () => toDayWeather(), {
  staleTime: 1000 * 60 * 100, // 100분 캐싱
});
```

### 2. 커스텀 훅 활용

```javascript
// 지도 날씨 데이터 관리 커스텀 훅
export default function useMapWeather(location) {
  const weatherQuery = useQuery(["mapWeather", location], () =>
    mapWeather(location)
  );
  const updateWeather = useMutation((location) => mapWeather(location));
  return { weatherQuery, updateWeather };
}
```

### 3. 컴포넌트 기반 아키텍처

- **재사용성**: 공통 컴포넌트 분리 및 모듈화
- **유지보수성**: CSS Modules를 통한 스타일 격리
- **확장성**: 중첩 라우팅을 통한 페이지 구조 확장

### 4. 사용한 API

- **OpenWeatherMap API**: 실시간 날씨 데이터
- **Kakao Maps API**: 지도 서비스 및 주소 변환
- **Geolocation API**: 사용자 위치 정보

## 🎨 UI/UX 특징

### 1. 직관적인 디자인

- **날씨 아이콘**: React Icons를 활용한 시각적 표현
- **온도 표시**: 큰 폰트로 명확한 온도 정보 제공
- **색상 시스템**: 날씨 상태에 따른 색상 구분

### 2. 사용자 경험

- **에러 처리**: API 오류 시 적절한 메시지 표시
- **캐싱**: 불필요한 API 호출 최소화

## 🔧 개발 환경

### 의존성 관리

- **Yarn**: 패키지 매니저
- **Create React App**: 개발 환경 설정
- **ESLint**: 코드 품질 관리

### 환경 변수

- **API 키 관리**: 환경 변수를 통한 보안 관리
- **개발/프로덕션**: 환경별 설정 분리

## 🎯 학습 성과

### 기술적 성장

- **React 생태계**: React 기능 및 패턴 학습
- **API 통합**: 외부 API 활용 및 데이터 관리
- **지도 서비스**: 카카오맵 API 활용 경험
- **상태 관리**: React Query를 상태 관리
