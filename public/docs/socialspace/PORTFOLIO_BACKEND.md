# 🔧 SocialSpace Backend

## 🎯 프로젝트 개요

Express.js와 TypeScript로 구축된 확장 가능한 RESTful API 서버입니다. PostgreSQL 데이터베이스와 TypeORM을 활용하여 소셜 네트워크 플랫폼의 핵심 백엔드 로직을 처리하며, Socket.IO를 통한 실시간 통신을 지원합니다.

**프로젝트 유형**: 개인 프로젝트 / Backend 개발

---

## 💡 프로젝트 목적

1. **확장 가능한 RESTful API 설계**

   - 70개 이상의 체계적인 엔드포인트 구축
   - 일관된 API 응답 포맷 및 에러 처리
   - 모듈화된 라우터 및 컨트롤러 구조

2. **효율적인 데이터베이스 설계**

   - PostgreSQL을 활용한 관계형 데이터 모델링
   - TypeORM을 통한 ORM 패턴 적용
   - 복잡한 관계 및 트랜잭션 처리

3. **실시간 통신 인프라 구축**

   - Socket.IO 기반 이벤트 드리븐 아키텍처
   - 실시간 채팅 및 알림 시스템

4. **보안 및 인증 체계 확립**
   - JWT 토큰 기반 인증
   - NextAuth와의 하이브리드 인증 시스템
   - CORS, XSS, SQL Injection 방어

---

## 🛠️ 기술 스택

### **Core**

| 기술           | 버전  | 목적 및 활용                             |
| -------------- | ----- | ---------------------------------------- |
| **Node.js**    | 18+   | JavaScript 런타임 환경                   |
| **Express.js** | 5.1.0 | 웹 서버 프레임워크 및 RESTful API 구축   |
| **TypeScript** | 5.8.3 | 서버사이드 타입 안정성 및 코드 품질 향상 |

### **데이터베이스 & ORM**

| 기술           | 버전   | 목적 및 활용                                      |
| -------------- | ------ | ------------------------------------------------- |
| **PostgreSQL** | -      | 관계형 데이터베이스, 복잡한 쿼리 및 트랜잭션 처리 |
| **pg**         | 8.16.3 | PostgreSQL 드라이버                               |

### **인증 & 보안**

| 기술                    | 버전   | 목적 및 활용               |
| ----------------------- | ------ | -------------------------- |
| **jsonwebtoken**        | 9.0.2  | JWT 토큰 생성 및 검증      |
| **bcryptjs**            | 3.0.2  | 비밀번호 해싱              |
| **Google Auth Library** | 10.1.0 | Google OAuth 2.0 토큰 검증 |
| **cookie-parser**       | 1.4.7  | 쿠키 파싱                  |

### **실시간 통신**

| 기술          | 버전  | 목적 및 활용                 |
| ------------- | ----- | ---------------------------- |
| **Socket.IO** | 4.8.1 | 실시간 이벤트 기반 통신 서버 |

### **파일 업로드 & 미디어**

| 기술           | 버전  | 목적 및 활용                    |
| -------------- | ----- | ------------------------------- |
| **Cloudinary** | 2.7.0 | 이미지 및 미디어 파일 CDN       |
| **multer**     | 2.0.1 | Multipart/form-data 파일 업로드 |

### **기타**

| 기술       | 버전   | 목적 및 활용             |
| ---------- | ------ | ------------------------ |
| **CORS**   | 2.8.5  | Cross-Origin 리소스 공유 |
| **dotenv** | 17.0.1 | 환경 변수 관리           |

### **개발 도구**

- **ts-node**: TypeScript 직접 실행
- **nodemon**: 개발 중 자동 재시작
- **Git/GitHub**: 버전 관리

---

## 🏗️ 프로젝트 구조

