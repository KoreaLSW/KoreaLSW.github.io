"use client";

import { motion } from "framer-motion";
import { Github, Mail, Phone, MapPin } from "lucide-react";

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

        {/* 개발자 여정 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 card-shadow border border-border/50"
        >
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 dark:text-green-400 text-sm">
                  🚀
                </span>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  개발자의 꿈을 시작하게 된 계기는 웹페이지를 만드는 것에 흥미를
                  느끼게 되었고, 온라인 강의와 스터디를 통해 학습하며 다양한
                  프로젝트들을 만들어보았습니다.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Express.js와 MySQL 기반 REST API 서버 구축 경험을 바탕으로,
                  <strong className="text-foreground"> SocialSpace</strong>{" "}
                  프로젝트를 통해 Next.js와 Express.js를 활용한 풀스택 개발
                  역량을 확장했습니다.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  초기 로딩 속도 개선을 위해 SSR을 도입하고, SWR 캐싱과 낙관적
                  UI 업데이트로 사용자 경험을 개선했으며, Socket.IO를 활용한
                  실시간 채팅 시스템을 구현했습니다. PostgreSQL 기반
                  데이터베이스 설계와 N+1 쿼리 최적화를 통해 성능 문제를
                  해결하며 실제 비즈니스 요구사항을 만족시키는 시스템을
                  구축했습니다.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  빠르게 변화하는 웹 기술 트렌드에 적응하며 지속적인 학습을 통해
                  문제를 해결하고 비즈니스 가치를 창출하는 개발자가 되고자
                  합니다.{" "}
                  <span className="text-green-600 dark:text-green-400">🙌</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
