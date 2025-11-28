"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  vs,
} from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownContentProps {
  filePath: string;
}

export default function MarkdownContent({ filePath }: MarkdownContentProps) {
  const [markdownContent, setMarkdownContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 다크 모드 감지
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();

    // 다크 모드 변경 감지
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch(filePath)
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
  }, [filePath]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 card-shadow border border-border/50"
    >
      {loading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">로딩 중...</p>
        </div>
      ) : (
        <div className="markdown-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              strong: ({ children }) => (
                <strong style={{ fontWeight: 700 }}>{children}</strong>
              ),
              b: ({ children }) => (
                <b style={{ fontWeight: 700 }}>{children}</b>
              ),
              p: ({ children }) => {
                // paragraph 내부의 strong 태그가 제대로 렌더링되도록
                return <p>{children}</p>;
              },
              code: ({ node, inline, className, children, ...props }: any) => {
                const match = /language-(\w+)/.exec(className || "");
                const language = match ? match[1] : "";
                const codeString = String(children).replace(/\n$/, "");

                return !inline && language ? (
                  <SyntaxHighlighter
                    language={language}
                    style={isDark ? vscDarkPlus : vs}
                    PreTag="div"
                    customStyle={{
                      fontSize: "1rem",
                      lineHeight: "1.6",
                    }}
                    codeTagProps={{
                      style: {
                        fontSize: "1rem",
                        fontFamily:
                          '"Courier New", "Consolas", "Monaco", monospace',
                      },
                    }}
                    {...props}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>
      )}
    </motion.div>
  );
}
