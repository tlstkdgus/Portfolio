"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
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
    <div className="relative overflow-hidden rounded-lg border border-border bg-muted/40">
      {/* Image — natural size, no cropping */}
      <div className="relative w-full">
        <Image
          key={current}
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          width={1280}
          height={720}
          className="h-auto w-full object-contain"
          unoptimized
        />
      </div>

      {/* Controls — only when multiple images */}
      {images.length > 1 && (
        <>
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-2 right-2 rounded-full bg-black/50 px-2 py-0.5 text-xs text-white backdrop-blur-sm">
            {current + 1} / {images.length}
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === current ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
