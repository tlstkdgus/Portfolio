"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown, Github, ExternalLink, GitCommitHorizontal } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { cn } from "@/lib/utils";

export function Projects() {
  const t = useTranslations("projects");
  const tc = useTranslations("common");
  const locale = useLocale();
  const isKo = locale === "ko";
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const isSingle = projects.length === 1;

  const toggle = (i: number) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  const headingLabel = (project: (typeof projects)[number]) => {
    const main = isKo ? project.title : project.titleEn;
    const sub = isKo ? project.subtitle : project.subtitleEn;
    return sub ? `${main} — ${sub}` : main;
  };

  return (
    <section id="projects" className="bg-section-alt py-20 md:py-28">
      <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", isSingle ? "max-w-3xl" : "max-w-4xl")}>
        <SectionHeading>{t("heading")}</SectionHeading>

        <div className="space-y-4">
          {projects.map((project, i) => {
            const isOpen = expandedIndex === i;
            const displayTitle = isKo ? project.title : project.titleEn;
            const displaySubtitle = isKo ? project.subtitle : project.subtitleEn;
            const roleList = isKo ? project.roles : project.rolesEn;

            return (
              <m.div
                key={`${project.title}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-colors transition-shadow hover:border-accent/20"
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`project-panel-${i}`}
                  aria-label={`${headingLabel(project)} — ${isOpen ? "collapse" : "expand"}`}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left"
                >
                  <div className="flex min-w-0 items-start gap-4">
                    {project.image ? (
                      <div className="relative hidden h-12 w-12 shrink-0 overflow-hidden rounded-lg sm:block">
                        <Image
                          src={project.image}
                          alt={headingLabel(project)}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                    ) : (
                      <div
                        aria-hidden="true"
                        className="hidden h-12 w-1 shrink-0 rounded-full bg-gradient-to-b from-accent to-accent-secondary/60 sm:block"
                      />
                    )}
                    <div className="min-w-0">
                      <h3
                        id={`project-heading-${i}`}
                        className="text-base font-semibold leading-snug text-foreground"
                      >
                        {displayTitle}
                      </h3>
                      {displaySubtitle ? (
                        <p className="mt-0.5 line-clamp-2 text-sm text-muted-foreground sm:line-clamp-1">
                          {displaySubtitle}
                        </p>
                      ) : null}
                      <p className="mt-1 text-xs text-muted-foreground">
                        {isKo ? project.period : project.periodEn}
                      </p>
                      {roleList && roleList.length > 0 ? (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {roleList.map((role) => (
                            <Badge
                              key={role}
                              variant="outline"
                              className="border-accent/40 text-[11px] font-medium text-accent"
                            >
                              {role}
                            </Badge>
                          ))}
                        </div>
                      ) : null}
                      {!isOpen && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 5).map((tag) => (
                            <Badge key={tag} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                          {project.tags.length > 5 && (
                            <span className="text-xs text-muted-foreground">
                              +{project.tags.length - 5}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={`project-panel-${i}`}
                      role="region"
                      aria-labelledby={`project-heading-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-5 border-t border-border px-5 pb-5 pt-4">
                        {project.stats && project.stats.length > 0 ? (
                          <div className="-mx-1 overflow-x-auto pb-1">
                            <div className="flex min-w-0 gap-2 px-1">
                              {project.stats.map((stat, si) => (
                                <div
                                  key={si}
                                  className="shrink-0 rounded-lg bg-accent/10 px-3 py-1.5 font-mono text-sm text-accent"
                                >
                                  <span className="text-muted-foreground">
                                    {isKo ? stat.label : stat.labelEn}
                                  </span>
                                  <span className="mx-1.5 text-border">·</span>
                                  <span className="font-semibold text-foreground">{stat.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}

                        <div>
                          <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                            <span aria-hidden="true" className="h-px w-4 bg-accent/40" />
                            {tc("goal")}
                          </h4>
                          <ul className="space-y-1">
                            {(isKo ? project.goals : project.goalsEn).map((item, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-2 text-sm text-foreground/80"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                            <span aria-hidden="true" className="h-px w-4 bg-accent/40" />
                            {tc("content")}
                          </h4>
                          <ul className="space-y-1">
                            {(isKo ? project.contents : project.contentsEn).map((item, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-2 text-sm text-foreground/80"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {project.decisions && project.decisions.length > 0 ? (
                          <div>
                            <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                              <span aria-hidden="true" className="h-px w-4 bg-accent/40" />
                              {tc("decision")}
                            </h4>
                            <ul className="space-y-1">
                              {(isKo ? project.decisions : project.decisionsEn)?.map((item, j) => (
                                <li
                                  key={j}
                                  className="flex items-start gap-2 text-sm text-foreground/80"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60"
                                  />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}

                        <div>
                          <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-secondary">
                            <span aria-hidden="true" className="h-px w-4 bg-accent-secondary/40" />
                            {tc("result")}
                          </h4>
                          <ul className="space-y-1">
                            {(isKo ? project.results : project.resultsEn).map((item, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-2 text-sm text-foreground/80"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-secondary/60"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {project.images && project.images.length > 0 && (
                          <div>
                            <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                              <span aria-hidden="true" className="h-px w-4 bg-border" />
                              Screenshots
                            </h4>
                            <ImageCarousel
                              images={project.images}
                              alt={headingLabel(project)}
                            />
                          </div>
                        )}

                        {(project.repo || project.url || project.commitsUrl) && (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {project.url && (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                              >
                                <ExternalLink className="h-3.5 w-3.5" />
                                Live
                              </a>
                            )}
                            {project.repo && (
                              <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                              >
                                <Github className="h-3.5 w-3.5" />
                                GitHub
                              </a>
                            )}
                            {project.commitsUrl && (
                              <a
                                href={project.commitsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                              >
                                <GitCommitHorizontal className="h-3.5 w-3.5" />
                                {isKo ? "내 커밋 보기" : "My Commits"}
                              </a>
                            )}
                          </div>
                        )}

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="accent">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
