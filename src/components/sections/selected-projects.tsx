"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, ExternalLink } from "lucide-react";
import { selectedProjects } from "@/data/selected";
import { SectionHeading } from "@/components/ui/section-heading";

const rows = [
  { key: "problem", label: "PROBLEM" },
  { key: "decision", label: "DECISION" },
  { key: "impact", label: "IMPACT" },
] as const;

export function SelectedProjects() {
  const t = useTranslations("selected");
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading sub={t("sub")}>{t("heading")}</SectionHeading>

        <div className="space-y-8">
          {selectedProjects.map((p) => (
            <article
              key={p.id}
              className="card card-hover grid overflow-hidden md:grid-cols-[1fr_1.05fr]"
            >
              <div className="relative min-h-56 border-b border-border bg-muted md:border-b-0 md:border-r">
                <Image
                  src={p.image}
                  alt={isKo ? p.title : p.titleEn}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
              <div className="p-7 md:p-9">
                <p className="text-[13px] font-bold tracking-[0.12em] text-accent">
                  {isKo ? p.label : p.labelEn}
                </p>
                <h3 className="mt-2 text-[26px] font-bold tracking-tight md:text-[28px]">
                  {isKo ? p.title : p.titleEn}
                </h3>
                <p className="mt-1 text-[15px] text-muted-foreground">
                  {isKo ? p.subtitle : p.subtitleEn}
                </p>

                <dl className="mt-6 space-y-3.5">
                  {rows.map(({ key, label }) => (
                    <div key={key} className="grid grid-cols-[76px_1fr] gap-3">
                      <dt className="pt-0.5 text-[12px] font-bold tracking-[0.08em] text-muted-foreground">
                        {label}
                      </dt>
                      <dd className="text-[15px] leading-relaxed text-foreground/90">
                        {isKo ? p[key] : p[`${key}En`]}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <Link
                    href={`/${locale}/career#section-${p.caseId}`}
                    className="inline-flex items-center gap-1 text-[15px] font-semibold text-accent hover:underline underline-offset-4"
                  >
                    {t("case_cta")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
