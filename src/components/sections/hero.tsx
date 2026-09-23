"use client";

import { useTranslations } from "next-intl";
import { m } from "framer-motion";
import { MetaRow } from "@/components/ui/meta-row";
import { profile } from "@/data/profile";
import { Emph } from "@/components/ui/emph";
import { cn } from "@/lib/utils";

// 표지. 가장 큰 글자는 포지셔닝 문장이고, 바로 아래 문단과 숫자 4개가 그 문장을 증명한다 (2026-09-24).
// 이전에는 'Portfolio' 워드마크가 가장 컸는데 정보가 없는 글자였다. 'Portfolio 2026'은 위 메타 줄에 남긴다.
// 이름을 거대하게 두는 안은 상현이 거절했다(2026-09) — 이름은 문장 끝 "신상현입니다"로만.
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
          className="mt-8 whitespace-pre-line text-balance font-extrabold leading-[1.18] tracking-[-0.045em] text-foreground md:mt-10"
          style={{ fontSize: "clamp(2rem, 4.6vw, 4.5rem)" }}
        >
          {t("lead")}
        </m.h1>

        <p className="mt-6 max-w-4xl text-[16px] leading-[1.75] text-muted-foreground md:mt-8 md:text-[18px]">
          <Emph text={t("summary")} />
        </p>

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
              <dd className="text-[30px] font-extrabold leading-none tracking-[-0.05em] md:text-[clamp(1.75rem,2.8vw,2.75rem)]">{v}</dd>
              <dt className="mt-2 text-[14px] font-medium leading-snug text-muted-foreground">{k}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
