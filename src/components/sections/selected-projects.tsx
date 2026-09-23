"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import { selectedProjects, type Localized } from "@/data/selected";
import { workHref } from "@/lib/work";
import { cn } from "@/lib/utils";

// 메인에서는 프로젝트마다 한 줄 요약 · 핵심 수치 · 역할만 보여주고, 나머지는 /work/<id>로 넘긴다.
// 이전에는 프로젝트마다 표지 → 헤드라인 → 대표 화면 → 본문 → 현장 → 성과 슬라이드 6장이라
// 대표 4개가 메인 높이의 65%(1440px 기준 17,900px)를 차지했다 (2026-09-23 "첫 페이지가 너무 길다" 피드백).
// 레퍼런스: limdahyun.vercel.app 'FEATURED PROJECTS' 목록.
export function SelectedProjects() {
  const t = useTranslations("selected");
  const locale = useLocale();
  const isKo = locale === "ko";
  const tr = (v: Localized) => (isKo ? v.ko : v.en);

  return (
    <section id="projects" className="gutter scroll-mt-16 py-24 md:py-36">
      <h2 className="display max-w-4xl">{t("index_heading")}</h2>
      <p className="mt-6 max-w-xl text-[17px] leading-[1.75] text-muted-foreground">{t("sub")}</p>

      <ol className="mt-14 border-t border-foreground md:mt-20">
        {selectedProjects.map((p, i) => {
          const href = workHref(locale, p.caseId);
          const title = tr(p.title);
          return (
            <li
              key={p.id}
              className="grid gap-8 border-b border-border py-10 md:py-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14"
            >
              <Link
                href={href}
                tabIndex={-1}
                aria-hidden="true"
                className={cn(
                  "group relative block aspect-[16/10] overflow-hidden",
                  p.heroTone === "ink" ? "bg-ink" : "bg-muted"
                )}
              >
                <Image
                  src={p.hero.src}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Link>

              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span className="meta font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="meta rounded-full border border-foreground/30 px-3 py-1 font-semibold">
                    {tr(p.status)}
                  </span>
                </div>

                <h3 className="mt-4 text-[30px] font-extrabold leading-[1.1] tracking-[-0.04em] md:text-[40px]">
                  <Link href={href} className="transition-colors hover:text-accent">
                    {title}
                  </Link>
                </h3>
                <p className="meta mt-2 text-muted-foreground">
                  {tr(p.kicker)} · {tr(p.period)}
                </p>
                <p className="mt-5 text-[18px] font-semibold leading-[1.55] tracking-[-0.01em] md:text-[20px]">
                  {tr(p.headline).replace(/\n/g, " ")}
                </p>

                <p className="eyebrow mt-8 text-muted-foreground">{t("key_impact")}</p>
                <dl className="mt-3 border-t border-foreground">
                  {p.stats.map((s) => (
                    <div
                      key={s.k.en}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-border py-3"
                    >
                      <dd className="text-[24px] font-extrabold leading-tight tracking-[-0.03em] md:text-[28px]">
                        {typeof s.v === "string" ? s.v : tr(s.v)}
                      </dd>
                      <dt className="text-[14px] leading-snug text-muted-foreground sm:max-w-[60%] sm:text-right md:text-[15px]">
                        {tr(s.k)}
                      </dt>
                    </div>
                  ))}
                </dl>

                <dl className="mt-5 grid grid-cols-[64px_1fr] gap-x-4 text-[15px]">
                  <dt className="eyebrow pt-0.5 text-muted-foreground">{t("role")}</dt>
                  <dd className="font-semibold">{tr(p.role)}</dd>
                </dl>

                <Link
                  href={href}
                  className="hit mt-8 inline-flex w-fit items-center gap-2 border-b-2 border-foreground pb-1 text-[16px] font-bold transition-colors hover:border-accent hover:text-accent"
                >
                  {t("more")}
                  <span className="sr-only">: {title}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
