"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { label: "Email", href: `mailto:${profile.links.email}` },
  { label: "GitHub", href: profile.links.github },
  { label: "Blog", href: profile.links.blog },
  { label: "LinkedIn", href: profile.links.linkedin },
];

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="hero" className="pb-16 pt-32 md:pb-24 md:pt-44">
      <div className="mx-auto max-w-3xl px-6">
        <div className="relative mb-8 h-20 w-20 overflow-hidden rounded-full">
          <Image
            src="/profile.jpg"
            alt={t("name")}
            fill
            className="object-cover"
            sizes="80px"
            priority
          />
        </div>

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {t("name")}
        </h1>
        <p className="mt-3 text-xl font-medium text-foreground/90 md:text-2xl">
          {t("title")}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {t("subtitle")}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href="#projects"
            className="inline-flex items-center gap-1 font-semibold text-accent hover:underline underline-offset-4"
          >
            {t("cta_resume")}
            <ArrowDown className="h-3.5 w-3.5" />
          </a>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              {...(!href.startsWith("mailto:") && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-4"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
