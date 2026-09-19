"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function Principles() {
  const t = useTranslations("principles");
  const locale = useLocale();
  const items: { t: string; d: string; case: string }[] = t.raw("items");

  return (
    <section id="principles" className="gutter pb-24 md:pb-36">
      <SectionHeading>{t("heading")}</SectionHeading>
      <ol className="grid border-t border-foreground md:grid-cols-3">
        {items.map((item, i) => (
          <li
            key={item.t}
            className="border-b border-border py-8 md:border-b-0 md:border-l md:px-8 md:py-10 md:first:border-l-0 md:first:pl-0"
          >
            <p className="meta text-muted-foreground">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-6 text-[22px] font-bold leading-snug tracking-[-0.02em] md:text-[26px]">
              {item.t}
            </h3>
            <p className="mt-4 text-[16px] leading-[1.75] text-foreground/80">{item.d}</p>
            <Link
              href={`/${locale}/career#section-${item.case}`}
              className="hit mt-5 inline-flex items-center gap-1 text-[15px] font-semibold text-accent hover:underline underline-offset-4"
            >
              {t("case_link")}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only">: {item.t}</span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
