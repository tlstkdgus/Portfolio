"use client";

import { useTranslations, useLocale } from "next-intl";
import { certifications, awards } from "@/data/credentials";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function Credentials() {
  const t = useTranslations("certified");
  const isKo = useLocale() === "ko";

  return (
    <section id="certified" className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading>{t("heading")}</SectionHeading>

        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {t("awards")}
        </h3>
        <ul className="divide-y divide-border">
          {awards.map((a) => (
            <li key={a.title} className="flex items-baseline justify-between gap-4 py-3">
              <div>
                <p
                  className={cn(
                    "text-[15px]",
                    a.highlight ? "font-semibold" : "text-foreground/80"
                  )}
                >
                  {isKo ? a.title : a.titleEn}
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {isKo ? a.issuer : a.issuerEn}
                </p>
              </div>
              <span className="shrink-0 text-sm text-muted-foreground">{a.date}</span>
            </li>
          ))}
        </ul>

        <h3 className="mb-2 mt-12 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {t("certifications")}
        </h3>
        <ul className="divide-y divide-border">
          {certifications.map((c) => (
            <li key={c.name} className="flex items-baseline justify-between gap-4 py-3">
              <p className="text-[15px]">
                <span className="font-medium">{isKo ? c.name : c.nameEn}</span>
                <span className="text-muted-foreground">
                  {" · "}
                  {isKo ? c.issuer : c.issuerEn}
                </span>
              </p>
              <span className="shrink-0 text-sm text-muted-foreground">{c.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
