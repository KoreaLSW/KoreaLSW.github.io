"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
} from "lucide-react";

const experience = [
  {
    id: 1,
    title: "율시스템",
    position: "개발팀 · 사원 · 웹개발",
    period: "2023.11 ~ 재직중",
    location: "대전",
    salary: "3,480만원",
    projects: [
      {
        title: "전자 서식(OZ-Eform) 개발 및 페이퍼리스 시스템 구축",
        description: "한국수력원자력",
        details: [
          "기존 종이 서식(절차서, 신청서 등)을 OZ Designer를 활용하여 디지털 서식으로 전환",
          "JavaScript를 사용하여 입력값에 따라 인터랙티브 UI를 구현하여 사용자들에게 편의성 제공",
          "디지털 서식 내 실시간 자동 연산 로직을 구현하여, 수기 입력 과정에서 발생할 수 있는 휴먼 에러를 줄이고 데이터의 정합성 및 신뢰도를 획기적으로 향상시킴",
          "전자 서명 및 데이터 입력 기능을 구현하여 업무 프로세스 효율화 및 페이퍼리스 환경 구축에 기여",
        ],
      },
      {
        title: "Polarion (폴라리온) 커스터마이징 개발",
        description: "한국전력기술",
        details: [
          "대용량 Excel 임포트 시 청크 단위 배치 처리 로직을 구현하여 OOM(OutOfMemoryError) 이슈를 해결하고 시스템 안정성을 확보함",
          "JavaScript 기반 동적 UI 컴포포넌트 개발을 통해 사용자 워크플로우를 간소화하고 작업 생산성을 향상시킴",
        ],
      },
      {
        title: "Python과 OpenAI API를 활용한 LLM 챗봇 개발",
        description: "",
        details: [
          "PDF 문서를 의미 단위의 청크로 분할 및 임베딩하여, LLM 답변의 정확성과 관련성을 향상시킴",
          "PDF 내 정형 데이터(테이블) 파싱 라이브러리(camelot)를 사용하여, 테이블 형식 데이터의 추출 정확도를 향상",
          "OCR라이브러리(pytesseract) 활용하여 이미지 기반 문서의 텍스트를 추출하여 이미지의 텍스트 정보검색 정확도 향상",
        ],
      },
    ],
    icon: Briefcase,
    type: "experience",
  },
  {
    id: 2,
    title: "플레이스링크",
    position: "개발팀 · 사원 · 1년차 · 앱개발",
    period: "2021.01 ~ 2022.10 (1년 10개월)",
    location: "대전",
    salary: "3,000만원",
    projects: [
      {
        title: "JAVA를 활용한 안드로이드 네이티브 앱 개발",
        description: "플레이스토어 '포인트투어' 개발 담당",
        details: [
          "Activity / Fragment 생명주기에 맞춰 이벤트 핸들링 및 리소스 관리 최적화",
          "Retrofit, Glide 등 주요 라이브러리 사용을 통한 네트워크 및 이미지 로딩 효율화",
          "Google Maps API를 활용해 DB에 등록된 상점 위치 및 주변 마커 표시 기능 구현",
        ],
      },
      {
        title: "웹 페이지 개발",
        description: "HTML5, CSS3, JavaScript(ES6)을 활용하여 웹 페이지 개발",
        details: [
          "시멘틱 태그를 사용해 접근성과 구조적 가독성 향상",
          "CSS Flex / Grid를 이용해 화면 구조 및 해상도에 따른 반응형 레이아웃 구현",
          "JavaScript로 DOM 조작 및 이벤트 처리 기능 구현 (메뉴 토글, 스크롤 이동 등)",
        ],
      },
    ],
    icon: Briefcase,
    type: "experience",
  },
  {
    id: 3,
    title: "가온에스텍",
    position: "개발팀 · 사원 · 앱개발",
    period: "2019.09 ~ 2020.06 (10개월)",
    location: "대구",
    salary: "2,300만원",
    projects: [
      {
        title: "CCTV 관리 및 현장 작업 기록 앱 개발",
        description: "CCTV 관리 및 현장 작업 기록 앱 개발",
        details: [
          "RecyclerView를 활용해 직관적인 작업 목록 및 등록 화면 구성",
          "NFC 태그 스캔을 통한 CCTV 식별 및 현장 위치 매칭 기능 구현",
          "촬영 이미지의 리사이즈를 통해 업로드 최적화",
          "Volley 네트워크 모듈을 통해 작업 결과 및 이미지 데이터를 서버에 등록",
        ],
      },
    ],
    icon: Briefcase,
    type: "experience",
  },
];

const education = [
  {
    id: 1,
    title: "드림코딩(인터넷강의)",
    period: "2023.02 ~ 2023.08",
    courses: [
      "HTML/CSS 강의 수료",
      "JS 기본문법부터 심화과정 수료",
      "TS 객체지향 프로그래밍 수료",
      "React 프론트앤드 강의 수료",
      "Node 백앤드 강의 수료",
    ],
    icon: GraduationCap,
    type: "education",
  },
  {
    id: 2,
    title: "한국폴리텍대학 스마트전자과",
    period: "2015.03 ~ 2017.02",
    description: "전자공학 전공",
    icon: GraduationCap,
    type: "education",
  },
];

const certifications = [
  {
    id: 1,
    title: "정보처리산업기사",
    period: "2018.03",
    icon: Award,
    type: "certification",
  },
];

export default function Experience() {
  return (
    <section className="py-20 px-6 bg-muted/30 dark:bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            경력 & 교육
          </h2>
          <p className="text-xl text-muted-foreground">
            개발자로서의 여정과 학습 과정을 소개합니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 경력 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-card rounded-2xl p-8 card-shadow border border-border/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">경력</h3>
            </div>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-800"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.position}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          {item.salary}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mt-4">
                      {item.projects.map((project, projectIndex) => (
                        <div
                          key={projectIndex}
                          className="bg-muted/50 rounded-lg p-4"
                        >
                          <h5 className="font-medium text-base mb-2">
                            {project.title}
                          </h5>
                          <p className="text-sm text-muted-foreground mb-3">
                            {project.description}
                          </p>
                          <div className="space-y-2">
                            {project.details.map((detail, detailIndex) => (
                              <div
                                key={detailIndex}
                                className="flex items-start gap-2 text-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="leading-relaxed">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 교육 및 자격증 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* 교육 섹션 */}
            <div className="bg-card rounded-2xl p-8 card-shadow border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold">교육</h3>
              </div>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative pl-6 border-l-2 border-green-200 dark:border-green-800"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                      {item.description && (
                        <p className="text-sm leading-relaxed">
                          {item.description}
                        </p>
                      )}
                      {item.courses && (
                        <div className="space-y-2">
                          {item.courses.map((course, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              <span>{course}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 자격증 섹션 */}
            <div className="bg-card rounded-2xl p-8 card-shadow border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold">자격증</h3>
              </div>

              <div className="space-y-6">
                {certifications.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative pl-6 border-l-2 border-purple-200 dark:border-purple-800"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
