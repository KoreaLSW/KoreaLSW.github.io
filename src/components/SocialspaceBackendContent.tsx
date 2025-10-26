"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";

export default function SocialspaceBackendContent() {
  const [markdownContent, setMarkdownContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/docs/socialspace/PORTFOLIO_BACKEND.md")
      .then((res) => res.text())
      .then((text) => {
        setMarkdownContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load markdown:", err);
        setMarkdownContent("# 에러\n\n마크다운 파일을 불러올 수 없습니다.");
        setLoading(false);
      });
  }, []);

  return (
    <motion.div
      key="backend"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="bg-card rounded-2xl p-8 card-shadow border border-border/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center">
            <span className="text-2xl">⚙️</span>
          </div>
          <h2 className="text-3xl font-bold">백엔드 개발</h2>
        </div>

        {/* 마크다운 콘텐츠 */}
        {loading ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">로딩 중...</p>
          </div>
        ) : (
          <div className="markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdownContent}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </motion.div>
  );
}
