"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";

export function About() {
  const t = useTranslations("about");
  const isKo = useLocale() === "ko";
  const keywords: string[] = t.raw("keywords");
  const edu = profile.education[0];

  return (
    <section id="about" className="py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading>{t("heading")}</SectionHeading>

        <div className="card grid gap-8 p-7 md:grid-cols-[auto_1fr] md:p-9">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl">
            <Image src="/profile.jpg" alt={t("heading")} fill className="object-cover" sizes="96px" />
          </div>
          <div>
            <div className="space-y-4 text-[16px] leading-[1.7] text-foreground/90">
              <p>{t("description_1")}</p>
              <p>{t("description_2")}</p>
              <p className="font-medium text-foreground">{t("description_3")}</p>
            </div>

            <dl className="mt-7 grid gap-y-3 border-t border-border pt-6 text-[15px] sm:grid-cols-[96px_1fr] sm:gap-x-6">
              <dt className="text-[13px] font-bold tracking-wide text-muted-foreground">
                {t("education_label")}
              </dt>
              <dd>
                <span className="font-medium">{isKo ? edu.school : edu.schoolEn}</span>
                <span className="text-muted-foreground"> · {edu.date}</span>
                <br />
                <span className="text-muted-foreground">{isKo ? edu.major : edu.majorEn}</span>
              </dd>
              <dt className="text-[13px] font-bold tracking-wide text-muted-foreground">
                {t("keywords_label")}
              </dt>
              <dd className="flex flex-wrap gap-x-4 gap-y-1 text-foreground/85">
                {keywords.map((k) => (
                  <span key={k}>{k}</span>
                ))}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
