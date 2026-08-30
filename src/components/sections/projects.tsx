"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, ExternalLink, Github, GitCommitHorizontal } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImageCarousel } from "@/components/ui/image-carousel";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

function Block({ label, items }: { label: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <div>
      <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </h4>
      <ul className="space-y-1.5 text-[15px] leading-relaxed text-foreground/85">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true" className="select-none text-muted-foreground">
              –
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectLinks({ p, isKo }: { p: Project; isKo: boolean }) {
  const cls =
    "inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent hover:underline underline-offset-4";
  if (!p.url && !p.repo && !p.commitsUrl) return null;
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      {p.url && (
        <a href={p.url} target="_blank" rel="noopener noreferrer" className={cls}>
          <ExternalLink className="h-3.5 w-3.5" /> Live
        </a>
      )}
      {p.repo && (
        <a href={p.repo} target="_blank" rel="noopener noreferrer" className={cls}>
          <Github className="h-3.5 w-3.5" /> GitHub
        </a>
      )}
      {p.commitsUrl && (
        <a href={p.commitsUrl} target="_blank" rel="noopener noreferrer" className={cls}>
          <GitCommitHorizontal className="h-3.5 w-3.5" />
          {isKo ? "내 커밋" : "My commits"}
        </a>
      )}
    </div>
  );
}

export function Projects() {
  const t = useTranslations("projects");
  const tc = useTranslations("common");
  const locale = useLocale();
  const isKo = locale === "ko";

  const meta = (p: Project) =>
    [isKo ? p.period : p.periodEn, (isKo ? p.roles : p.rolesEn)?.join(" · ")]
      .filter(Boolean)
      .join("  ·  ");

  return (
    <section id="projects" className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading>{t("heading")}</SectionHeading>

        <div className="divide-y divide-border">
          {featured.map((p) => (
            <article key={p.title} className="py-10 first:pt-0">
              <h3 className="text-xl font-bold tracking-tight">
                {isKo ? p.title : p.titleEn}
                <span className="font-normal text-muted-foreground">
                  {" — "}
                  {isKo ? p.subtitle : p.subtitleEn}
                </span>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{meta(p)}</p>
              {p.stats?.length ? (
                <p className="mt-2 text-sm font-medium text-accent">
                  {p.stats
                    .map((s) => `${isKo ? s.label : s.labelEn ?? s.label} ${s.value}`)
                    .join("  ·  ")}
                </p>
              ) : null}

              {p.images?.length ? (
                <div className="mt-5">
                  <ImageCarousel images={p.images} alt={p.title} />
                </div>
              ) : null}

              <div className="mt-6 space-y-5">
                <Block label={tc("goal")} items={isKo ? p.goals : p.goalsEn} />
                <Block label={tc("content")} items={isKo ? p.contents : p.contentsEn} />
                <Block label={tc("decision")} items={isKo ? p.decisions : p.decisionsEn} />
                <Block label={tc("result")} items={isKo ? p.results : p.resultsEn} />
              </div>

              <div className="mt-6 space-y-3">
                <ProjectLinks p={p} isKo={isKo} />
                <p className="text-xs text-muted-foreground">{p.tags.join(" · ")}</p>
              </div>
            </article>
          ))}
        </div>

        <h3 className="mb-2 mt-12 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {t("others_label")}
        </h3>
        <ul className="divide-y divide-border">
          {others.map((p) => (
            <li key={p.title} className="flex items-baseline justify-between gap-4 py-3">
              <div className="min-w-0">
                <p className="text-[15px]">
                  <span className="font-semibold">{isKo ? p.title : p.titleEn}</span>
                  <span className="text-muted-foreground">
                    {" — "}
                    {isKo ? p.subtitle : p.subtitleEn}
                  </span>
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">{meta(p)}</p>
              </div>
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} GitHub`}
                  className="shrink-0 text-muted-foreground hover:text-accent"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
            </li>
          ))}
        </ul>

        <Link
          href={`/${locale}/career`}
          className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline underline-offset-4"
        >
          {t("detail_link")}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
