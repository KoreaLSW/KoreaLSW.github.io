import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "이상우 | Frontend Developer",
  description:
    "프론트엔드 개발자 이상우의 포트폴리오 사이트입니다. React, TypeScript, Next.js를 활용한 프로젝트들을 소개합니다.",
  keywords: [
    "프론트엔드",
    "React",
    "TypeScript",
    "Next.js",
    "포트폴리오",
    "개발자",
  ],
  authors: [{ name: "이상우" }],
  openGraph: {
    title: "이상우 | Frontend Developer",
    description: "프론트엔드 개발자 이상우의 포트폴리오 사이트",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
