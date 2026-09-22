"use client";

import { useTranslations } from "next-intl";
import { m } from "framer-motion";
import { MetaRow } from "@/components/ui/meta-row";
import { profile } from "@/data/profile";
import { Emph } from "@/components/ui/emph";
import { cn } from "@/lib/utils";

// 표지 — 레퍼런스 1번 슬라이드. 워드마크를 한 단계 줄여서 핵심 숫자 4개까지 첫 화면 안에 넣는다
// (2026-09-22 상현 승인). 이름·섹션 순서는 그대로 둔다.
export function Hero() {
  const t = useTranslations("hero");
  const tm = useTranslations("meta");
  const metrics: { v: string; k: string }[] = t.raw("metrics");

  return (
    <section id="hero" className="gutter flex flex-col pb-6 pt-20 md:min-h-[100svh] md:pb-8 md:pt-24">
      <MetaRow items={[tm("deck"), t("name")]} className="text-muted-foreground" />

      <div className="flex flex-col md:flex-1 md:justify-end">
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
          className="mb-3 mt-10 border-b border-foreground pb-3 md:mt-0"
        />
        <m.h1
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="wordmark -ml-[0.04em] text-foreground"
          style={{ fontSize: "clamp(3.75rem, min(15vw, 26svh), 13rem)" }}
        >
          {t("wordmark")}
        </m.h1>

        <div className="mt-6 grid gap-5 md:mt-8 md:grid-cols-2 md:gap-10">
          <p className="whitespace-pre-line text-balance text-[22px] font-bold leading-[1.35] tracking-[-0.02em] md:text-[26px]">
            {t("lead")}
          </p>
          <p className="max-w-lg text-[15px] leading-[1.7] text-muted-foreground md:justify-self-end md:text-[16px]">
            <Emph text={t("summary")} />
          </p>
        </div>

        <dl className="mt-8 grid grid-cols-2 border-t border-foreground md:mt-10 md:grid-cols-4">
          {metrics.map(({ v, k }, i) => (
            <div
              key={k}
              className={cn(
                "border-border pb-4 pt-5 md:pb-2 md:pt-6",
                i % 2 === 1 ? "border-l pl-4" : "pr-4",
                i >= 2 && "border-t md:border-t-0",
                i > 0 ? "md:border-l md:px-8" : "md:pr-8"
              )}
            >
              <dd className="text-[40px] font-extrabold leading-none tracking-[-0.05em] md:text-[52px]">{v}</dd>
              <dt className="mt-2 text-[14px] font-medium leading-snug text-muted-foreground">{k}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
