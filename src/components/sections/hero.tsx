"use client";

import { useTranslations } from "next-intl";
import { m } from "framer-motion";
import { MetaRow } from "@/components/ui/meta-row";
import { profile } from "@/data/profile";
import { Emph } from "@/components/ui/emph";
import { cn } from "@/lib/utils";

export function Hero() {
  const t = useTranslations("hero");
  const tm = useTranslations("meta");
  const metrics: { v: string; k: string }[] = t.raw("metrics");

  return (
    <>
      {/* 표지 — 레퍼런스 1번 슬라이드. 메타 줄 + 화면 폭 워드마크 */}
      <section id="hero" className="gutter flex min-h-[100svh] flex-col pb-10 pt-24 md:pb-14">
        <MetaRow items={[tm("deck"), t("name")]} className="text-muted-foreground" />

        <div className="flex flex-1 flex-col justify-end">
          <MetaRow
            items={[
              tm("role"),
              <a
                key="email"
                href={`mailto:${profile.links.email}`}
                className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
              >
                {profile.links.email}
              </a>,
              tm("location"),
            ]}
            className="mb-3 border-b border-foreground pb-3 md:mb-4"
          />
          <m.h1
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="wordmark -ml-[0.04em] text-foreground"
          >
            {t("wordmark")}
          </m.h1>

          <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-10">
            <p className="whitespace-pre-line text-[22px] font-bold leading-[1.35] tracking-[-0.02em] md:text-[28px]">
              {t("lead")}
            </p>
            <p className="max-w-lg text-[16px] leading-[1.75] text-muted-foreground md:justify-self-end">
              <Emph text={t("summary")} />
            </p>
          </div>
        </div>
      </section>

      {/* 핵심 숫자 — 인턴 경험이 첫 칸 */}
      <section aria-label="Key numbers" className="gutter border-t border-foreground">
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {metrics.map(({ v, k }, i) => (
            <div
              key={k}
              className={cn(
                "border-border py-8 md:py-12",
                // 폰: 2×2 격자 / 데스크톱: 한 줄 4칸
                i % 2 === 1 ? "border-l pl-4" : "pr-4",
                i >= 2 && "border-t md:border-t-0",
                i > 0 ? "md:border-l md:px-8" : "md:pr-8"
              )}
            >
              <dd className="text-[44px] font-extrabold leading-none tracking-[-0.05em] md:text-[64px]">
                {v}
              </dd>
              <dt className="mt-3 text-[14px] font-medium leading-snug text-muted-foreground">{k}</dt>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
