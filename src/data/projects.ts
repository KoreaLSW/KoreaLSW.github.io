export const projects = [
  {
    id: 1,
    title: "Socialspace",
    description:
      "사용자들의 추억을 공유하고 소통할 수 있는 SNS 웹 애플리케이션",
    tech: ["NextJS", "TypeScript", "Express", "PostgreSQL"],
    links: {
      project: "https://socialspace-fe.onrender.com/",
      client: "https://github.com/KoreaLSW/Socialspace_FE",
      server: "https://github.com/KoreaLSW/Socialspace_BE",
    },
    features: [
      "실시간 게시물 공유",
      "사용자 간 팔로우 시스템",
      "채팅 기능",
      "반응형 디자인",
    ],
    details: {
      overview:
        "Next.js와 TypeScript 기반의 실시간 소셜 네트워크 플랫폼입니다. SWR을 사용하여 효율적인 데이터 관리를 구현했으며, Socket.IO를 활용한 실시간 채팅과 알림 기능을 제공합니다. 무한 스크롤, Optimistic UI 업데이트, 계층형 댓글 시스템 등 다양한 기술을 적용하여 사용자 경험을 최적화했습니다.",
      technologies: {
        frontend: [
          "NextJS",
          "TypeScript",
          "TailwindCSS",
          "React Router",
          "Axios",
        ],
        backend: ["Express", "Node.js", "MySQL", "JWT", "Socket.IO", "Multer"],
      },
      highlights: [
        "Next.js와 TypeScript 사용: 상황에 맞는 SSR/CSR 렌더링 사용 및 TypeScript를 사용하여 타입의 안전성 확보",
        "SWR 기반 데이터 관리: 캐시된 데이터를 즉시 표시하고, 백그라운드에서 최신 데이터를 자동 갱신해 빠르고 효율적인 UI 제공",
        "Socket.IO 실시간 통신: Socket통신으로 실시간 메신저 기능 구현",
        "무한 스크롤 피드: Intersection Observer API + SWR Infinite로 성능 최적화된 무한 스크롤 게시물 피드 구현",
        "커스텀 훅: 로직 재사용성을 극대화한 커스텀 훅 설계",
        "메모제이션 사용: useMemo, useCallback을 사용하여 불필요한 연산을 최소화하고 성능을 최적화",
      ],
    },
  },
  {
    id: 2,
    title: "날씨 알리미",
    description:
      "실시간 날씨 정보를 제공하고 사용자 위치 기반으로 맞춤형 날씨 서비스를 제공하는 React 기반 웹 애플리케이션",
    tech: ["JavaScript", "React", "TanStack Query", "Axios", "Kakao Maps SDK"],
    links: {
      project: "https://friendly-torrone-28699c.netlify.app/",
      github: "https://github.com/KoreaLSW/Portfolio_Weather",
    },
    features: [
      "실시간 날씨 정보 제공",
      "GPS 위치 감지 및 지도 연동",
      "주간 예보 및 날씨 아이콘 표시",
      "기온에 따른 옷차림 추천",
    ],
    details: {
      overview:
        "날씨 알리미는 OpenWeatherMap API와 Kakao Maps API를 활용하여 사용자의 현재 위치를 기반으로 실시간 날씨 정보를 제공하는 웹 애플리케이션입니다. TanStack React Query를 사용한 효율적인 데이터 관리와 반응형 디자인으로 다양한 디바이스에서 최적화된 사용자 경험을 제공합니다.",
      technologies: {
        frontend: [
          "React",
          "JavaScript",
          "TanStack Query",
          "Axios",
          "Kakao Maps SDK",
          "CSS Modules",
        ],
        api: ["OpenWeatherMap API", "Kakao Maps API", "Geolocation API"],
      },
      highlights: [
        "TanStack React Query 활용: 캐시된 데이터를 즉시 표시하고 백그라운드에서 최신 데이터를 자동 갱신해 빠르고 효율적인 UI 제공",
        "커스텀 훅 설계: useMapWeather를 통한 지도 날씨 데이터 관리 및 로직 재사용성 극대화",
        "컴포넌트 기반 아키텍처: 공통 컴포넌트 분리 및 CSS Modules를 통한 스타일 격리로 유지보수성 향상",
        "Geolocation API 활용: 사용자 현재 위치 자동 감지 및 위치 기반 개인화된 날씨 서비스 제공",
        "React Router DOM: SPA 라우팅 및 중첩 라우팅을 통한 확장 가능한 페이지 구조",
      ],
    },
  },
];
