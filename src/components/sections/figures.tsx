"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

interface Figure {
  label: string;
  before: string;
  beforeNote: string;
  after: string;
  afterNote: string;
  basis: string;
  case: string;
}

// 도구를 만들기 전과 후. '전'은 상현이 직접 겪은 운영 방식이고, 추정치는 문구에 '추정'을 남긴다.
export function Figures() {
  const t = useTranslations("figures");
  const locale = useLocale();
  const items: Figure[] = t.raw("items");

  return (
    <section id="figures" className="gutter pb-24 md:pb-36">
      <SectionHeading sub={t("sub")}>{t("heading")}</SectionHeading>
      <ol className="border-t border-foreground">
        {items.map((f) => (
          <li
            key={f.label}
            className="grid gap-y-5 border-b border-border py-8 md:grid-cols-[minmax(0,3fr)_minmax(0,4fr)_minmax(0,5fr)] md:gap-x-10 md:py-10"
          >
            <div>
              <p className="text-[17px] font-bold tracking-[-0.01em] md:text-[19px]">{f.label}</p>
              <p className="meta mt-2 text-muted-foreground">{f.basis}</p>
            </div>
            <div className="flex items-start gap-4 md:block">
              <div>
                <p className="meta text-muted-foreground">{t("before")}</p>
                <p className="mt-1 text-[24px] font-bold leading-tight tracking-[-0.03em] text-muted-foreground line-through decoration-1 md:text-[30px]">
                  {f.before}
                </p>
                <p className="mt-1.5 text-[14px] leading-snug text-muted-foreground">{f.beforeNote}</p>
              </div>
            </div>
            <div className="grid grid-cols-[28px_1fr] items-start gap-x-3">
              <ArrowRight aria-hidden="true" className="mt-2 h-6 w-6 text-accent" />
              <div>
                <p className="meta text-accent">{t("after")}</p>
                <p className="mt-1 text-[36px] font-extrabold leading-none tracking-[-0.04em] md:text-[48px]">{f.after}</p>
                <p className="mt-2 text-[15px] leading-snug">{f.afterNote}</p>
                <Link
                  href={`/${locale}/career#section-${f.case}`}
                  className="hit mt-3 inline-flex items-center gap-1 text-[14px] font-semibold text-accent hover:underline underline-offset-4"
                >
                  {t("case_link")}
                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  <span className="sr-only">: {f.label}</span>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
