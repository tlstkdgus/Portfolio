"use client";

import { useTranslations, useLocale } from "next-intl";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  const t = useTranslations("experience");
  const isKo = useLocale() === "ko";

  return (
    <section id="experience" className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading>{t("heading")}</SectionHeading>

        <ol className="divide-y divide-border">
          {experiences.map((exp) => (
            <li
              key={`${exp.company}-${exp.startDate}`}
              className="grid gap-y-2 py-7 first:pt-0 md:grid-cols-[150px_1fr] md:gap-x-8"
            >
              <p className="text-sm text-muted-foreground md:pt-1">
                {isKo ? exp.period : exp.periodEn}
              </p>
              <div>
                <h3 className="text-lg font-semibold leading-snug">
                  {isKo ? exp.company : exp.companyEn}
                </h3>
                <p className="mt-0.5 text-[15px]">
                  <span className="font-medium text-accent">
                    {isKo ? exp.role : exp.roleEn}
                  </span>
                  <span className="text-muted-foreground">
                    {" · "}
                    {isKo ? exp.team : exp.teamEn}
                  </span>
                </p>
                <ul className="mt-3 space-y-1.5 text-[15px] leading-relaxed text-foreground/85">
                  {(isKo ? exp.description : exp.descriptionEn).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="select-none text-muted-foreground">
                        –
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
