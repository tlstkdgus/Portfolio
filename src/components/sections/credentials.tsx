"use client";

import { useTranslations, useLocale } from "next-intl";
import { certifications, awards } from "@/data/credentials";

export function Credentials() {
  const t = useTranslations("certified");
  const isKo = useLocale() === "ko";
  const top = awards.filter((a) => a.highlight);
  const rest = awards.filter((a) => !a.highlight);

  return (
    <section id="certified" className="gutter scroll-mt-16 border-t border-foreground py-24 md:py-36">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="display">{t("heading")}</h2>
          {/* 수상 횟수를 숫자 하나로 — 레퍼런스의 대형 수치 슬라이드 */}
          <p className="stat mt-10 text-accent">{awards.length}</p>
          <p className="meta mt-2 text-muted-foreground">{t("count_label")}</p>
        </div>

        <div>
          <ol className="border-t border-foreground">
            {top.map((a) => (
              <li key={a.title} className="grid gap-x-6 gap-y-1 border-b border-border py-6 sm:grid-cols-[100px_1fr]">
                <span className="meta pt-1.5 text-muted-foreground">{a.date}</span>
                <span>
                  <span className="block text-[20px] font-bold leading-snug tracking-[-0.02em] md:text-[22px]">
                    {isKo ? a.title : a.titleEn}
                  </span>
                  <span className="mt-1 block text-[14px] text-muted-foreground">
                    {isKo ? a.issuer : a.issuerEn}
                  </span>
                </span>
              </li>
            ))}
          </ol>

          <ul className="mt-2">
            {rest.map((a) => (
              <li
                key={a.title}
                className="grid gap-x-6 border-b border-border py-3 text-[14px] sm:grid-cols-[100px_1fr]"
              >
                <span className="meta pt-0.5 text-muted-foreground">{a.date}</span>
                <span className="text-foreground/80">{isKo ? a.title : a.titleEn}</span>
              </li>
            ))}
          </ul>

          <h3 className="eyebrow mt-14 text-muted-foreground">{t("certifications")}</h3>
          <ul className="mt-4 border-t border-foreground">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="grid gap-x-6 border-b border-border py-3 text-[14px] sm:grid-cols-[100px_1fr]"
              >
                <span className="meta pt-0.5 text-muted-foreground">{c.date}</span>
                <span>
                  <span className="font-semibold">{isKo ? c.name : c.nameEn}</span>
                  <span className="text-muted-foreground"> · {isKo ? c.issuer : c.issuerEn}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
