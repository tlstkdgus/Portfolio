"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Vimeo background 모드(자동 재생 · 반복 · 무음 · 조작 없음) 영상.
// OS "동작 줄이기"를 켠 사람에게는 영상 대신 poster 이미지만 보여 준다. 서버 렌더와 첫 화면도 poster로 시작한다.
export function VimeoLoop({ id, ratio, poster, title }: { id: string; ratio: string; poster: string; title: string }) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPlay(!mq.matches);
    const on = () => setPlay(!mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-ink" style={{ aspectRatio: ratio }}>
      <Image src={poster} alt="" fill sizes="(max-width: 1200px) 100vw, 1152px" className="object-cover" />
      {play && (
        <iframe
          src={`https://player.vimeo.com/video/${id}?background=1&dnt=1`}
          title={title}
          loading="lazy"
          allow="autoplay; picture-in-picture"
          className="absolute inset-0 h-full w-full border-0"
        />
      )}
    </div>
  );
}
