"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

interface Change {
  before: string;
  after: string;
  label: string;
  d: string;
  basis: string;
}
interface ScaleItem {
  v: string;
  label: string;
  note: string;
}

// 운영이 실제로 바뀐 것만 적는다. '전'은 상현이 직접 겪은 방식이고, 추정치는 문구에 '추정'을 남긴다 (v9).
// 사용자 수·방문수는 확보되지 않아 넣지 않는다.
export function Figures() {
  const t = useTranslations("figures");
  const changes: Change[] = t.raw("changes");
  const scale: ScaleItem[] = t.raw("scale");

  return (
    <section id="figures" className="gutter pb-24 md:pb-36">
      <SectionHeading sub={t("sub")}>{t("heading")}</SectionHeading>

      <p className="meta text-muted-foreground">
        <span className="font-bold text-accent">01</span>
        <span className="ml-3 font-semibold tracking-[0.12em]">{t("group_ops")}</span>
      </p>
      <ol className="mt-4 border-t border-foreground">
        {changes.map((c) => (
          <li
            key={c.label}
            className="grid gap-y-4 border-b border-border py-7 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-x-10 md:py-9"
          >
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="text-[22px] font-bold leading-tight tracking-[-0.03em] text-muted-foreground line-through decoration-1 md:text-[26px]">
                {c.before}
              </span>
              <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 self-center text-accent" />
              <span className="text-[34px] font-extrabold leading-none tracking-[-0.04em] md:text-[44px]">{c.after}</span>
            </div>
            <div>
              <p className="text-[17px] font-bold tracking-[-0.01em] md:text-[19px]">{c.label}</p>
              <p className="mt-2 text-[15px] leading-[1.7] text-foreground/80">{c.d}</p>
              <p className="meta mt-2 text-muted-foreground">{c.basis}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="meta mt-16 text-muted-foreground md:mt-20">
        <span className="font-bold text-accent">02</span>
        <span className="ml-3 font-semibold tracking-[0.12em]">{t("group_scale")}</span>
      </p>
      <dl className="mt-4 grid border-t border-foreground md:grid-cols-3">
        {scale.map((x, i) => (
          <div
            key={x.label}
            className={
              "border-b border-border py-6 md:border-b-0 md:py-8 " +
              (i > 0 ? "md:border-l md:pl-8" : "") +
              (i < scale.length - 1 ? " md:pr-8" : "")
            }
          >
            <dd className="text-[36px] font-extrabold leading-none tracking-[-0.04em] md:text-[44px]">{x.v}</dd>
            <dt className="mt-3 text-[16px] font-semibold">{x.label}</dt>
            <p className="meta mt-1 text-muted-foreground">{x.note}</p>
          </div>
        ))}
      </dl>
    </section>
  );
}
