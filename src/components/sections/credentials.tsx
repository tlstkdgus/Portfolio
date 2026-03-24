"use client";

import { useTranslations, useLocale } from "next-intl";
import { m } from "framer-motion";
import { Award } from "lucide-react";
import { certifications, awards } from "@/data/credentials";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { parseDate } from "@/lib/date-utils";

export function Credentials() {
  const t = useTranslations("certified");
  const locale = useLocale();
  const isKo = locale === "ko";


  const sortedCerts = [...certifications].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  return (
    <section id="certified" className="bg-section-alt py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>{t("heading")}</SectionHeading>

        {/* Certifications */}
        <m.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 text-lg font-semibold text-foreground"
        >
          {t("certifications")}
        </m.h3>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {sortedCerts.map((cert, i) => (
            <m.div
              key={`${cert.name}-${cert.date}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={cn(
                "group rounded-xl border bg-card p-4 transition-colors transition-shadow",
                cert.highlight
                  ? "border-accent/30 shadow-sm"
                  : "border-border hover:border-accent/20"
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-foreground">
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        {isKo ? cert.name : cert.nameEn}
                      </a>
                    ) : (
                      <>{isKo ? cert.name : cert.nameEn}</>
                    )}
                  </h4>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {isKo ? cert.issuer : cert.issuerEn}
                  </p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {cert.date}
                </span>
              </div>
              {cert.highlight && (
                <div className="mt-2 h-0.5 w-8 rounded-full bg-accent/40" />
              )}
            </m.div>
          ))}
        </div>

        {/* Awards */}
        <m.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 text-lg font-semibold text-foreground"
        >
          {t("awards")}
        </m.h3>

        <div className="grid gap-3 sm:grid-cols-2">
          {[...awards].sort((a, b) => parseDate(b.date) - parseDate(a.date)).map((award, i) => (
            <m.div
              key={`${award.title}-${award.date}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={cn(
                "rounded-xl border bg-card p-4 transition-colors transition-shadow",
                award.highlight
                  ? "border-accent/30 shadow-sm"
                  : "border-border hover:border-accent/20"
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <Award className="h-3.5 w-3.5 shrink-0 text-accent" />
                    <h4 className="text-sm font-semibold text-foreground">
                      {isKo ? award.title : award.titleEn}
                    </h4>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {isKo ? award.issuer : award.issuerEn}
                  </p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {award.date}
                </span>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
