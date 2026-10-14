"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { MediaSlot } from "@/components/MediaSlot";
import type { ProjectImage } from "@/content/site";

interface ProjectGalleryProps {
  title: string;
  images: ProjectImage[];
}

// a swipe shorter than this is treated as a tap, not a change of photo
const SWIPE_PX = 40;

// one frame per project, changed only by the visitor: arrows, dots, arrow keys or a swipe
export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const count = images.length;

  if (count === 0) {
    return (
      <MediaSlot
        alt={`${title} screenshot`}
        label="screenshot"
        className="h-full w-full rounded-none"
      />
    );
  }

  const go = (next: number) => setIndex((next + count) % count);
  const caption = images[index]?.caption;

  return (
    <div className="flex flex-col gap-3">
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label={`${title} images`}
        tabIndex={count > 1 ? 0 : undefined}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") go(index + 1);
          if (event.key === "ArrowLeft") go(index - 1);
        }}
        onTouchStart={(event) => {
          touchX.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          const start = touchX.current;
          const end = event.changedTouches[0]?.clientX;
          touchX.current = null;
          if (start === null || end === undefined) return;
          if (end - start > SWIPE_PX) go(index - 1);
          if (start - end > SWIPE_PX) go(index + 1);
        }}
        className="group/gallery border-border bg-surface focus-visible:outline-accent relative aspect-[16/10] w-full overflow-hidden rounded-2xl border shadow-[0_0_70px_-45px_var(--accent)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_0_70px_-28px_var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {images.map((image, i) => (
          <div
            key={image.src}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              image.fit === "contain" ? "bg-white" : ""
            } ${i === index ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 92vw, 560px"
              className={
                image.fit === "contain"
                  ? "object-contain p-3"
                  : "object-cover object-top"
              }
            />
          </div>
        ))}

        {count > 1 ? (
          <>
            <GalleryArrow
              direction="prev"
              label={`Previous ${title} image`}
              onClick={() => go(index - 1)}
            />
            <GalleryArrow
              direction="next"
              label={`Next ${title} image`}
              onClick={() => go(index + 1)}
            />
            <span className="absolute top-3 right-3 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[11px] tracking-wider text-white">
              {index + 1} / {count}
            </span>
          </>
        ) : null}
      </div>

      {count > 1 || caption ? (
        <div className="flex items-center justify-between gap-4">
          <p
            aria-live="polite"
            className="text-muted min-h-[1.25rem] text-[13px] leading-snug"
          >
            {caption ?? ""}
          </p>
          {count > 1 ? (
            <div className="flex shrink-0 items-center gap-1.5">
              {images.map((image, i) => (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`Show image ${i + 1} of ${count}`}
                  aria-current={i === index}
                  onClick={() => go(i)}
                  className="flex h-6 items-center px-0.5"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      i === index
                        ? "bg-accent w-5"
                        : "bg-muted/40 hover:bg-muted w-1.5"
                    }`}
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function GalleryArrow({
  direction,
  label,
  onClick,
}: {
  direction: "prev" | "next";
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/75 focus-visible:opacity-100 md:opacity-0 md:group-hover/gallery:opacity-100 ${
        direction === "prev" ? "left-3" : "right-3"
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={direction === "prev" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
      </svg>
    </button>
  );
}
