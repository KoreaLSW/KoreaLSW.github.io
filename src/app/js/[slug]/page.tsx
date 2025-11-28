import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import MarkdownContent from "@/components/MarkdownContent";

// slug와 실제 파일 경로 매핑
const jsFileMap: Record<string, string> = {
  "var-let-const-스코프": "/md/1. JS/var let const/1. 스코프.md",
  "var-let-const-호이스팅": "/md/1. JS/var let const/2. 호이스팅.md",
  "var-let-const-비교": "/md/1. JS/var let const/3. var let const 비교.md",
  "var-let-const-사용-가이드": "/md/1. JS/var let const/4. 사용 가이드.md",
  "객체-프로퍼티": "/md/1. JS/객체 및 배열/1. 객체 프로퍼티.md",
  "배열-메서드": "/md/1. JS/객체 및 배열/2. 배열 메서드.md",
  "얕은-복사와-깊은-복사": "/md/1. JS/객체 및 배열/3. 얕은 복사와 깊은 복사.md",
  "구조-분해-할당": "/md/1. JS/객체 및 배열/4. 구조 분해 할당.md",
  "스프레드-연산자": "/md/1. JS/객체 및 배열/5. 스프레드 연산자.md",
  "비동기와-실행환경": "/md/1. JS/비동기/1. 비동기와 실행환경.md",
  "콜백지옥과-promise": "/md/1. JS/비동기/2. 콜백지옥과 Promise.md",
  "async-및-await": "/md/1. JS/비동기/3. async및await.md",
  fetch: "/md/1. JS/비동기/4.fetch.md",
  "함수의-표현-방식": "/md/1. JS/함수/1. 함수의 표현 방식.md",
  "렉시컬-환경": "/md/1. JS/함수/2. 렉시컬 환경.md",
  클로저: "/md/1. JS/함수/3. 클로저.md",
  this: "/md/1. JS/함수/4. this.md",
};

// 모든 가능한 slug 목록
const jsSlugs = Object.keys(jsFileMap);

// 정적 경로 생성 함수
export function generateStaticParams() {
  return jsSlugs.flatMap((slug) => {
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

export default async function JSSlugPage({ params }: PageProps) {
  const { slug } = await params;
  // URL 디코딩 처리 (한글 slug 대응)
  const decodedSlug = decodeURIComponent(slug);
  const filePath = jsFileMap[decodedSlug] || jsFileMap[slug];

  if (!filePath) {
    return (
      <div className="min-h-screen bg-background">
        <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/js"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>JavaScript 목록으로 돌아가기</span>
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
              href="/js"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>JavaScript 목록으로 돌아가기</span>
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