```
socialspace-be/
├── config/
│   ├── database.ts           # PostgreSQL 연결 설정
│   └── cloudinary.ts         # Cloudinary 설정
├── models/                   # TypeORM 엔티티 (15개)
│   ├── User.ts
│   ├── Post.ts
│   ├── PostImage.ts
│   ├── PostHashtag.ts
│   ├── Comment.ts
│   ├── CommentMention.ts
│   ├── Like.ts
│   ├── Follow.ts
│   ├── Block.ts
│   ├── Chat.ts
│   ├── Notification.ts
│   ├── PostView.ts
│   ├── Hashtag.ts
│   ├── interactions/
│   │   ├── InteractionSummary.ts
│   │   └── Share.ts
│   ├── recommendations/
│   │   └── PostRecommendation.ts
│   └── cache/
│       └── RecommendationCache.ts
├── controllers/              # 비즈니스 로직
│   ├── authController.ts
│   ├── usersController.ts
│   ├── posts/
│   │   ├── postsController.ts
│   │   └── imageController.ts
│   ├── commentsController.ts
│   ├── followController.ts
│   ├── chatController.ts
│   ├── notificationsController.ts
│   ├── notificationPreferencesController.ts
│   └── healthController.ts
├── routes/                   # API 라우터
│   ├── index.ts              # 메인 라우터
│   ├── auth.ts
│   ├── users.ts
│   ├── posts.ts
│   ├── comments.ts
│   ├── follow.ts
│   ├── chat.ts
│   └── notifications.ts
├── middleware/               # 미들웨어
│   ├── auth.ts               # JWT 인증
│   ├── blockCheck.ts         # 차단 확인
│   ├── silentBlock.ts        # 차단 필터링
│   ├── silentFollowBlock.ts  # 팔로우 관계 체크
│   └── errorHandler.ts       # 에러 핸들러
├── socket/                   # Socket.IO
│   └── index.ts              # Socket 이벤트 핸들러
├── utils/                    # 유틸리티
│   ├── logger.ts             # 로깅 유틸
│   ├── time.ts               # 시간 관련 유틸
│   └── ip.ts                 # IP 추출 유틸
├── scripts/                  # 스크립트
├── sql/                      # SQL 파일
│   ├── query.sql
│   ├── dbdiagram.io
│   └── chat_system_migration.sql
├── server.ts                 # 서버 진입점
├── package.json
├── tsconfig.json
└── .env                      # 환경 변수
```

---

## 🗄️ 데이터베이스 설계

### **엔티티 관계도 (ERD)**

**15개의 엔티티 모델**

```
┌─────────────────┐
│      User       │
│─────────────────│
│ id (PK)         │
│ email           │
│ username        │
│ nickname        │
│ password_hash   │
│ profile_image   │
│ bio             │
│ visibility      │
│ provider        │
│ created_at      │
└─────────────────┘
        │
        ├──────────────────────────────┐
        │                              │
        ▼                              ▼
┌─────────────────┐          ┌─────────────────┐
│      Post       │          │     Follow      │
│─────────────────│          │─────────────────│
│ id (PK)         │          │ follower_id(FK) │
│ user_id (FK)    │          │ followee_id(FK) │
│ content         │          │ status          │
│ visibility      │          │ is_favorite     │
│ like_count      │          │ created_at      │
│ comment_count   │          └─────────────────┘
│ view_count      │
│ hide_likes      │          ┌─────────────────┐
│ hide_views      │          │     Block       │
│ allow_comments  │          │─────────────────│
│ created_at      │          │ blocker_id (FK) │
└─────────────────┘          │ blocked_id (FK) │
        │                    │ created_at      │
        ├────────────┐       └─────────────────┘
        ▼            ▼
┌─────────────┐  ┌──────────┐
│  PostImage  │  │ Hashtag  │
│─────────────│  │──────────│
│ id (PK)     │  │ id (PK)  │
│ post_id(FK) │  │ name     │
│ image_url   │  └──────────┘
│ order       │       │
└─────────────┘       │
                      ▼
              ┌──────────────┐
              │ PostHashtag  │
              │──────────────│
              │ post_id (FK) │
              │ hashtag_id   │
              └──────────────┘

┌─────────────────┐          ┌─────────────────┐
│    Comment      │          │   Notification  │
│─────────────────│          │─────────────────│
│ id (PK)         │          │ id (PK)         │
│ post_id (FK)    │          │ user_id (FK)    │
│ user_id (FK)    │          │ from_user_id    │
│ parent_id (FK)  │◄────┐    │ type            │
│ content         │     │    │ target_id       │
│ like_count      │     │    │ is_read         │
│ created_at      │     │    │ created_at      │
└─────────────────┘     │    └─────────────────┘
                        │
                        └─ 계층형 구조

┌─────────────────┐          ┌─────────────────┐
│      Chat       │          │    Message      │
│─────────────────│          │─────────────────│
│ id (PK)         │◄─────────│ id (PK)         │
│ is_group        │          │ room_id (FK)    │
│ name            │          │ sender_id (FK)  │
│ last_message_at │          │ content         │
│ created_at      │          │ message_type    │
└─────────────────┘          │ is_deleted      │
        │                    │ created_at      │
        │                    └─────────────────┘
        ▼
┌─────────────────┐
│   ChatMember    │
│─────────────────│
│ chat_id (FK)    │
│ user_id (FK)    │
│ joined_at       │
└─────────────────┘
```

