"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Info,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useState } from "react";

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleExpand = (projectId: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };
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
            프로젝트
          </h2>
          <p className="text-xl text-muted-foreground">
            학습과 성장의 과정에서 만들어본 프로젝트들입니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl overflow-hidden card-shadow border border-border/50 hover-lift group"
            >
              {/* 프로젝트 이미지 */}
              <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                {project.id === 1 ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 p-8">
                      <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-4xl">🍎</span>
                      </div>
                      <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-2xl text-gray-400">📷</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/images/weather.gif"
                      alt="날씨 알리미 애플리케이션"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* 프로젝트 정보 */}
              <div className="p-8">
                {/* 프로젝트 제목과 설명 */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* 주요 기능 */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                    주요 기능
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 기술 스택 */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                    기술 스택
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 추가 정보 펼치기 버튼 */}
                {project.details && (
                  <div className="mb-4">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-sm font-medium w-full text-left"
                    >
                      {expandedProjects[project.id] ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          상세 정보 접기
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          상세 정보 보기
                        </>
                      )}
                    </button>

                    {expandedProjects[project.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 p-4 bg-muted/50 rounded-lg space-y-4"
                      >
                        {/* 개요 */}
                        <div>
                          <h5 className="text-sm font-semibold mb-2 text-primary">
                            개요
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            {project.details.overview}
                          </p>
                        </div>

                        {/* 사용 기술 */}
                        {project.details.technologies && (
                          <div className="grid md:grid-cols-2 gap-4">
                            {project.details.technologies.frontend && (
                              <div>
                                <h5 className="text-sm font-semibold mb-2 text-blue-500">
                                  Frontend
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  {project.details.technologies.frontend.map(
                                    (tech, idx) => (
                                      <span
                                        key={idx}
                                        className="px-3 py-1 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-full text-xs"
                                      >
                                        {tech}
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>
                            )}

                            {project.details.technologies.backend && (
                              <div>
                                <h5 className="text-sm font-semibold mb-2 text-green-500">
                                  Backend
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  {project.details.technologies.backend.map(
                                    (tech, idx) => (
                                      <span
                                        key={idx}
                                        className="px-3 py-1 bg-green-500/10 text-green-500 border border-green-500/20 rounded-full text-xs"
                                      >
                                        {tech}
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>
                            )}

                            {project.details.technologies.api && (
                              <div>
                                <h5 className="text-sm font-semibold mb-2 text-purple-500">
                                  API
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  {project.details.technologies.api.map(
                                    (tech, idx) => (
                                      <span
                                        key={idx}
                                        className="px-3 py-1 bg-purple-500/10 text-purple-500 border border-purple-500/20 rounded-full text-xs"
                                      >
                                        {tech}
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* 핵심 기술 */}
                        {project.details.highlights && (
                          <div>
                            <h5 className="text-sm font-semibold mb-2 text-purple-500">
                              핵심 기술
                            </h5>
                            <ul className="space-y-2">
                              {project.details.highlights.map(
                                (highlight, idx) => (
                                  <li
                                    key={idx}
                                    className="text-sm text-muted-foreground flex items-start gap-2"
                                  >
                                    <span className="text-purple-500 mt-1 flex-shrink-0">
                                      •{" "}
                                    </span>
                                    <span>{highlight}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>
                )}

                {/* 링크 버튼들 */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={project.id === 1 ? "/socialspace" : "/weather"}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors text-sm font-medium"
                  >
                    <Info className="w-4 h-4" />
                    프로젝트 설명
                  </Link>

                  <a
                    href={project.links.project}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    프로젝트 링크
                  </a>

                  {project.links.client && (
                    <a
                      href={project.links.client}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      클라이언트 깃허브
                    </a>
                  )}

                  {project.links.server && (
                    <a
                      href={project.links.server}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      서버 깃허브
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      깃허브
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
