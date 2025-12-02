"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function StudyNote() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            학습 노트
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 card-shadow border border-border/50 max-w-4xl w-full">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* 왼쪽: GitHub에서 보기 */}
              <a
                href="https://github.com/KoreaLSW/frontend-study-note"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-green-500/5 hover:bg-green-500/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 group-hover:bg-green-500/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Github className="w-8 h-8 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    GitHub에서 보기
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    프론트엔드 개발 학습 노트 저장소
                  </p>
                </div>
              </a>

              {/* 오른쪽: 설명 텍스트 */}
              <div className="space-y-4">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  JavaScript 동작 원리, React 렌더링 구조, Next.js 아키텍처,
                  브라우저 구조, 네트워크 등
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  실무에 바로 적용 가능한 내용을 중심으로 예제와 함께
                  정리해보았습니다.
                </p>

                <div className="pt-4 border-t border-border/50">
                  <h4 className="text-base font-semibold text-foreground mb-3">
                    포함된 내용
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">
                        JavaScript:
                      </span>{" "}
                      스코프, 클로저, 호이스팅, this, 비동기 이해
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        React:
                      </span>{" "}
                      상태 관리, 렌더링 구조, 최적화 패턴
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Next.js:
                      </span>{" "}
                      라우팅, SSR/SSG/ISR 구조, App Router
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        웹 성능 최적화 & 브라우저 동작 원리
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        TypeScript 기본·고급 타입 패턴
                      </span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                  <p>
                    <span>👉</span> 지속적으로 업데이트 중입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
