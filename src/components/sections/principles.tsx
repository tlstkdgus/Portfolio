"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

interface Evidence {
  t: string;
  case: string;
}
interface Step {
  step: string;
  t: string;
  d: string;
  evidence: Evidence[];
}

// 일하는 방식 = 포지셔닝의 세 단계(파고든다 → 직접 만든다 → 배포한 뒤에도 고친다).
// 단계마다 근거 칩이 케이스 스터디로 이어져, 말이 아니라 프로젝트로 읽히게 한다.
export function Principles() {
  const t = useTranslations("principles");
  const locale = useLocale();
  const items: Step[] = t.raw("items");

  return (
    <section id="principles" className="gutter pb-24 md:pb-36">
      <SectionHeading sub={t("sub")}>{t("heading")}</SectionHeading>
      <ol className="grid border-t border-foreground md:grid-cols-3">
        {items.map((item, i) => (
          <li
            key={item.step}
            className="flex flex-col border-b border-border py-8 md:border-b-0 md:border-l md:px-8 md:py-10 md:first:border-l-0 md:first:pl-0"
          >
            <p className="meta flex items-center justify-between text-muted-foreground">
              <span>
                <span className="font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="ml-3 font-semibold tracking-[0.12em]">{item.step}</span>
              </span>
              {i < items.length - 1 && <ArrowRight aria-hidden="true" className="hidden h-4 w-4 md:block" />}
            </p>
            <h3 className="mt-7 whitespace-pre-line text-[24px] font-bold leading-[1.25] tracking-[-0.03em] md:text-[28px]">
              {item.t}
            </h3>
            <p className="mt-4 text-[16px] leading-[1.75] text-foreground/80">{item.d}</p>

            <p className="eyebrow mt-auto pt-8 text-muted-foreground">{t("evidence")}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {item.evidence.map((e) => (
                <li key={e.t}>
                  <Link
                    href={`/${locale}/career#section-${e.case}`}
                    className="inline-flex min-h-9 items-center border border-foreground/25 px-3 py-1.5 text-[14px] font-semibold leading-snug transition-colors hover:border-accent hover:text-accent"
                  >
                    {e.t}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <a
        href="#projects"
        className="hit mt-10 inline-flex items-center gap-2 text-[16px] font-semibold md:mt-14"
      >
        {t("to_projects")}
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </a>
    </section>
  );
}
