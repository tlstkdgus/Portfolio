"use client";

import { useTranslations, useLocale } from "next-intl";
import { m } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { careerDetailSections, type CareerDetailItem } from "@/data/career-detail";
import { DetailItem } from "@/components/sections/career-story/detail-item";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { MetaRow } from "@/components/ui/meta-row";

const total = String(careerDetailSections.length).padStart(2, "0");

// "80개 대학 연합 해커톤 운영 — 14기 중앙해커톤 'ANIMAL LEAGUE'" → 이름과 설명으로 분리
function splitTitle(title: string) {
  const idx = title.lastIndexOf(" — ");
  if (idx === -1) return { name: title, desc: "" };
  return { name: title.slice(idx + 3), desc: title.slice(0, idx) };
}

export function CareerStoryContent() {
  const t = useTranslations("career_story");
  const tm = useTranslations("meta");
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <div className="min-h-screen bg-background">
      {/* 표지 */}
      <div className="gutter flex min-h-[70svh] flex-col bg-ink pb-10 pt-20 text-ink-foreground md:pb-14">
        <MetaRow items={[tm("deck"), tm("role")]} className="text-ink-muted" />
        <div className="flex flex-1 flex-col justify-end pt-16">
          <Link
            href={`/${locale}/#projects`}
            className="hit meta mb-6 inline-flex w-fit items-center gap-1.5 text-ink-muted transition-colors hover:text-ink-foreground"
          >
            <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
            {t("back")}
          </Link>
          <m.h1
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="wordmark -ml-[0.04em]"
            style={{ fontSize: "clamp(3.25rem, 14vw, 13rem)" }}
          >
            {t("title")}
          </m.h1>
          <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-ink-muted">{t("subtitle")}</p>
        </div>
      </div>

      {/* 목차 — 번호 + 줄 */}
      <nav aria-label={t("toc")} className="gutter py-16 md:py-24">
        <p className="eyebrow mb-5 text-muted-foreground">{t("toc")}</p>
        <ol className="grid border-t border-foreground md:grid-cols-2 md:gap-x-16">
          {careerDetailSections.map((section, i) => {
            const { name } = splitTitle(isKo ? section.title : section.titleEn);
            return (
              <li key={section.id}>
                <a
                  href={`#section-${section.id}`}
                  className="group grid grid-cols-[36px_1fr] items-baseline border-b border-border py-3 transition-colors hover:text-accent"
                >
                  <span className="meta text-muted-foreground group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] font-semibold tracking-[-0.01em]">{name}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* 본문 */}
      <div className="gutter pb-24">
        {careerDetailSections.map((section, i) => {
          const { name, desc } = splitTitle(isKo ? section.title : section.titleEn);
          return (
            <article
              key={section.id}
              id={`section-${section.id}`}
              className="scroll-mt-16 border-t border-foreground pb-24 pt-6 md:pb-36"
            >
              <MetaRow items={[`${String(i + 1).padStart(2, "0")} / ${total}`, desc]} className="text-muted-foreground" />
              <h2 className="headline mt-10 md:mt-16">{name}</h2>

              {section.images && section.images.length > 0 && (
                <div className="mt-12 md:mt-16">
                  <ImageCarousel images={section.images} alt={name} />
                </div>
              )}

              <div className="mt-14 space-y-12 md:mt-20 md:space-y-16">
                <Block label={t("background")} items={section.background} isKo={isKo} />

                <Row label={t("role")}>
                  <div className="space-y-10">
                    {section.role.map((sub) => (
                      <div key={sub.title}>
                        <h3 className="text-[19px] font-bold leading-snug tracking-[-0.02em] md:text-[21px]">
                          {isKo ? sub.title : sub.titleEn}
                        </h3>
                        <ul className="mt-4 space-y-4">
                          {sub.items.map((item, j) => (
                            <DetailItem key={j} item={item} isKo={isKo} />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Row>

                <Row label={t("results")} accent>
                  <ul className="space-y-4 border-l-2 border-accent pl-5">
                    {section.results.map((item, j) => (
                      <DetailItem key={j} item={item} isKo={isKo} strong />
                    ))}
                  </ul>
                </Row>

                <Block label={t("lessons")} items={section.lessons} isKo={isKo} />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function Row({ label, accent, children }: { label: string; accent?: boolean; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-10 lg:grid-cols-[240px_1fr]">
      <h3 className={accent ? "eyebrow pt-1 text-accent" : "eyebrow pt-1 text-muted-foreground"}>{label}</h3>
      <div className="max-w-3xl">{children}</div>
    </section>
  );
}

function Block({ label, items, isKo }: { label: string; items: CareerDetailItem[]; isKo: boolean }) {
  return (
    <Row label={label}>
      <ul className="space-y-4">
        {items.map((item, j) => (
          <DetailItem key={j} item={item} isKo={isKo} />
        ))}
      </ul>
    </Row>
  );
}
