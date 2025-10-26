# 📱 SocialSpace Frontend

## 🎯 프로젝트 개요

Next.js와 TypeScript를 기반으로 구축된 현대적인 소셜 네트워크 플랫폼의 프론트엔드 애플리케이션입니다. 실시간 채팅, 무한 스크롤, 반응형 UI 등 최신 웹 기술을 활용하여 개발을 진행하였습니다다.

**프로젝트 유형**: 개인 프로젝트 / Frontend 개발  
**개발환경**: NextJS / TypeScript / TailWindCSS

---

## 💡 프로젝트 목적

1. **NextJS 활용**

   - Next.js App Router를 활용한 최신 React 패턴 적용
   - TypeScript로 타입 안전성을 갖춘 컴포넌트 개발
   - Server/Client Component 분리 전략 구현
   - **SSR (Server-Side Rendering)**: 초기 로딩 속도 최적화를 위한 서버 사이드 렌더링
   - **CSR (Client-Side Rendering)**: 실시간 데이터 업데이트를 위한 클라이언트 사이드 렌더링
   - **하이브리드 렌더링**: 각 페이지 요구사항에 맞게 SSR/CSR 적절히 선택

2. **상태 관리 및 데이터 페칭**

   - SWR을 활용한 선언적 데이터 페칭
   - 캐싱 및 리밸리데이션 자동화
   - Optimistic UI 업데이트로 사용자 경험 향상

3. **실시간 사용자 인터랙션**

   - Socket.IO를 통한 실시간 양방향 통신
   - 즉각적인 알림 및 채팅 메시지 업데이트

4. **반응형 및 접근성 높은 UI/UX**

   - Tailwind CSS를 활용한 모바일 퍼스트 디자인
   - 직관적인 사용자 인터페이스
   - 무한 스크롤 및 페이지네이션 최적화

5. **파일 구조 및 코드 관리**
   - **관심사의 분리**: 컴포넌트, 훅, API 레이어를 명확히 구분
   - **재사용성 높은 설계**: 커스텀 Hook으로 로직 재사용 극대화
   - **타입 안전성**: TypeScript를 통한 타입 체크
   - **레이어 분리**: API 클라이언트, 훅, 컴포넌트의 명확한 책임 구분
   - **모듈화된 구조**: 기능별 디렉토리 구조로 유지보수성 향상

---

## 🛠️ 기술 스택

### **Core**

| 기술           | 버전   | 목적 및 활용                                    |
| -------------- | ------ | ----------------------------------------------- |
| **Next.js**    | 15.3.4 | React 기반의 풀스택 프레임워크, App Router 활용 |
| **React**      | 19.0.0 | UI 라이브러리, 최신 React 19 기능 활용          |
| **TypeScript** | 5.x    | 타입 안정성 확보 및 개발 생산성 향상            |

### **상태 관리 & 데이터 페칭**

| 기술           | 버전   | 목적 및 활용                                      |
| -------------- | ------ | ------------------------------------------------- |
| **SWR**        | 2.3.4  | 데이터 페칭, 캐싱, 리밸리데이션 자동화            |
| **Axios**      | 1.10.0 | HTTP 클라이언트, 인터셉터를 통한 통합 에러 처리   |
| **React Hook** | -      | useState, useEffect, useCallback 등 React 훅 활용 |

### **로그인 방식식**

| 기술             | 버전          | 목적 및 활용                |
| ---------------- | ------------- | --------------------------- |
| **NextAuth**     | 5.0.0-beta.29 | OAuth 2.0 인증 및 세션 관리 |
| **JWT**          | -             | 토큰 기반 인증              |
| **Google OAuth** | -             | Google 소셜 로그인          |

### **실시간 통신**

| 기술                 | 버전  | 목적 및 활용       |
| -------------------- | ----- | ------------------ |
| **Socket.IO Client** | 4.8.1 | 실시간 양방향 통신 |

### **UI & Styling**

| 기술             | 버전    | 목적 및 활용             |
| ---------------- | ------- | ------------------------ |
| **Tailwind CSS** | 4.x     | UI 개발                  |
| **Lucide React** | 0.525.0 | 프로젝트에 사용된 아이콘 |
| **date-fns**     | 4.1.0   | 날짜/시간 포맷팅         |

### **개발 도구**

