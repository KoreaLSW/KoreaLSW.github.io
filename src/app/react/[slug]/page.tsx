import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import MarkdownContent from "@/components/MarkdownContent";

// slug와 실제 파일 경로 매핑
const reactFileMap: Record<string, string> = {
  "spa와-csr": "/md/2. React/1.SPA와 CSR.md",
  "csr과-seo": "/md/2. React/2. CSR과 SEO.md",
  "csr에서-meta태그의-한계": "/md/2. React/3. CSR에서 Meta태그의 한계.md",
  "리액트의-동작원리": "/md/2. React/4. 리액트의 동작원리.md",
  "리액트-훅이란": "/md/2. React/5. 리액트 훅이란.md",
  "usestate-정리": "/md/2. React/6. useState정리.md",
  "useeffect-정리": "/md/2. React/7. useEffect정리.md",
  "usememo-정리": "/md/2. React/8. useMemo정리.md",
  usecallback: "/md/2. React/9. useCallback.md",
  "react-memo": "/md/2. React/10. React.memo.md",
  useref: "/md/2. React/11.useRef.md",
  usecontext: "/md/2. React/12.useContext.md",
  uselayouteffect: "/md/2. React/14.useLayoutEffect.md",
  usereducer: "/md/2. React/useReducer.md",
  "react-상태관리-라이브러리": "/md/2. React/React 상태관리 라이브러리.md",
};

// 모든 가능한 slug 목록
const reactSlugs = Object.keys(reactFileMap);

// 정적 경로 생성 함수
export function generateStaticParams() {
  return reactSlugs.flatMap((slug) => {
    // 한글이 포함된 경우 인코딩된 형태도 포함
    const results = [{ slug: slug }];

    // 한글이 포함된 경우 인코딩된 형태도 추가
    if (slug !== encodeURIComponent(slug)) {
      results.push({ slug: encodeURIComponent(slug) });
    }

    return results;
  });
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ReactSlugPage({ params }: PageProps) {
  const { slug } = await params;
  // URL 디코딩 처리 (한글 slug 대응)
  const decodedSlug = decodeURIComponent(slug);
  const filePath = reactFileMap[decodedSlug] || reactFileMap[slug];

  if (!filePath) {
    return (
      <div className="min-h-screen bg-background">
        <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/react"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>React 목록으로 돌아가기</span>
              </Link>
            </div>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 card-shadow border border-border/50">
            <h1 className="text-2xl font-bold">파일을 찾을 수 없습니다.</h1>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* 네비게이션 */}
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/react"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>React 목록으로 돌아가기</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* 메인 콘텐츠 */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <MarkdownContent filePath={filePath} />
      </main>
    </div>
  );
}
