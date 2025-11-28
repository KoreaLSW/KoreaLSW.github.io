"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";

export default function NextPage() {
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
          </div>
        </div>
      </nav>

      {/* 메인 콘텐츠 */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* 헤더 */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 card-shadow border border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900/30 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">▲</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold">Next.js 학습 노트</h1>
                <p className="text-muted-foreground mt-1">
                  Next.js 관련 학습 내용을 준비 중입니다.
                </p>
              </div>
            </div>
          </div>

          {/* 준비중 메시지 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card/80 backdrop-blur-sm rounded-2xl p-12 card-shadow border border-border/50"
          >
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-900/30 flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                준비 중입니다
              </h2>
              <p className="text-muted-foreground max-w-md">
                Next.js 학습 노트를 준비하고 있습니다. 곧 업데이트될 예정입니다.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

