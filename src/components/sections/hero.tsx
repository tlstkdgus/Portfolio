"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");
  const metrics: { v: string; k: string }[] = t.raw("metrics");

  return (
    <section id="hero" className="pb-14 pt-32 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_1fr] md:gap-14">
          <div>
            <h1 className="text-4xl font-bold leading-[1.18] tracking-tight md:text-[46px]">
              {t("title1")}
              <br />
              <span className="text-accent">{t("title2")}</span>
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-[1.7] text-muted-foreground">
              {t("subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                {t("cta_resume")}
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-[15px] font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                {t("cta_contact")}
              </a>
            </div>
          </div>

          <div>
            <div className="card overflow-hidden !rounded-[20px]">
              <Image
                src="/projects/cleanb/01.png"
                alt="CleanB"
                width={1440}
                height={900}
                className="h-auto w-full"
                priority
              />
            </div>
            <p className="mt-2.5 text-[13px] text-muted-foreground">{t("hero_caption")}</p>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-border bg-border md:grid-cols-4">
          {metrics.map(({ v, k }) => (
            <div key={k} className="bg-card px-6 py-5">
              <dd className="text-[26px] font-bold tracking-tight text-accent">{v}</dd>
              <dt className="mt-1 text-[13px] font-semibold tracking-wide text-muted-foreground">
                {k}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