### **주요 관계**

**1:N 관계**

- User → Post
- User → Comment
- Post → Comment
- Post → PostImage
- Chat → Message

**M:N 관계**

- User ↔ User (Follow, Block - 자기 참조)
- Post ↔ Hashtag (through PostHashtag)
- Chat ↔ User (through ChatMember)

**계층형 구조**

- Comment → Comment (parent_id, 대댓글)

---

## 🎯 주요 기능 구현

### **1. JWT 기반 인증 시스템**

**NextAuth JWT 토큰 검증 미들웨어**

```typescript
// middleware/auth.ts
export const authenticateNextAuthToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.slice(7); // "Bearer " 제거

  if (!token) {
    res.status(401).json({ error: "인증 토큰이 필요합니다." });
    return;
  }

  jwt.verify(token, process.env.NEXTAUTH_SECRET as string, (err, decoded) => {
    if (err || !decoded) {
      res.status(403).json({ error: "유효하지 않은 토큰입니다." });
      return;
    }

    const { userId, email, username, nickname } = decoded as any;
    req.user = { id: userId, email, username, nickname };
    next();
  });
};
```

**선택적 인증 미들웨어**

```typescript
// 로그인 여부에 상관없이 접근 가능, 로그인 시 추가 정보 제공
export const optionalAuth = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.slice(7);

  if (!token) {
    next();
    return;
  }

  jwt.verify(token, process.env.NEXTAUTH_SECRET as string, (err, decoded) => {
    if (!err && decoded) {
      const { userId, email, username, nickname } = decoded as any;
      req.user = { id: userId, email, username, nickname };
    }
    next();
  });
};
```

### **2. 게시물 시스템**

**게시물 생성 (트랜잭션 처리)**

