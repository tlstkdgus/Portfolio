"use client";

import { useTranslations, useLocale } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";

export function About() {
  const t = useTranslations("about");
  const isKo = useLocale() === "ko";
  const keywords: string[] = t.raw("keywords");
  const edu = profile.education[0];

  return (
    <section id="about" className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading>{t("heading")}</SectionHeading>

        <div className="space-y-5 text-base leading-relaxed text-foreground/85 md:text-[17px]">
          <p>{t("description_1")}</p>
          <p>{t("description_2")}</p>
          <p className="border-l-2 border-accent pl-4 font-medium text-foreground">
            {t("description_3")}
          </p>
        </div>

        <dl className="mt-10 grid gap-y-4 text-[15px] sm:grid-cols-[110px_1fr] sm:gap-x-6">
          <dt className="text-sm font-semibold text-muted-foreground">
            {t("education_label")}
          </dt>
          <dd>
            <span className="font-medium">{isKo ? edu.school : edu.schoolEn}</span>
            <span className="text-muted-foreground"> · {edu.date}</span>
            <br />
            <span className="text-muted-foreground">
              {isKo ? edu.major : edu.majorEn}
            </span>
          </dd>

          <dt className="text-sm font-semibold text-muted-foreground">
            {t("keywords_label")}
          </dt>
          <dd className="flex flex-wrap gap-x-4 gap-y-1">
            {keywords.map((k) => (
              <span key={k}>{k}</span>
            ))}
          </dd>
        </dl>
      </div>
    </section>
  );
}
