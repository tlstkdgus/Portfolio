"use client";

import { useTranslations } from "next-intl";

// 소개 섹션은 'What I do'만 남는다. 사진·자기소개 문단은 히어로의 소개 화면으로,
// 학력·교육·자격증은 수상 섹션의 별도 블록으로 옮겼다 (2026-09-24).
export function About() {
  const t = useTranslations("about");
  const skills: string[] = t.raw("skills");

  return (
    <section id="about" className="gutter scroll-mt-16 py-24 md:py-36">
      {/* What I do — 레퍼런스 3번 슬라이드: 큰 질문 + 짧은 답 + 흩어진 키워드 */}
      <h2 className="display">{t("what_heading")}</h2>
      <ul className="mt-14 grid grid-cols-2 border-t border-foreground md:mt-20 md:grid-cols-3">
        {skills.map((s) => (
          <li
            key={s}
            className="border-b border-border py-4 pr-4 text-[17px] font-semibold tracking-[-0.01em] md:py-5 md:text-[20px]"
          >
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
