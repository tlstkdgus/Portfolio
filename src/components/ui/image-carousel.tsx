"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const isKo = useLocale() === "ko";
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  );

  if (images.length === 0) return null;

  return (
    <div
      className="relative overflow-hidden border border-border bg-muted"
      role="group"
      aria-roledescription="carousel"
      aria-label={alt}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
    >
      {/* Image — natural size, no cropping */}
      <div className="relative w-full">
        <Image
          key={current}
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          width={1280}
          height={720}
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Controls — only when multiple images */}
      {images.length > 1 && (
        <>
          {/* Prev */}
          <button
            onClick={prev}
            aria-label={isKo ? "이전 이미지" : "Previous image"}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center bg-black/75 text-white transition hover:bg-black"
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" />
          </button>

          {/* Next */}
          <button
            onClick={next}
            aria-label={isKo ? "다음 이미지" : "Next image"}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center bg-black/75 text-white transition hover:bg-black"
          >
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </button>

          {/* Counter */}
          {/* 흰 이미지 위에서도 대비가 나오도록 불투명도를 올렸다 (bg-black/50은 4.3:1 이하) */}
          <div aria-live="polite" className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-[13px] text-white">
            {current + 1} / {images.length}
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={isKo ? `${i + 1}번째 이미지` : `Image ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                className="group flex h-8 min-w-6 items-center justify-center"
              >
                {/* 보이는 점은 작게, 누르는 영역은 넓게 */}
                <span
                  className={cn(
                    "h-1.5 rounded-full shadow-[0_0_0_1px_rgb(0_0_0/0.35)] transition-all",
                    i === current ? "w-4 bg-white" : "w-1.5 bg-white/60 group-hover:bg-white/90"
                  )}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
