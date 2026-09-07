"use client";

import { useTranslations, useLocale } from "next-intl";
import { Trophy } from "lucide-react";
import { certifications, awards } from "@/data/credentials";
import { SectionHeading } from "@/components/ui/section-heading";

export function Credentials() {
  const t = useTranslations("certified");
  const isKo = useLocale() === "ko";
  const top = awards.filter((a) => a.highlight);
  const rest = awards.filter((a) => !a.highlight);

  return (
    <section id="certified" className="py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading>{t("heading")}</SectionHeading>

        <div className="grid gap-5 md:grid-cols-3">
          {top.map((a) => (
            <div key={a.title} className="card card-hover p-7">
              <Trophy className="h-5 w-5 text-accent" aria-hidden="true" />
              <p className="mt-3.5 text-[16px] font-bold leading-snug">
                {isKo ? a.title : a.titleEn}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {isKo ? a.issuer : a.issuerEn} · {a.date}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-[13px] font-bold tracking-[0.1em] text-muted-foreground">
              {t("awards_rest").toUpperCase()}
            </h3>
            <ul className="divide-y divide-border">
              {rest.map((a) => (
                <li key={a.title} className="flex items-baseline justify-between gap-4 py-2.5">
                  <span className="text-sm text-foreground/80">{isKo ? a.title : a.titleEn}</span>
                  <span className="shrink-0 text-[13px] text-muted-foreground">{a.date}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-[13px] font-bold tracking-[0.1em] text-muted-foreground">
              {t("certifications").toUpperCase()}
            </h3>
            <ul className="divide-y divide-border">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-baseline justify-between gap-4 py-2.5">
                  <span className="text-sm">
                    <span className="font-medium">{isKo ? c.name : c.nameEn}</span>
                    <span className="text-muted-foreground"> · {isKo ? c.issuer : c.issuerEn}</span>
                  </span>
                  <span className="shrink-0 text-[13px] text-muted-foreground">{c.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
