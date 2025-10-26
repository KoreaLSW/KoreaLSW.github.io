"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import Link from "next/link";

export default function SocialspaceBackendPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 네비게이션 */}
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/socialspace"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Socialspace로 돌아가기</span>
            </Link>
            <a
              href="https://github.com/KoreaLSW/shared-diary-server"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              백엔드 깃허브
            </a>
          </div>
        </div>
      </nav>

      {/* 메인 콘텐츠 */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 프로젝트 헤더 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                Socialspace - 백엔드
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-6">
              Express, MySQL을 사용한 서버 개발
            </p>

            {/* 기술 스택 */}
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express", "MySQL", "JWT", "Multer"].map(
                (tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* 프로젝트 개요 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">백엔드 개요</h2>
            <div className="bg-card rounded-2xl p-8 card-shadow border border-border/50">
              <p className="text-muted-foreground leading-relaxed">
                Socialspace 백엔드는 Node.js와 Express를 기반으로
                구축되었습니다. RESTful API 설계를 통해 프론트엔드와 효율적으로
                통신하며, MySQL 데이터베이스를 사용하여 사용자 정보와 일기
                데이터를 관리합니다. JWT 토큰 기반 인증 시스템과 Multer를 활용한
                이미지 업로드 기능을 구현하여 안전하고 효율적인 서버 운영을
                구현했습니다.
              </p>
            </div>
          </motion.div>

          {/* 주요 구현 사항 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">주요 구현 사항</h2>
            <div className="bg-card rounded-2xl p-8 card-shadow border border-border/50">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "RESTful API 설계 및 구현",
                  "JWT 토큰 기반 인증 시스템",
                  "MySQL 데이터베이스 설계",
                  "이미지 업로드 및 최적화",
                  "데이터 검증 및 에러 핸들링",
                  "CORS 및 보안 설정",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 기술 스택 상세 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">기술 스택</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-6 card-shadow border border-border/50">
                <h3 className="text-lg font-semibold mb-3 text-green-500">
                  핵심 기술
                </h3>
                <ul className="space-y-2">
                  {[
                    "Node.js: 서버 런타임",
                    "Express: 웹 프레임워크",
                    "MySQL: 데이터베이스",
                    "JWT: 인증 토큰",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-6 card-shadow border border-border/50">
                <h3 className="text-lg font-semibold mb-3 text-purple-500">
                  미들웨어 및 도구
                </h3>
                <ul className="space-y-2">
                  {[
                    "Multer: 파일 업로드",
                    "bcrypt: 비밀번호 해싱",
                    "Sharp: 이미지 리사이징",
                    "CORS: 교차 출처 요청",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 주요 엔드포인트 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">주요 API 엔드포인트</h2>
            <div className="bg-card rounded-2xl p-8 card-shadow border border-border/50">
              <div className="space-y-4">
                {[
                  "POST /api/auth/register - 사용자 회원가입",
                  "POST /api/auth/login - 사용자 로그인",
                  "GET /api/diaries - 일기 목록 조회",
                  "POST /api/diaries - 일기 작성",
                  "PUT /api/diaries/:id - 일기 수정",
                  "DELETE /api/diaries/:id - 일기 삭제",
                  "POST /api/upload - 이미지 업로드",
                  "GET /api/users/:id - 사용자 정보 조회",
                ].map((endpoint, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <code className="bg-muted px-3 py-1 rounded text-sm text-primary flex-1">
                      {endpoint}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
