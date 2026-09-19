"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { selectedProjects } from "@/data/selected";

const selectedIds = new Set(selectedProjects.map((s) => s.caseId));
const rest = projects.filter((p) => !p.caseId || !selectedIds.has(p.caseId));

export function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section id="more-projects" className="gutter py-24 md:py-36">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="display">{t("heading")}</h2>
          <p className="mt-5 max-w-sm text-[15px] leading-[1.7] text-muted-foreground">{t("sub")}</p>
        </div>

        <ol className="border-t border-foreground">
          {rest.map((p) => {
            const row = (
              <>
                <span className="meta col-span-2 pt-1.5 text-muted-foreground sm:col-span-1">
                  {isKo ? p.period : p.periodEn}
                </span>
                <span className="min-w-0">
                  <span className="block text-[20px] font-bold tracking-[-0.02em] md:text-[24px]">
                    {isKo ? p.title : p.titleEn}
                  </span>
                  <span className="mt-1 block text-[14px] leading-snug text-muted-foreground">
                    {isKo ? p.subtitle : p.subtitleEn}
                    {p.roles?.length ? ` · ${(isKo ? p.roles : p.rolesEn)?.join(" · ")}` : null}
                  </span>
                </span>
                {p.caseId ? (
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1.5 h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                ) : (
                  <span />
                )}
              </>
            );
            const cls =
              "group grid grid-cols-[1fr_20px] gap-x-6 gap-y-1 border-b border-border py-5 sm:grid-cols-[130px_1fr_20px]";
            return (
              <li key={p.title}>
                {p.caseId ? (
                  <Link
                    href={`/${locale}/career#section-${p.caseId}`}
                    aria-label={`${isKo ? p.title : p.titleEn} — ${t("detail_link")}`}
                    className={`${cls} transition-colors hover:text-accent`}
                  >
                    {row}
                  </Link>
                ) : (
                  <div className={cls}>{row}</div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
