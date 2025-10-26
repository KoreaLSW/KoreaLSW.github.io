"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SocialspaceFrontendContent from "@/components/SocialspaceFrontendContent";
import SocialspaceBackendContent from "@/components/SocialspaceBackendContent";

export default function SocialspacePage() {
  const [selectedSection, setSelectedSection] = useState<
    "main" | "frontend" | "backend"
  >("main");

  const renderContent = () => {
    if (selectedSection === "frontend") {
      return <SocialspaceFrontendContent />;
    }

    if (selectedSection === "backend") {
      return <SocialspaceBackendContent />;
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 네비게이션 */}
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>홈으로 돌아가기</span>
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="https://shared-diary-demo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                프로젝트 링크
              </a>
            </div>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Socialspace
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              사용자들이 일기를 공유하고 소통할 수 있는 웹 애플리케이션
            </p>

            {/* 기술 스택 */}
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "React", "Express", "MySQL"].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 프론트엔드/백엔드 선택 버튼 - 항상 표시 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12 grid md:grid-cols-2 gap-6"
          >
            <button
              onClick={() => setSelectedSection("frontend")}
              className={`bg-card rounded-2xl p-8 card-shadow border-2 transition-all group block w-full text-left ${
                selectedSection === "frontend"
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/10"
                  : "border-border/50 hover:border-border hover-lift"
              }`}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">프론트엔드</h3>
                <p className="text-muted-foreground mb-4">
                  NextJS, TypeScript를 사용한 클라이언트 개발
                </p>
                <div className="flex items-center justify-center gap-2 text-primary group-hover:underline">
                  <ExternalLink className="w-4 h-4" />
                  <span>자세히 보기</span>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedSection("backend")}
              className={`bg-card rounded-2xl p-8 card-shadow border-2 transition-all group block w-full text-left ${
                selectedSection === "backend"
                  ? "border-green-500 bg-green-50 dark:bg-green-900/10"
                  : "border-border/50 hover:border-border hover-lift"
              }`}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">백엔드</h3>
                <p className="text-muted-foreground mb-4">
                  Express, MySQL을 사용한 서버 개발
                </p>
                <div className="flex items-center justify-center gap-2 text-primary group-hover:underline">
                  <ExternalLink className="w-4 h-4" />
                  <span>자세히 보기</span>
                </div>
              </div>
            </button>
          </motion.div>

          {/* 선택된 섹션 콘텐츠 */}
          {renderContent()}
        </motion.div>
      </main>
    </div>
  );
}
