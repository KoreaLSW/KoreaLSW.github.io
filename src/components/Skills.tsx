"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Palette, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

const skills = {
  languages: [
    {
      name: "HTML/CSS",
      description:
        "시맨틱 태그를 활용한 접근성 높은 마크업. Flex/Grid를 이용한 반응형 레이아웃 구현. CSS Variables와 CSS Modules를 활용한 스타일 관리.",
      color: "green",
    },
    {
      name: "JavaScript",
      description:
        "ES6+ 문법을 활용한 모던한 코드 작성. 비동기 처리(Promise, async/await) 활용. DOM 조작 및 이벤트 처리.",
      color: "yellow",
    },
    {
      name: "TypeScript",
      description:
        "타입 안정성을 통한 버그 감소 및 개발 생산성 향상. 인터페이스와 제네릭을 활용한 명확한 타입 정의. 엄격한 타입 검사로 런타임 에러 방지.",
      color: "blue",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      description:
        "상황에 맞는 SSR/CSR 렌더링 선택. Server/Client Component 분리. Image Optimization과 코드 스플리팅.",
      color: "cyan",
    },
    {
      name: "React",
      description:
        "컴포넌트 기반 아키텍처로 재사용 가능한 UI 구성. 커스텀 훅을 통한 로직 재사용성 극대화. useMemo, useCallback을 활용한 성능 최적화.",
      color: "purple",
    },
    {
      name: "Node.js",
      description:
        "Express를 활용한 RESTful API 구현. 비동기 이벤트 기반 아키텍처 활용. 미들웨어를 통한 요청 처리 파이프라인 구성. Socket을 통한 실시간 통신 지원.",
      color: "orange",
    },
  ],
  database: [
    {
      name: "PostgreSQL",
      description:
        "기본 SQL 쿼리 작성 및 데이터 조회. 간단한 테이블 생성 및 데이터베이스 설계. 데이터 생성, 삽입, 수정, 삭제 작업.",
      color: "indigo",
    },
  ],
  mobile: [
    {
      name: "Android",
      description:
        "JAVA를 활용하여 네이티브 안드로이드 앱 개발 경험. Activity/Fragment 생명주기 관리. RecyclerView를 통한 효율적인 리스트 구현. Retrofit, Glide 라이브러리 활용.",
      color: "teal",
    },
  ],
};

const skillCategories = [
  {
    title: "언어",
    icon: Code,
    skills: skills.languages,
    iconBg: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "프레임워크/라이브러리",
    icon: Globe,
    skills: skills.frameworks,
    iconBg: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "데이터베이스",
    icon: Database,
    skills: skills.database,
    iconBg: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "모바일",
    icon: Smartphone,
    skills: skills.mobile,
    iconBg: "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-600 dark:text-teal-400",
  },
];

const getColorClasses = (color?: string) => {
  const colors = {
    green:
      "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700",
    yellow:
      "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700",
    blue: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700",
    cyan: "bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700",
    purple:
      "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700",
    orange:
      "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700",
    indigo:
      "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700",
    red: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700",
    teal: "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-700",
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function Skills() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    // 다크모드 변경 감지
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            기술 스택
          </h2>
          <p className="text-xl text-muted-foreground">
            학습과 프로젝트를 통해 습득한 기술들입니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 card-shadow border border-border/50"
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`w-12 h-12 ${category.iconBg} rounded-xl flex items-center justify-center`}
                >
                  <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      duration: 0.6,
                    }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-3 py-1 rounded-lg font-semibold text-lg border ${getColorClasses(
                          skill.color
                        )}`}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {skill.description
                        .split(".")
                        .filter((item) => item.trim())
                        .map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1 flex-shrink-0">
                              •
                            </span>
                            <span>{item.trim()}</span>
                          </li>
                        ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