| 기술       | 목적 및 활용        |
| ---------- | ------------------- |
| **Cursor** | AI 기반 코드 에디터 |
| **ESLint** | 코드 품질 관리      |
| **Git**    | 버전 관리           |
| **Vercel** | 배포 및 호스팅      |

---

## 🏗️ 프로젝트 구조

```
socialspace-fe/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (routes)/                 # 페이지 라우트
│   │   │   ├── page.tsx              # 홈 (피드)
│   │   │   ├── profile/[username]/  # 사용자 프로필
│   │   │   ├── messages/             # 채팅
│   │   │   ├── notifications/        # 알림
│   │   │   ├── search/               # 검색
│   │   │   ├── settings/             # 설정
│   │   │   └── create/               # 게시물 작성
│   │   ├── auth/                     # 인증 관련 페이지
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   └── google/callback/
│   │   ├── api/                      # API 라우트
│   │   │   └── auth/[...nextauth]/
│   │   ├── components/               # 컴포넌트
│   │   │   ├── common/               # 공통 컴포넌트
│   │   │   ├── home/                 # 홈 피드
│   │   │   ├── profile/              # 프로필
│   │   │   ├── chat/                 # 채팅
│   │   │   ├── create/               # 게시물 작성
│   │   │   ├── modal/                # 모달
│   │   │   ├── layout/               # 레이아웃
│   │   │   ├── follow/               # 팔로우
│   │   │   ├── notifications/        # 알림
│   │   │   └── settings/             # 설정
│   │   ├── layout.tsx                # 루트 레이아웃
│   │   ├── globals.css               # 전역 스타일
│   │   └── providers.tsx             # Context Providers
│   ├── hooks/                        # 커스텀 훅 (29개)
│   │   ├── useAuth.ts
│   │   ├── usePosts.ts
│   │   ├── useComments.ts
│   │   ├── useFollow.ts
│   │   ├── useChat.ts
│   │   ├── useNotifications.ts
│   │   └── ...
│   ├── lib/                          # 유틸리티 라이브러리
│   │   ├── api/                      # API 클라이언트
│   │   │   ├── config.ts             # Axios 설정
│   │   │   ├── auth.ts
│   │   │   ├── posts.ts
│   │   │   ├── comments.ts
│   │   │   ├── follows.ts
│   │   │   ├── blocks.ts
│   │   │   ├── chat.ts
│   │   │   ├── notifications.ts
│   │   │   ├── users.ts
│   │   │   └── index.ts
│   │   ├── auth.ts                   # NextAuth 설정
│   │   ├── socket.ts                 # Socket.IO 클라이언트
│   │   ├── socketEvents.ts           # Socket 이벤트 핸들러
│   │   └── swr/                      # SWR 설정
│   ├── types/                        # TypeScript 타입 정의
│   │   ├── post.ts
│   │   ├── chat.ts
│   │   ├── settings.ts
│   │   └── next-auth.d.ts
│   └── middleware.ts                 # Next.js 미들웨어
├── public/                           # 정적 파일
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.ts
```

---

## 🎨 주요 기능 구현

### **1. 인증 시스템 (NextAuth + JWT)**

**OAuth 2.0 Google 로그인**

```typescript
// src/lib/auth.ts
export const authOptions: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      // JWT 토큰에 사용자 정보 포함
      if (user) {
        token.userId = user.id;
        token.username = user.username;
      }
      return token;
    },
  },
};
```

**커스텀 인증 훅**

```typescript
// src/hooks/useAuth.ts
export function useCurrentUser() {
  const { data: session, status } = useSession();

  const { data: backendUser } = useSWR(
    session ? "/auth/verify" : null,
    authApi.verifyToken
  );

  return {
    user: backendUser?.data?.user || session?.user || null,
    isAuthenticated: status === "authenticated" && !!backendUser?.success,
    isLoading: status === "loading",
  };
}
```

### **2. 무한 스크롤 게시물 피드**

**SWR Infinite를 활용한 무한 스크롤**

```typescript
// src/hooks/usePosts.ts
export function useInfinitePosts(limit = 10) {
  const { data, error, size, setSize, mutate } = useSWRInfinite(
    (pageIndex) => `/posts?page=${pageIndex + 1}&limit=${limit}`,
    postsApi.getPosts,
    {
      revalidateFirstPage: false,
      parallel: true,
    }
  );

  const posts = data ? data.flatMap((page) => page.data) : [];
  const hasMore = data?.[data.length - 1]?.pagination?.hasMore ?? true;

  return {
    posts,
    isLoading: !error && !data,
    hasMore,
    loadMore: () => setSize(size + 1),
    mutate,
  };
}
```

