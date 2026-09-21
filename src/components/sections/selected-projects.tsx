"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { selectedProjects, type SelectedProject, type Localized } from "@/data/selected";
import { MetaRow } from "@/components/ui/meta-row";
import { cn } from "@/lib/utils";

const total = String(selectedProjects.length).padStart(2, "0");
const num = (i: number) => String(i + 1).padStart(2, "0");

export function SelectedProjects() {
  const t = useTranslations("selected");
  const isKo = useLocale() === "ko";

  return (
    <section id="projects" className="scroll-mt-16">
      {/* 목차 — 레퍼런스 'What you will find inside?' */}
      <div className="gutter py-24 md:py-36">
        <h2 className="display max-w-4xl">{t("index_heading")}</h2>
        <ol className="mt-14 md:ml-auto md:mt-20 md:w-7/12">
          {selectedProjects.map((p, i) => (
            <li key={p.id}>
              <a
                href={`#work-${p.id}`}
                className="group grid grid-cols-[28px_1fr] items-baseline gap-x-4 gap-y-1 border-b border-foreground py-4 transition-colors hover:text-accent md:grid-cols-[40px_1fr_auto] md:py-5"
              >
                <span className="text-[16px] font-bold">{i + 1}</span>
                <span className="meta flex flex-wrap items-baseline gap-x-3 text-muted-foreground group-hover:text-accent">
                  {isKo ? p.kicker.ko : p.kicker.en}
                  <span className="font-semibold text-foreground group-hover:text-accent">
                    {isKo ? p.status.ko : p.status.en}
                  </span>
                </span>
                <span className="col-start-2 text-[22px] font-medium tracking-[-0.03em] md:col-start-auto md:text-[30px]">
                  {isKo ? p.title.ko : p.title.en}.
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      {selectedProjects.map((p, i) => (
        <ProjectSlides key={p.id} p={p} i={i} isKo={isKo} />
      ))}
    </section>
  );
}

function ProjectSlides({ p, i, isKo }: { p: SelectedProject; i: number; isKo: boolean }) {
  const t = useTranslations("selected");
  const tr = (v: Localized) => (isKo ? v.ko : v.en);
  const statValue = (v: string | Localized) => (typeof v === "string" ? v : tr(v));
  const title = tr(p.title);

  return (
    <article id={`work-${p.id}`} aria-labelledby={`work-${p.id}-title`} className="scroll-mt-16">
      {/* 1. 검은 표지 — 레퍼런스 'Branding. →' */}
      <div className="gutter flex min-h-[70svh] flex-col bg-ink pb-8 pt-6 text-ink-foreground md:min-h-[88svh] md:pb-12 md:pt-8">
        <MetaRow items={[`${num(i)} / ${total}`, tr(p.kicker), tr(p.period)]} className="text-ink-muted" />
        <div className="flex flex-1 items-start justify-end pt-10">
          <ArrowRight aria-hidden="true" strokeWidth={1} className="h-16 w-16 md:h-28 md:w-28" />
        </div>
        <p
          aria-hidden="true"
          className="font-extrabold leading-[0.9] tracking-[-0.06em]"
          style={{ fontSize: "clamp(3.25rem, 13.5vw, 13rem)" }}
        >
          {tr(p.cover)}
        </p>
      </div>

      {/* 2. 헤드라인 + 한 일 — 레퍼런스 'The Making of Sira' */}
      <div className="gutter py-20 md:py-32">
        <MetaRow items={[title, tr(p.status)]} className="mb-12 text-muted-foreground md:mb-20" />
        <div className="grid gap-12 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] lg:items-end">
          <m.h3
            id={`work-${p.id}-title`}
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="headline whitespace-pre-line"
          >
            {tr(p.headline)}
          </m.h3>
          <div>
            <p className="eyebrow mb-4 text-muted-foreground">{t("did")}</p>
            <ul className="space-y-2 text-[17px] font-medium leading-snug tracking-[-0.01em] md:text-[19px]">
              {(isKo ? p.did.ko : p.did.en).map((d) => (
                <li key={d} className="flex gap-3">
                  <span aria-hidden="true">•</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <dl className="mt-12 grid gap-x-10 gap-y-5 border-t border-foreground pt-6 md:mt-16 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="grid grid-cols-[72px_1fr] gap-x-4">
            <dt className="eyebrow pt-1 text-muted-foreground">{t("role")}</dt>
            <dd className="text-[16px] font-semibold">{tr(p.role)}</dd>
          </div>
          <div className="grid grid-cols-[72px_1fr] gap-x-4">
            <dt className="eyebrow pt-1 text-muted-foreground">{t("scope")}</dt>
            <dd className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[16px] font-semibold">
              {(isKo ? p.scope.ko : p.scope.en).map((s, k, arr) => (
                <span key={s} className="inline-flex items-center gap-2">
                  {s}
                  {k < arr.length - 1 && (
                    <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 text-muted-foreground" />
                  )}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      {/* 3. 대표 화면 — 화면 폭 */}
      <div className={cn("gutter py-10 md:py-20", p.heroTone === "ink" ? "bg-ink" : "bg-muted")}>
        <Image
          src={p.hero.src}
          alt={tr(p.hero.alt)}
          width={1920}
          height={1080}
          sizes="100vw"
          className="mx-auto h-auto w-full max-w-6xl shadow-[0_30px_80px_-30px_rgb(0_0_0/0.45)]"
        />
      </div>

      {/* 4. 문제 · 결정 */}
      <div className="gutter py-20 md:py-32">
        <div className="grid gap-12 border-t border-foreground pt-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow text-muted-foreground">{t("problem")}</p>
            <p className="mt-5 text-[17px] leading-[1.8] md:text-[19px]">{tr(p.problem)}</p>
          </div>
          <div>
            <p className="eyebrow text-accent">{t("decision")}</p>
            <p className="mt-5 text-[17px] leading-[1.8] md:text-[19px]">{tr(p.decision)}</p>
          </div>
        </div>
        {/* 흐름 다이어그램 — PNG 대신 사이트 글꼴로. 단계 이름은 크게, 설명은 한 줄 */}
        {p.diagrams?.map((d) => (
          <div key={d.title.en} className="mt-20 md:mt-28">
            <h4 className="text-[22px] font-bold leading-snug tracking-[-0.02em] md:text-[28px]">{tr(d.title)}</h4>
            <ol
              className={cn(
                "mt-8 grid border-t border-foreground",
                d.steps.length >= 5 ? "md:grid-cols-5" : "md:grid-cols-4"
              )}
            >
              {d.steps.map((st, k) => (
                <li
                  key={st.label.en}
                  className="border-b border-border py-5 md:border-b-0 md:border-l md:px-5 md:py-7 md:first:border-l-0 md:first:pl-0"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[30px] font-extrabold leading-[1.05] tracking-[-0.04em] md:text-[36px]">
                      {tr(st.label)}
                    </p>
                    {k < d.steps.length - 1 && (
                      <>
                        <ArrowRight aria-hidden="true" className="mt-2 hidden h-5 w-5 shrink-0 text-muted-foreground md:block" />
                        <ArrowDown aria-hidden="true" className="mt-2 h-5 w-5 shrink-0 text-muted-foreground md:hidden" />
                      </>
                    )}
                  </div>
                  <p className="mt-3 text-[15px] leading-[1.6] text-muted-foreground">{tr(st.note)}</p>
                </li>
              ))}
            </ol>
            {d.caption && (
              <p className="mt-8 max-w-3xl text-[17px] font-semibold leading-[1.7] md:text-[19px]">{tr(d.caption)}</p>
            )}
          </div>
        ))}

        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-6">
          {p.gallery.map((img) => (
            <div key={img.src} className="overflow-hidden border border-border bg-muted">
              <Image
                src={img.src}
                alt={tr(img.alt)}
                width={1600}
                height={950}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 4-1. 현장 — 제3자(브랜드 디자인 랩)가 기록한 사진과 문장. 출처를 같이 보여준다 */}
      {p.field && (
        <div className="gutter bg-muted py-16 md:py-24">
          <div className="grid gap-3 md:grid-cols-6 md:gap-4">
            {p.field.images.map((img, j) => (
              <a
                key={img.src}
                href={p.field!.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("relative block overflow-hidden bg-background", j < 2 ? "aspect-[3/2] md:col-span-3" : "aspect-[4/3] md:col-span-2")}
              >
                <Image src={img.src} alt={tr(img.alt)} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </a>
            ))}
          </div>
          <blockquote className="mt-10 max-w-3xl md:mt-14">
            <p className="text-[19px] font-semibold leading-[1.6] tracking-[-0.01em] md:text-[24px]">“{tr(p.field.quote)}”</p>
            <cite className="meta mt-4 block not-italic text-muted-foreground">
              <a href={p.field.source.url} target="_blank" rel="noopener noreferrer" className="hit underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground">
                {tr(p.field.source.label)}
                <span className="sr-only">{isKo ? " (새 창)" : " (opens in a new tab)"}</span>
              </a>
            </cite>
          </blockquote>
        </div>
      )}

      {/* 5. 성과 — 블루 화면. 레퍼런스 'WE CONCLUDED THAT… 18% 76%' */}
      <div className="gutter bg-accent-surface py-20 text-accent-foreground md:py-32">
        <MetaRow items={[t("impact"), title]} className="mb-12 opacity-90 md:mb-20" />
        <p className="headline whitespace-pre-line">{tr(p.statement)}</p>
        <dl
          className={cn(
            "mt-16 grid gap-x-8 gap-y-12 md:mt-24",
            p.stats.length === 4 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2 md:grid-cols-3"
          )}
        >
          {p.stats.map((s) => (
            <div key={s.k.en} className="stat-cell border-t border-accent-foreground/40 pt-5">
              <dd className="stat">{statValue(s.v)}</dd>
              <dt className="mt-3 text-[14px] font-medium leading-snug opacity-85 md:text-[15px]">
                {tr(s.k)}
              </dt>
            </div>
          ))}
        </dl>

        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-[16px] font-semibold md:mt-24">
          <Link
            href={`/${isKo ? "ko" : "en"}/career#section-${p.caseId}`}
            className="hit inline-flex items-center gap-2 border-b-2 border-accent-foreground pb-1 transition-opacity hover:opacity-75"
          >
            {t("case_cta")}
              <span className="sr-only">: {title}</span>
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hit inline-flex items-center gap-1 opacity-85 transition-opacity hover:opacity-100"
            >
              {t("live")}
              <span className="sr-only">: {title}</span>
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only">{isKo ? " (새 창)" : " (opens in a new tab)"}</span>
            </a>
          )}
          {p.behanceUrl && (
            <a
              href={p.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hit inline-flex items-center gap-1 opacity-85 transition-opacity hover:opacity-100"
            >
              {t("behance")}
              <span className="sr-only">: {title}</span>
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only">{isKo ? " (새 창)" : " (opens in a new tab)"}</span>
            </a>
          )}
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="hit inline-flex items-center gap-1 opacity-85 transition-opacity hover:opacity-100"
            >
              {t("repo")}
              <span className="sr-only">: {title}</span>
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only">{isKo ? " (새 창)" : " (opens in a new tab)"}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
