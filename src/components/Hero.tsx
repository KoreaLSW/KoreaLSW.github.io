"use client";

import { motion } from "framer-motion";
import { Github, Mail, Phone, MapPin } from "lucide-react";
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
          {/* 이름과 타이틀 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            안녕하세요
            <br />
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            한 기술에 머물지 않고 배움으로 넓혀가는 개발자, 이상우입니다.
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8"
          >
            Frontend Developer
          </motion.h3>
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
      </div>
    </motion.section>
  );
}
