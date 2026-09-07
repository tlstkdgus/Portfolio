"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";

export function Principles() {
  const t = useTranslations("principles");
  const items: { t: string; d: string }[] = t.raw("items");

  return (
    <section id="principles" className="py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading>{t("heading")}</SectionHeading>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <div key={item.t} className="card p-7">
              <p className="text-[13px] font-bold tracking-[0.12em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2.5 text-lg font-bold">{item.t}</h3>
              <p className="mt-2.5 text-[15px] leading-[1.7] text-muted-foreground">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
