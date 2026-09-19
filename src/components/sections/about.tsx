"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { profile } from "@/data/profile";

export function About() {
  const t = useTranslations("about");
  const isKo = useLocale() === "ko";
  const skills: string[] = t.raw("skills");
  const edu = profile.education[0];

  return (
    <section id="about" className="gutter scroll-mt-16 py-24 md:py-36">
      {/* Hello — 레퍼런스 2번 슬라이드: 사진 + 큰 인사 + 작은 본문 */}
      <div className="grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
        {/* 원본(689×886) 비율 그대로 — 정사각 크롭은 머리·어깨가 잘린다 */}
        <div className="w-full max-w-90 self-center">
          <Image
            src="/profile.jpg"
            alt={isKo ? "신상현 프로필 사진" : "Portrait of Sanghyeon Shin"}
            width={689}
            height={886}
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, 360px"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="display">
            {t("hello")}
            <br />
            <span className="font-medium tracking-[-0.04em]">{t("name_line")}</span>
          </h2>
          <div className="mt-8 max-w-xl space-y-4 text-[15px] leading-[1.8] text-foreground/80">
            <p>{t("description_1")}</p>
            <p>{t("description_2")}</p>
          </div>

          <dl className="meta mt-8 grid max-w-xl gap-x-6 gap-y-2 border-t border-border pt-5 text-muted-foreground sm:grid-cols-[72px_1fr]">
            <dt className="font-bold text-foreground">{t("education_label")}</dt>
            <dd>
              {isKo ? edu.school : edu.schoolEn} · {edu.date}
              <br />
              {isKo ? edu.major : edu.majorEn} · {t("gpa")}
            </dd>
            <dt className="font-bold text-foreground">{t("military_label")}</dt>
            <dd>{isKo ? profile.military.ko : profile.military.en}</dd>
          </dl>
        </div>
      </div>

      {/* What I do — 레퍼런스 3번 슬라이드: 큰 질문 + 짧은 답 + 흩어진 키워드 */}
      <div className="mt-28 md:mt-40">
        <h2 className="display">{t("what_heading")}</h2>
        <p className="mt-6 max-w-lg text-[15px] leading-[1.8] text-muted-foreground">{t("what_sub")}</p>
        <ul className="mt-14 flex flex-wrap justify-between gap-x-10 gap-y-5 text-[15px] font-semibold md:mt-20 md:text-[17px]">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
