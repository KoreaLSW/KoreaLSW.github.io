"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function SocialspaceFrontendPage() {
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
              href="https://github.com/KoreaLSW/shared-diary-client"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              프론트엔드 깃허브
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
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Socialspace - 프론트엔드
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-6">
              React, TypeScript를 사용한 클라이언트 개발
            </p>

            {/* 기술 스택 */}
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "React Router", "Axios"].map(
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
            <h2 className="text-2xl font-bold mb-4">프론트엔드 개요</h2>
            <div className="bg-card rounded-2xl p-8 card-shadow border border-border/50">
              <p className="text-muted-foreground leading-relaxed">
                Socialspace 프론트엔드는 React와 TypeScript를 기반으로
                구축되었습니다. 컴포넌트 기반 아키텍처로 재사용 가능한 UI 요소를
                구성하고, React Router를 통해 SPA 라우팅을 구현했습니다. Axios를
                사용하여 백엔드 API와의 효율적인 통신을 구현했으며, 반응형
                디자인을 통해 다양한 디바이스에서 최적의 사용자 경험을
                제공합니다.
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
                  "컴포넌트 기반 UI 개발",
                  "타입 안전성을 위한 TypeScript 활용",
                  "SPA 라우팅 및 중첩 라우팅",
                  "상태 관리 및 데이터 페칭",
                  "이미지 업로드 및 미리보기",
                  "반응형 레이아웃 구현",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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
                <h3 className="text-lg font-semibold mb-3 text-blue-500">
                  핵심 라이브러리
                </h3>
                <ul className="space-y-2">
                  {[
                    "React: UI 컴포넌트 개발",
                    "TypeScript: 타입 안전성 확보",
                    "React Router: SPA 라우팅",
                    "Axios: HTTP 클라이언트",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-6 card-shadow border border-border/50">
                <h3 className="text-lg font-semibold mb-3 text-purple-500">
                  주요 기능
                </h3>
                <ul className="space-y-2">
                  {[
                    "JWT 토큰 인증",
                    "이미지 업로드 및 미리보기",
                    "실시간 데이터 갱신",
                    "반응형 디자인",
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
        </motion.div>
      </main>
    </div>
  );
}
