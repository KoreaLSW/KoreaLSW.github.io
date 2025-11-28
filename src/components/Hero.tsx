"use client";

import { motion } from "framer-motion";
import { Github, Mail, Phone, MapPin, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          {/* 프로필 이미지 */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl"
          >
            이상우
          </motion.div>

          {/* 이름과 타이틀 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            이상우
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8"
          >
            Frontend Developer
          </motion.h2>
        </div>

        {/* 소개 텍스트 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 mb-12 card-shadow border border-border/50"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 dark:text-blue-400 text-sm">
                    💡
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  개발자로서 성장하고 있는 과정에서 학습과 도전을 사랑하며,
                  인정받는 개발자가 되기 위해 노력하고 있습니다.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Github className="w-5 h-5" />
                <a
                  href="https://github.com/KoreaLSW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5" />
                <a
                  href="tel:010-4464-0560"
                  className="hover:text-primary transition-colors"
                >
                  010-4464-0560
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:sangwoo0560@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  sangwoo0560@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 학습 노트 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 card-shadow border border-border/50"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold">학습 노트</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/js"
                className="group relative overflow-hidden bg-gradient-to-br from-yellow-500/10 to-orange-500/10 hover:from-yellow-500/20 hover:to-orange-500/20 border border-yellow-500/20 hover:border-yellow-500/40 rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/30 flex items-center justify-center transition-colors">
                    <span className="text-2xl">📘</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">JS</h3>
                  <p className="text-sm text-muted-foreground">
                    JavaScript 학습 내용
                  </p>
                </div>
              </Link>

              <Link
                href="/react"
                className="group relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 border border-blue-500/20 hover:border-blue-500/40 rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 flex items-center justify-center transition-colors">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">React</h3>
                  <p className="text-sm text-muted-foreground">
                    React 학습 내용
                  </p>
                </div>
              </Link>

              <Link
                href="/next"
                className="group relative overflow-hidden bg-gradient-to-br from-gray-500/10 to-slate-500/10 hover:from-gray-500/20 hover:to-slate-500/20 border border-gray-500/20 hover:border-gray-500/40 rounded-xl p-6 transition-all duration-300 opacity-60 cursor-not-allowed"
                onClick={(e) => e.preventDefault()}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gray-500/20 flex items-center justify-center">
                    <span className="text-2xl">▲</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Next</h3>
                  <p className="text-sm text-muted-foreground">준비중</p>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
