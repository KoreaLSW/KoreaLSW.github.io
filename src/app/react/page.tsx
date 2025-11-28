"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, FileText } from "lucide-react";
import Link from "next/link";

const reactFiles = [
  { name: "SPA와 CSR", path: "/md/2. React/1.SPA와 CSR.md", slug: "spa와-csr" },
  { name: "CSR과 SEO", path: "/md/2. React/2. CSR과 SEO.md", slug: "csr과-seo" },
  { name: "CSR에서 Meta태그의 한계", path: "/md/2. React/3. CSR에서 Meta태그의 한계.md", slug: "csr에서-meta태그의-한계" },
  { name: "리액트의 동작원리", path: "/md/2. React/4. 리액트의 동작원리.md", slug: "리액트의-동작원리" },
  { name: "리액트 훅이란", path: "/md/2. React/5. 리액트 훅이란.md", slug: "리액트-훅이란" },
  { name: "useState 정리", path: "/md/2. React/6. useState정리.md", slug: "usestate-정리" },
  { name: "useEffect 정리", path: "/md/2. React/7. useEffect정리.md", slug: "useeffect-정리" },
  { name: "useMemo 정리", path: "/md/2. React/8. useMemo정리.md", slug: "usememo-정리" },
  { name: "useCallback", path: "/md/2. React/9. useCallback.md", slug: "usecallback" },
  { name: "React.memo", path: "/md/2. React/10. React.memo.md", slug: "react-memo" },
  { name: "useRef", path: "/md/2. React/11.useRef.md", slug: "useref" },
  { name: "useContext", path: "/md/2. React/12.useContext.md", slug: "usecontext" },
  { name: "useLayoutEffect", path: "/md/2. React/14.useLayoutEffect.md", slug: "uselayouteffect" },
  { name: "useReducer", path: "/md/2. React/useReducer.md", slug: "usereducer" },
  { name: "React 상태관리 라이브러리", path: "/md/2. React/React 상태관리 라이브러리.md", slug: "react-상태관리-라이브러리" },
];

export default function ReactPage() {
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
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">⚛️</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold">React 학습 노트</h1>
                <p className="text-muted-foreground mt-1">
                  React 관련 학습 내용을 정리한 노트입니다.
                </p>
              </div>
            </div>
          </div>

          {/* 파일 목록 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 card-shadow border border-border/50"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-500" />
              React 학습 내용
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {reactFiles.map((file) => (
                <Link
                  key={file.slug}
                  href={`/react/${file.slug}`}
                  className="group flex items-center gap-3 p-4 rounded-lg border border-border/50 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 flex items-center justify-center transition-colors">
                    <FileText className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {file.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

