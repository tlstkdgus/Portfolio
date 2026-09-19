"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";

export function Principles() {
  const t = useTranslations("principles");
  const items: { t: string; d: string }[] = t.raw("items");

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
            <p className="mt-4 text-[14px] leading-[1.75] text-muted-foreground">{item.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