```typescript
// controllers/posts/postsController.ts
export const createPost = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { content, visibility, images, hashtags, hide_likes, allow_comments } =
    req.body;
  const userId = req.user!.id;

  const queryRunner = pool.connect();
  await queryRunner.query("BEGIN");

  try {
    // 1. 게시물 생성
    const postResult = await queryRunner.query(
      `INSERT INTO posts (user_id, content, visibility, hide_likes, allow_comments)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [userId, content, visibility, hide_likes, allow_comments]
    );

    const postId = postResult.rows[0].id;

    // 2. 이미지 저장
    if (images && images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        await queryRunner.query(
          `INSERT INTO post_images (post_id, image_url, "order")
           VALUES ($1, $2, $3)`,
          [postId, images[i], i]
        );
      }
    }

    // 3. 해시태그 처리
    if (hashtags && hashtags.length > 0) {
      for (const tag of hashtags) {
        // 해시태그 존재 확인 또는 생성
        const hashtagResult = await queryRunner.query(
          `INSERT INTO hashtags (name) VALUES ($1)
           ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name
           RETURNING id`,
          [tag]
        );

        const hashtagId = hashtagResult.rows[0].id;

        // 게시물-해시태그 연결
        await queryRunner.query(
          `INSERT INTO post_hashtags (post_id, hashtag_id)
           VALUES ($1, $2)`,
          [postId, hashtagId]
        );
      }
    }

    await queryRunner.query("COMMIT");

    res.status(201).json({
      success: true,
      data: { postId },
    });
  } catch (error) {
    await queryRunner.query("ROLLBACK");
    throw error;
  } finally {
    queryRunner.release();
  }
};
```

### **3. 차단 시스템 (Silent Block)**

**차단된 사용자 필터링 미들웨어**

```typescript
// middleware/silentBlock.ts
export const silentBlock = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId = req.user?.id;

  if (!userId) {
    next();
    return;
  }

  try {
    // 차단한 사용자 목록 조회
    const blockedResult = await pool.query(
      `SELECT blocked_id FROM blocks WHERE blocker_id = $1`,
      [userId]
    );

    // 나를 차단한 사용자 목록 조회
    const blockerResult = await pool.query(
      `SELECT blocker_id FROM blocks WHERE blocked_id = $1`,
      [userId]
    );

    req.blockedUsers = blockedResult.rows.map((row) => row.blocked_id);
    req.blockerUsers = blockerResult.rows.map((row) => row.blocker_id);

    next();
  } catch (error) {
    next(error);
  }
};
```

### **4. Socket.IO 실시간 통신**

**Socket 이벤트 핸들러**

```typescript
// socket/index.ts
export function initializeSocket(httpServer: Server) {
  const io = new SocketIOServer(httpServer, {
    cors: {
      origin: process.env.ALLOWED_ORIGINS,
      credentials: true,
    },
  });

  // 사용자별 소켓 매핑 (온라인 상태)
  const userSockets = new Map<string, string>();

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    // 사용자 인증 및 등록
    socket.on("register", (userId: string) => {
      userSockets.set(userId, socket.id);
      socket.join(`user:${userId}`);

      // 온라인 상태 브로드캐스트
      socket.broadcast.emit("user_online", { userId });
    });

    // 채팅 메시지 전송
    socket.on("send_message", async (data) => {
      const { roomId, senderId, content, messageType } = data;

      try {
        // DB에 메시지 저장
        const result = await pool.query(
          `INSERT INTO messages (room_id, sender_id, content, message_type)
           VALUES ($1, $2, $3, $4) RETURNING *`,
          [roomId, senderId, content, messageType]
        );

        const message = result.rows[0];

        // 채팅방 멤버에게 전송
        io.to(`room:${roomId}`).emit("new_message", message);

        // 채팅방 업데이트
        await pool.query(
          `UPDATE chats SET last_message_at = NOW() WHERE id = $1`,
          [roomId]
        );
      } catch (error) {
        socket.emit("error", { message: "메시지 전송 실패" });
      }
    });

    // 메시지 읽음 처리
    socket.on("message_read", async (data) => {
      const { messageId, userId } = data;

      await pool.query(
        `INSERT INTO message_reads (message_id, user_id)
         VALUES ($1, $2) ON CONFLICT DO NOTHING`,
        [messageId, userId]
      );

      // 발신자에게 읽음 알림
      const message = await pool.query(
        `SELECT sender_id FROM messages WHERE id = $1`,
        [messageId]
      );

      const senderId = message.rows[0].sender_id;
      const senderSocketId = userSockets.get(senderId);

      if (senderSocketId) {
        io.to(senderSocketId).emit("message_read", { messageId, userId });
      }
    });

    // 알림 전송
    socket.on("send_notification", (notification) => {
      const recipientSocketId = userSockets.get(notification.user_id);

      if (recipientSocketId) {
        io.to(recipientSocketId).emit("notification", notification);
      }
    });

    // 연결 해제
    socket.on("disconnect", () => {
      // userSockets에서 제거
      for (const [userId, socketId] of userSockets.entries()) {
        if (socketId === socket.id) {
          userSockets.delete(userId);
          socket.broadcast.emit("user_offline", { userId });
          break;
        }
      }
    });
  });

  return io;
}
```

### **5. 이미지 업로드 (Cloudinary)**

**Multer + Cloudinary 통합**

```typescript
// controllers/posts/imageController.ts
import cloudinary from "../../config/cloudinary";
import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("이미지 파일만 업로드 가능합니다."));
    }
  },
});

