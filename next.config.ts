import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 현재 디렉토리를 루트로 지정
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
