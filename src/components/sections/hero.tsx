"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { m } from "framer-motion";
import { MetaRow } from "@/components/ui/meta-row";
import { Emph } from "@/components/ui/emph";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

// 첫 두 화면 (2026-09-24 상현 선택, B안):
// 1) 표지 — 흰 바탕 'Portfolio' 워드마크와 메타 줄만. 정보는 두지 않는다.
// 2) 소개 — 컬러 사진 · 포지셔닝 문장(h1) · 증거 문단 · 숫자 4개.
// 자기소개는 이 한 번뿐이다. 예전에는 히어로와 '안녕하세요' 섹션이 같은 이야기를 두 번 했다.
// 학력·교육·자격증은 수상 섹션의 별도 블록으로 옮겼다(첫 화면 글을 줄이기 위해).
// 흑백 사진·검은 표지는 영정사진처럼 보여 쓰지 않는다(상현 지적).
export function Hero() {
  return (
    <>
      <Cover />
      <Intro />
    </>
  );
}

function Cover() {
  const t = useTranslations("hero");
  const tm = useTranslations("meta");
  return (
    <section id="hero" className="gutter flex min-h-svh flex-col pb-8 pt-20 md:pt-24">
      <MetaRow items={[tm("deck"), t("name")]} className="text-muted-foreground" />
      <div className="flex flex-1 flex-col justify-end">
        <MetaRow
          items={[
            tm("role"),
            <a
              key="email"
              href={`mailto:${profile.links.email}`}
              className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
            >
              {profile.links.email}
            </a>,
            tm("location"),
          ]}
          className="mb-3 border-b border-foreground pb-3"
        />
        <m.p
          aria-hidden="true"
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="wordmark -ml-[0.04em]"
        >
          Portfolio
        </m.p>
      </div>
    </section>
  );
}

function Intro() {
  const t = useTranslations("hero");
  const isKo = useLocale() === "ko";
  const metrics: { v: string; k: string }[] = t.raw("metrics");

  return (
    <section id="intro" className="gutter flex flex-col justify-center pb-16 pt-20 md:min-h-svh md:pb-20 md:pt-24">
      <div className="grid items-end gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)] md:gap-12">
        {/* 원본(689×886) 비율 그대로, 컬러 */}
        <div className="w-32 md:w-full md:max-w-72">
          <Image
            src="/profile.jpg"
            alt={isKo ? "신상현 프로필 사진" : "Portrait of Sanghyeon Shin"}
            width={689}
            height={886}
            className="h-auto w-full"
            sizes="(max-width: 768px) 128px, 288px"
          />
        </div>
        <div>
          <h1
            className="whitespace-pre-line text-balance font-extrabold leading-[1.2] tracking-[-0.045em]"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 3.5rem)" }}
          >
            {t("lead")}
          </h1>
          <p className="mt-6 max-w-3xl text-[17px] leading-[1.7] text-foreground/80 md:text-[19px]">
            <Emph text={t("summary")} />
          </p>
        </div>
      </div>

      <dl className="mt-12 grid grid-cols-2 border-t border-foreground md:mt-16 md:grid-cols-4">
        {metrics.map(({ v, k }, i) => (
          <div
            key={k}
            className={cn(
              "border-border pb-2 pt-5",
              i % 2 === 1 ? "border-l pl-4" : "pr-4",
              i >= 2 && "border-t md:border-t-0",
              i > 0 ? "md:border-l md:px-8" : "md:pr-8"
            )}
          >
            <dd className="text-[30px] font-extrabold leading-none tracking-[-0.05em] md:text-[clamp(2rem,3.2vw,3rem)]">{v}</dd>
            <dt className="mt-2 text-[14px] font-medium leading-snug text-muted-foreground md:text-[15px]">{k}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