**Intersection Observer 구현**

```typescript
// 무한 스크롤 트리거
const observerRef = useRef<IntersectionObserver | null>(null);

const lastPostRef = useCallback(
  (node: HTMLDivElement) => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });

    if (node) observerRef.current.observe(node);
  },
  [isLoading, hasMore, loadMore]
);
```

### **3. 실시간 채팅 시스템**

**Socket.IO 연결 관리**

```typescript
// src/lib/socket.ts
export function initializeSocket(userId: string) {
  const socket = io(SOCKET_URL, {
    auth: { userId },
    transports: ["websocket"],
    reconnection: true,
    reconnectionAttempts: 5,
  });

  socket.on("connect", () => {
    console.log("Socket connected");
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });

  return socket;
}
```

**실시간 메시지 수신**

```typescript
// src/hooks/useChat.ts
export function useChatRoom(roomId: string) {
  const { data: messages, mutate } = useSWR(
    `/chat/rooms/${roomId}/messages`,
    chatApi.getMessages
  );

  useEffect(() => {
    const socket = getSocket();

    socket.on("new_message", (message: Message) => {
      if (message.room_id === roomId) {
        mutate((current) => {
          return current ? [...current, message] : [message];
        }, false);
      }
    });

    return () => {
      socket.off("new_message");
    };
  }, [roomId, mutate]);

  return { messages, mutate };
}
```

### **4. Optimistic UI 업데이트**

**좋아요 버튼 Optimistic 업데이트**

```typescript
// src/components/common/LikeButton.tsx
const handleLike = async () => {
  const optimisticPost = {
    ...post,
    is_liked: !post.is_liked,
    like_count: post.is_liked ? post.like_count - 1 : post.like_count + 1,
  };

  // 즉시 UI 업데이트 (Optimistic)
  mutate(`/posts/${postId}`, optimisticPost, false);

  try {
    if (post.is_liked) {
      await postsApi.unlikePost(postId);
    } else {
      await postsApi.likePost(postId);
    }
  } catch (error) {
    // 실패 시 롤백
    mutate(`/posts/${postId}`);
  }
};
```

### **5. 이미지 업로드 및 미리보기**

**드래그 앤 드롭 이미지 업로드**

```typescript
// src/components/create/ImageUpload.tsx
const handleDrop = useCallback((e: DragEvent) => {
  e.preventDefault();
  const files = Array.from(e.dataTransfer.files);

  const validFiles = files
    .filter((file) => file.type.startsWith("image/"))
    .slice(0, 5); // 최대 5개

  const previews = validFiles.map((file) => {
    return {
      file,
      preview: URL.createObjectURL(file),
    };
  });

  setImages((prev) => [...prev, ...previews].slice(0, 5));
}, []);
```

**이미지 압축 및 Base64 변환**

```typescript
const compressImage = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d")!;

        // 최대 너비/높이
        const MAX_WIDTH = 1200;
        const MAX_HEIGHT = 1200;

        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        resolve(canvas.toDataURL("image/jpeg", 0.8));
      };
      img.src = e.target!.result as string;
    };
    reader.readAsDataURL(file);
  });
};
```

### **6. 댓글 시스템 (계층형 구조)**

**대댓글 렌더링**

```typescript
// src/components/modal/CommentSection.tsx
function CommentThread({ comment, depth = 0 }: CommentThreadProps) {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div style={{ marginLeft: `${depth * 20}px` }}>
      <CommentItem comment={comment} />

      {comment.reply_count > 0 && (
        <button onClick={() => setShowReplies(!showReplies)}>
          {showReplies ? "답글 숨기기" : `답글 ${comment.reply_count}개 보기`}
        </button>
      )}

      {showReplies && (
        <CommentReplies commentId={comment.id} depth={depth + 1} />
      )}
    </div>
  );
}
```

### **7. 알림 시스템**

**실시간 알림 수신 및 표시**