export const uploadSingleImage = [
  upload.single("image"),
  async (req: Request, res: Response): Promise<void> => {
    if (!req.file) {
      res.status(400).json({ error: "파일이 없습니다." });
      return;
    }

    const result = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
      {
        folder: "socialspace/posts",
        transformation: [
          { width: 1200, height: 1200, crop: "limit" },
          { quality: "auto" },
        ],
      }
    );

    res.json({
      success: true,
      data: { url: result.secure_url },
    });
  },
];
```

**Base64 이미지 업로드**

```typescript
export const uploadBase64Image = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { imageData } = req.body;

  if (!imageData || !imageData.startsWith("data:image")) {
    res.status(400).json({ error: "유효하지 않은 이미지 데이터입니다." });
    return;
  }

  const result = await cloudinary.uploader.upload(imageData, {
    folder: "socialspace/posts",
    transformation: [
      { width: 1200, height: 1200, crop: "limit" },
      { quality: "auto", fetch_format: "auto" },
    ],
  });

  res.json({
    success: true,
    data: { url: result.secure_url },
  });
};
```

### **6. 알림 시스템**

**알림 생성 및 전송**

```typescript
// controllers/notificationsController.ts
export const createNotification = async (
  userId: string,
  fromUserId: string,
  type: NotificationType,
  targetId: string
): Promise<void> => {
  // 알림 설정 확인
  const prefsResult = await pool.query(
    `SELECT ${type} FROM notification_preferences WHERE user_id = $1`,
    [userId]
  );

  if (!prefsResult.rows[0] || !prefsResult.rows[0][type]) {
    return; // 알림 설정 꺼져있음
  }

  // 알림 생성
  const result = await pool.query(
    `INSERT INTO notifications (user_id, from_user_id, type, target_id)
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [userId, fromUserId, type, targetId]
  );

  const notification = result.rows[0];

  // Socket.IO로 실시간 전송
  const io = getIO(); // Socket.IO 인스턴스
  io.to(`user:${userId}`).emit("notification", notification);
};
```

### **7. 팔로우 시스템 (비공개 계정 지원)**

**팔로우 요청 및 승인**

```typescript
export const toggleFollow = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const followerId = req.user!.id;
  const { targetUserId } = req.params;

  // 대상 사용자 정보 조회
  const targetUser = await pool.query(
    `SELECT visibility FROM users WHERE id = $1`,
    [targetUserId]
  );

  if (!targetUser.rows[0]) {
    res.status(404).json({ error: "사용자를 찾을 수 없습니다." });
    return;
  }

  const isPrivate = targetUser.rows[0].visibility === "private";

  // 기존 팔로우 관계 확인
  const existingFollow = await pool.query(
    `SELECT * FROM follows WHERE follower_id = $1 AND followee_id = $2`,
    [followerId, targetUserId]
  );

  if (existingFollow.rows.length > 0) {
    // 언팔로우
    await pool.query(
      `DELETE FROM follows WHERE follower_id = $1 AND followee_id = $2`,
      [followerId, targetUserId]
    );

    res.json({ success: true, action: "unfollowed" });
  } else {
    // 팔로우 또는 요청
    const status = isPrivate ? "pending" : "accepted";

    await pool.query(
      `INSERT INTO follows (follower_id, followee_id, status)
       VALUES ($1, $2, $3)`,
      [followerId, targetUserId, status]
    );

    if (status === "accepted") {
      // 알림 생성
      await createNotification(targetUserId, followerId, "follow", followerId);
    }

    res.json({
      success: true,
      action: isPrivate ? "requested" : "followed",
    });
  }
};
```

---

## 🔒 보안 구현

### **1. 비밀번호 암호화**

```typescript
import bcrypt from "bcryptjs";

// 비밀번호 해싱
const passwordHash = await bcrypt.hash(password, 10);

// 비밀번호 검증
const isValid = await bcrypt.compare(inputPassword, storedHash);
```

### **2. CORS 설정**

```typescript
// server.ts
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-CSRF-Token", "Cookie"],
  })
);
```

### **3. SQL Injection 방지**

```typescript
// Parameterized Query 사용
const result = await pool.query(
  `SELECT * FROM users WHERE username = $1`,
  [username] // ✅ 안전
);
```

### **4. XSS 방지**

```typescript
// HTML 태그 이스케이프
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
```

---

## 🚀 성능 최적화

### **1. 데이터베이스 쿼리 최적화**

**N+1 쿼리 문제 해결**

```typescript
// ❌ N+1 문제
const posts = await pool.query(`SELECT * FROM posts`);
for (const post of posts.rows) {
  const author = await pool.query(`SELECT * FROM users WHERE id = $1`, [
    post.user_id,
  ]);
}

// ✅ JOIN으로 해결
const posts = await pool.query(`
  SELECT p.*, u.username, u.nickname, u.profile_image
  FROM posts p
  JOIN users u ON p.user_id = u.id
`);
```

**인덱스 활용**

```sql
-- 복합 인덱스로 쿼리 최적화
CREATE INDEX idx_follows_status ON follows(follower_id, followee_id, status);
```

### **2. 커넥션 풀 관리**

```typescript
// config/database.ts
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20, // 최대 연결 수
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

### **3. 페이지네이션**

```typescript
const limit = Number(req.query.limit) || 10;
const offset = (Number(req.query.page) - 1) * limit;

const query = `SELECT * FROM posts LIMIT $1 OFFSET $2`;
```

---

## 🔧 에러 처리

### **통합 에러 핸들러**

```typescript
// middleware/errorHandler.ts
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error:", err);

  if (err.name === "ValidationError") {
    res.status(400).json({
      success: false,
      error: "입력 데이터가 유효하지 않습니다.",
    });
    return;
  }

  if (err.name === "UnauthorizedError") {
    res.status(401).json({
      success: false,
      error: "인증이 필요합니다.",
    });
    return;
  }

  res.status(500).json({
    success: false,
    error: "서버 오류가 발생했습니다.",
  });
};
```

---

## 📈 개발 과정에서 배운 점

### **1. RESTful API 설계**

- 일관된 엔드포인트 네이밍 컨벤션
- HTTP 메서드 적절한 사용 (GET, POST, PUT, DELETE, PATCH)
- 상태 코드 활용 (200, 201, 400, 401, 403, 404, 500)

### **2. 데이터베이스 설계 및 최적화**

- 정규화를 통한 데이터 무결성 확보
- 복잡한 JOIN 쿼리 작성
- 인덱싱 전략 수립

### **3. 실시간 통신 구현**

- Socket.IO 이벤트 기반 아키텍처
- 사용자별 소켓 매핑 관리
- 룸 기반 브로드캐스팅

### **4. 보안 강화**

- JWT 토큰 검증 및 만료 처리
- SQL Injection, XSS 방어
- CORS 및 Rate Limiting

### **5. TypeScript 활용**

- 타입 안전성을 통한 버그 감소
- 인터페이스 및 제네릭 활용
- 명확한 API 계약 정의

---

## 📝 기술적 하이라이트

### **주요 성과**

✅ **70개 이상의 RESTful API 엔드포인트** 설계 및 구현  
✅ **15개의 엔티티** 관계형 데이터베이스 모델링  
✅ **Socket.IO 실시간 통신** 인프라 구축  
✅ **JWT 기반 하이브리드 인증** 시스템  
✅ **트랜잭션 처리** 및 데이터 무결성 보장  
✅ **TypeScript strict mode** 적용  
✅ **보안 강화** (SQL Injection, XSS, CORS)

### **코드 품질**

- TypeScript strict mode 적용
- 모듈화된 컨트롤러/라우터 구조
- 일관된 에러 처리
- 로깅 시스템
