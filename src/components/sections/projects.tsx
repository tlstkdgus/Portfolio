"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { selectedProjects } from "@/data/selected";
import { SectionHeading } from "@/components/ui/section-heading";

const selectedIds = new Set(selectedProjects.map((s) => s.caseId));
const rest = projects.filter((p) => !p.caseId || !selectedIds.has(p.caseId));

export function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section id="more-projects" className="py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading sub={t("sub")}>{t("heading")}</SectionHeading>

        <div className="card overflow-hidden">
          <ul className="divide-y divide-border">
            {rest.map((p) => (
              <li
                key={p.title}
                className="grid gap-x-6 gap-y-1.5 px-6 py-[18px] md:grid-cols-[1.5fr_auto_auto] md:items-baseline md:px-8 md:py-5"
              >
                <p className="min-w-0 text-[15px] leading-snug">
                  <span className="font-semibold">{isKo ? p.title : p.titleEn}</span>
                  <span className="text-muted-foreground">
                    {" — "}
                    {isKo ? p.subtitle : p.subtitleEn}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground md:text-right">
                  {isKo ? p.period : p.periodEn}
                  {p.roles?.length ? ` · ${(isKo ? p.roles : p.rolesEn)?.join(" · ")}` : null}
                </p>
                <span className="flex items-center gap-4 md:justify-end">
                  {p.caseId && (
                    <Link
                      href={`/${locale}/career#section-${p.caseId}`}
                      className="inline-flex items-center gap-0.5 text-sm font-semibold text-accent hover:underline underline-offset-4"
                    >
                      {t("detail_link")}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} GitHub`}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