```typescript
// src/hooks/useNotifications.ts
export function useNotifications() {
  const { data: notifications, mutate } = useSWR(
    "/notifications",
    notificationsApi.getNotifications
  );

  const { data: unreadCount, mutate: mutateCount } = useSWR(
    "/notifications/unread-count",
    notificationsApi.getUnreadCount
  );

  useEffect(() => {
    const socket = getSocket();

    socket.on("notification", (notification: Notification) => {
      // 새 알림 추가
      mutate((current) => [notification, ...(current || [])], false);
      // 안읽은 카운트 증가
      mutateCount((count) => (count || 0) + 1, false);
    });

    return () => {
      socket.off("notification");
    };
  }, [mutate, mutateCount]);

  return {
    notifications,
    unreadCount,
    markAsRead: async (id: string) => {
      await notificationsApi.markAsRead(id);
      mutate();
      mutateCount();
    },
  };
}
```

---

## 🔑 핵심 구현 기술

### **1. 커스텀 훅**

프로젝트 전반에 걸쳐 로직의 재사용이 가능한 커스텀 훅 구현

**데이터 페칭 훅**

- `useCurrentUser()` - 현재 로그인 사용자 정보
- `useInfinitePosts()` - 무한 스크롤 게시물
- `usePostById()` - 특정 게시물 조회
- `useUserPosts()` - 특정 사용자 게시물
- `useComments()` - 댓글 목록
- `useFollowStatus()` - 팔로우 상태
- `useChatRooms()` - 채팅방 목록
- `useNotifications()` - 알림 목록

**인터랙션 훅**

- `useLikePost()` - 게시물 좋아요
- `useFollowUser()` - 팔로우/언팔로우
- `useBlockUser()` - 사용자 차단
- `useSendMessage()` - 메시지 전송

**유틸리티 훅**

- `useDebounce()` - 입력 디바운싱
- `useIntersectionObserver()` - 뷰포트 감지
- `useMediaQuery()` - 반응형 미디어 쿼리

### **2. Axios 인터셉터**

**요청 인터셉터 (Request Interceptor)**

```typescript
// src/lib/api/config.ts
expressApi.interceptors.request.use(async (config) => {
  // NextAuth JWT 토큰을 Authorization 헤더에 추가
  const token = await getNextAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

**응답 인터셉터 (Response Interceptor)**

```typescript
expressApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // 인증 만료 시 로그아웃
      await signOut();
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);
```

### **3. SWR 캐싱 전략**

**전역 SWR 설정**

```typescript
// src/app/providers.tsx
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: true,
        dedupingInterval: 2000,
        errorRetryCount: 3,
        onError: (error) => {
          if (error.status !== 403 && error.status !== 404) {
            console.error("SWR Error:", error);
          }
        },
      }}
    >
      <SessionProvider>{children}</SessionProvider>
    </SWRConfig>
  );
}
```

**캐시 갱신 전략**

```typescript
// 특정 키 갱신
mutate("/posts");

// 여러 키 갱신
mutate((key) => typeof key === "string" && key.startsWith("/posts"));

// Optimistic 업데이트
mutate("/posts", optimisticData, false);
```

---

## 📊 성능 최적화

### **1. SSR/CSR 하이브리드 렌더링 전략**

**SSR (Server-Side Rendering) 활용**

- **레이아웃 및 공통 컴포넌트**: root layout, navigation 등 정적 UI는 SSR로 초기 로딩 최적화
- **메타데이터 최적화**: SEO를 위한 메타데이터는 서버에서 렌더링
- **초기 페인트 향상**: 서버에서 HTML 생성하여 첫 화면 표시 속도 개선

```typescript
// src/app/layout.tsx - SSR로 전체 레이아웃 렌더링
export const metadata: Metadata = {
  title: "SocialSpace - SNS 커뮤니티",
  description: "인스타그램과 레딧 스타일의 소셜 네트워크 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <LayoutContent>{children}</LayoutContent>
        </Providers>
      </body>
    </html>
  );
}
```

**CSR (Client-Side Rendering) 활용**

- **실시간 채팅**: Socket.IO 기반 실시간 통신은 클라이언트에서 처리
- **무한 스크롤**: SWR을 사용한 동적 데이터 로딩
- **인터랙티브 컴포넌트**: 모달, 드롭다운 등 사용자 인터랙션 중심 UI

```typescript
// src/app/page.tsx - 홈 피드는 CSR로 실시간 데이터 반영
"use client";

