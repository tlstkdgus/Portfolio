"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { awards, certifications } from "@/data/credentials";
import { profile } from "@/data/profile";

export function Credentials() {
  const t = useTranslations("certified");
  const isKo = useLocale() === "ko";
  const top = awards.filter((a) => a.highlight);
  const rest = awards.filter((a) => !a.highlight);
  const edu = profile.education[0];
  // "2020.03. ~ 2026.02." → "2020.03 – 2026.02"
  const dash = (v: string) => v.replace(/\.(?=\s|$)/g, "").replace(/ ~ /g, " – ");

  return (
    <section id="certified" className="gutter scroll-mt-16 border-t border-foreground py-24 md:py-36">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="display">{t("heading")}</h2>
          {/* 수상 횟수를 숫자 하나로 — 레퍼런스의 대형 수치 슬라이드 */}
          <p className="stat mt-10 text-accent">{awards.length}</p>
          <p className="meta mt-2 text-muted-foreground">{t("count_label")}</p>
        </div>

        <div>
          <ol className="border-t border-foreground">
            {top.map((a) => (
              <li
                key={a.title}
                className="grid gap-x-6 gap-y-1 border-b border-border py-6 sm:grid-cols-[100px_1fr_auto]"
              >
                <span className="meta pt-1.5 text-muted-foreground">{a.date}</span>
                <span>
                  <span className="block text-[20px] font-bold leading-snug tracking-[-0.02em] md:text-[22px]">
                    {isKo ? a.title : a.titleEn}
                  </span>
                  <span className="mt-1 block text-[15px] text-muted-foreground">
                    {isKo ? a.issuer : a.issuerEn}
                  </span>
                </span>
                {/* 상장 스캔 — 있을 때만. 누르면 원본이 새 창에 열린다 */}
                {a.image && (
                  <a
                    href={a.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block h-24 w-[72px] overflow-hidden border border-border bg-muted sm:justify-self-end"
                    aria-label={`${isKo ? a.title : a.titleEn} — ${isKo ? "상장 보기 (새 창)" : "view certificate (new tab)"}`}
                  >
                    <Image src={a.image} alt="" fill sizes="72px" className="object-cover transition-transform group-hover:scale-105" />
                  </a>
                )}
              </li>
            ))}
          </ol>

          <ul className="mt-2">
            {rest.map((a) => (
              <li
                key={a.title}
                className="grid gap-x-6 border-b border-border py-3 text-[15px] sm:grid-cols-[100px_1fr]"
              >
                <span className="meta pt-0.5 text-muted-foreground">{a.date}</span>
                <span className="text-foreground/80">{isKo ? a.title : a.titleEn}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* 학력·교육·자격증 — 소개 화면 숫자 아래 작은 한 줄이면 안 보여서, 수상과 같은 무게의 블록으로 뗐다 (2026-09-24 상현 요청) */}
      <div className="mt-20 grid gap-8 border-t border-foreground pt-10 md:mt-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <h2 className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.04em] md:text-[48px]">{t("edu_heading")}</h2>
        <ul className="border-t border-foreground lg:border-t-0">
          <Row label={t("edu_label")} date={dash(edu.date)}>
            <Name>{isKo ? edu.school : edu.schoolEn}</Name>
            <Detail>
              {isKo ? edu.major : edu.majorEn} · {t("gpa")} · {isKo ? edu.degree : edu.degreeEn}
            </Detail>
          </Row>
          <Row label={t("training_label")} date={t("training_date")}>
            <Name>{t("training_title")}</Name>
            <Detail>{t("training_detail")}</Detail>
          </Row>
          {certifications.map((c, i) => (
            <Row key={c.name} label={i === 0 ? t("cert_label") : ""} date={c.date.replace(/\.$/, "")}>
              <Name>{isKo ? c.name : c.nameEn}</Name>
              <Detail>{isKo ? c.issuer : c.issuerEn}</Detail>
            </Row>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Row({ label, date, children }: { label: string; date: string; children: React.ReactNode }) {
  return (
    <li className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 border-b border-border py-5 sm:grid-cols-[88px_1fr_auto]">
      <span className="eyebrow col-span-2 text-muted-foreground sm:col-span-1 sm:pt-1.5">{label}</span>
      <span className="min-w-0">{children}</span>
      <span className="meta whitespace-nowrap pt-1.5 text-muted-foreground">{date}</span>
    </li>
  );
}

function Name({ children }: { children: React.ReactNode }) {
  return <span className="block text-[18px] font-bold leading-snug tracking-[-0.02em] md:text-[20px]">{children}</span>;
}

function Detail({ children }: { children: React.ReactNode }) {
  return <span className="mt-1 block text-[15px] leading-[1.6] text-muted-foreground">{children}</span>;
}
