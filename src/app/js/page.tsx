"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, FileText } from "lucide-react";
import Link from "next/link";

const jsCategories = [
  {
    category: "var let const",
    files: [
      { name: "스코프", path: "/md/1. JS/var let const/1. 스코프.md", slug: "var-let-const-스코프" },
      { name: "호이스팅", path: "/md/1. JS/var let const/2. 호이스팅.md", slug: "var-let-const-호이스팅" },
      { name: "var let const 비교", path: "/md/1. JS/var let const/3. var let const 비교.md", slug: "var-let-const-비교" },
      { name: "사용 가이드", path: "/md/1. JS/var let const/4. 사용 가이드.md", slug: "var-let-const-사용-가이드" },
    ],
  },
  {
    category: "객체 및 배열",
    files: [
      { name: "객체 프로퍼티", path: "/md/1. JS/객체 및 배열/1. 객체 프로퍼티.md", slug: "객체-프로퍼티" },
      { name: "배열 메서드", path: "/md/1. JS/객체 및 배열/2. 배열 메서드.md", slug: "배열-메서드" },
      { name: "얕은 복사와 깊은 복사", path: "/md/1. JS/객체 및 배열/3. 얕은 복사와 깊은 복사.md", slug: "얕은-복사와-깊은-복사" },
      { name: "구조 분해 할당", path: "/md/1. JS/객체 및 배열/4. 구조 분해 할당.md", slug: "구조-분해-할당" },
      { name: "스프레드 연산자", path: "/md/1. JS/객체 및 배열/5. 스프레드 연산자.md", slug: "스프레드-연산자" },
    ],
  },
  {
    category: "비동기",
    files: [
      { name: "비동기와 실행환경", path: "/md/1. JS/비동기/1. 비동기와 실행환경.md", slug: "비동기와-실행환경" },
      { name: "콜백지옥과 Promise", path: "/md/1. JS/비동기/2. 콜백지옥과 Promise.md", slug: "콜백지옥과-promise" },
      { name: "async 및 await", path: "/md/1. JS/비동기/3. async및await.md", slug: "async-및-await" },
      { name: "fetch", path: "/md/1. JS/비동기/4.fetch.md", slug: "fetch" },
    ],
  },
  {
    category: "함수",
    files: [
      { name: "함수의 표현 방식", path: "/md/1. JS/함수/1. 함수의 표현 방식.md", slug: "함수의-표현-방식" },
      { name: "렉시컬 환경", path: "/md/1. JS/함수/2. 렉시컬 환경.md", slug: "렉시컬-환경" },
      { name: "클로저", path: "/md/1. JS/함수/3. 클로저.md", slug: "클로저" },
      { name: "this", path: "/md/1. JS/함수/4. this.md", slug: "this" },
    ],
  },
];

export default function JSPage() {
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
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">📘</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold">JavaScript 학습 노트</h1>
                <p className="text-muted-foreground mt-1">
                  JavaScript 관련 학습 내용을 정리한 노트입니다.
                </p>
              </div>
            </div>
          </div>

          {/* 카테고리별 목록 */}
          {jsCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 card-shadow border border-border/50"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-yellow-500" />
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {category.files.map((file) => (
                  <Link
                    key={file.slug}
                    href={`/js/${file.slug}`}
                    className="group flex items-center gap-3 p-4 rounded-lg border border-border/50 hover:border-yellow-500/50 hover:bg-yellow-500/5 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 group-hover:bg-yellow-500/20 flex items-center justify-center transition-colors">
                      <FileText className="w-5 h-5 text-yellow-500" />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                      {file.name}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