export default function HomePage() {
  const { posts, isLoading, hasMore, setSize } = useInfinitePosts(10);

  return (
    <PostList
      posts={posts}
      isLoading={isLoading}
      onLoadMore={() => setSize(size + 1)}
    />
  );
}
```

**하이브리드 렌더링 전략**

- **정적 부분**: SSR로 빠른 초기 로딩
- **동적 부분**: CSR로 실시간 업데이트
- **페이지별 최적화**: 요구사항에 맞게 적절한 렌더링 방식 선택

### **2. 코드 스플리팅**

**애플리케이션의 코드를 여러 작은 번들로 분할하여 필요할 때만 로드하는 최적화 기법**

- **초기 로딩 시간 단축**: 앱 시작 시 필요한 최소한의 코드만 로드
- **번들 크기 감소**: 전체 코드를 한 번에 다운로드하지 않고 필요한 부분만 로드
- **메모리 효율성**: 사용하지 않는 컴포넌트는 메모리에 로드하지 않음

**동적 임포트**

```typescript
// 모달 컴포넌트 지연 로딩 (CSR)
const PostDetailModal = dynamic(
  () => import("@/components/modal/PostDetailModal"),
  { ssr: false }
);

const CreatePostModal = dynamic(
  () => import("@/components/modal/CreatePostModal"),
  { ssr: false }
);
```

### **2. 이미지 최적화**

**Next.js Image 컴포넌트 활용**

```typescript
import Image from "next/image";

<Image
  src={profileImage}
  alt={username}
  width={40}
  height={40}
  className="rounded-full"
  loading="lazy"
  quality={85}
/>;
```

### **3. 메모이제이션**

**React.memo 및 useMemo 활용**

```typescript
const PostCard = React.memo(({ post }: PostCardProps) => {
  const formattedDate = useMemo(
    () => formatDistanceToNow(new Date(post.created_at)),
    [post.created_at]
  );

  return <div>{/* ... */}</div>;
});
```

### **4. 디바운싱**

**검색 입력 디바운싱**

```typescript
const [searchTerm, setSearchTerm] = useState("");
const debouncedSearch = useDebounce(searchTerm, 500);

const { data: searchResults } = useSWR(
  debouncedSearch ? `/users/search?q=${debouncedSearch}` : null,
  usersApi.search
);
```

---

## 🎨 UI/UX 특징

### **1. 반응형 디자인**

- 해상도에 따른 모바일 및 데스크탑 UI 적용용
- Tailwind CSS 브레이크포인트 활용 (`sm`, `md`, `lg`, `xl`)
- 터치 친화적 인터페이스

### **2. 로딩 상태 UI**

```typescript
{
  isLoading ? <PostSkeleton /> : <PostCard post={post} />;
}
```

### **3. 에러 바운더리**

```typescript
// src/components/common/ErrorBoundary.tsx
export class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

---

## 🚀 개발 과정에서 배운 점

### **1. Next.js 15 App Router 마스터**

- Server Components vs Client Components 구분
- Dynamic Routes 및 Parallel Routes 활용
- Middleware를 통한 인증 라우트 보호

### **2. SWR을 활용한 효율적인 데이터 관리**

- Stale-While-Revalidate 패턴 이해
- 캐시 무효화 및 갱신 전략
- Infinite Loading 구현

### **3. 실시간 통신 구현**

- Socket.IO 이벤트 리스너 관리
- 메모리 누수 방지 (cleanup)
- 재연결 로직 구현

### **4. TypeScript 타입 안전성**

- Generic 타입 활용
- Utility Types (Partial, Pick, Omit 등)
- 타입 가드 구현

### **5. 성능 최적화 기법**

- React 렌더링 최적화
- 번들 사이즈 최적화
- Lazy Loading 및 Code Splitting

---

## 🔗 관련 링크

- **GitHub Repository**: [링크]
- **Live Demo**: [링크]
- **Figma Design**: [링크]

---

## 📝 기술적 하이라이트

### **주요 성과**

✅ **재사용 가능한 커스텀 훅** 구현
✅ **실시간 Socket.IO** 통신 구현  
✅ **무한 스크롤** 및 페이지네이션 최적화  
✅ **Optimistic UI 업데이트**로 빠른 반응성  
✅ **TypeScript strict mode** 적용  
✅ **반응형 디자인** (모바일/데스크톱)

### **코드 품질**

- TypeScript 적용
- ESLint 규칙 준수
- 컴포넌트 재사용성 극대화
- 일관된 네이밍 컨벤션

---

**작성일**: 2025년 10월 25일  
**최종 수정**: 2025년 10월 25일
