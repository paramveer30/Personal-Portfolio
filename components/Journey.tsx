"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";

import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";
import { useReveal } from "@/hooks/useReveal";

// simple line marks stand in for a passion with no photos on file
const PASSION_ICONS: Record<string, ReactNode> = {
  basketball: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18" />
      <path d="M5.6 5.6c4 3.5 4 9.3 0 12.8M18.4 5.6c-4 3.5-4 9.3 0 12.8" />
    </>
  ),
  travel: (
    <>
      <path d="M21.5 3.5 2.5 10.5l7 2.5 2.5 7 9.5-16.5Z" />
      <path d="M9.5 13 21.5 3.5" />
    </>
  ),
  cars: (
    <>
      <path d="M4 12l1.6-4.2A2 2 0 0 1 7.5 6.5h9A2 2 0 0 1 18.4 7.8L20 12" />
      <path d="M3 12h18v4.5H3z" />
      <circle cx="7.5" cy="16.5" r="1.7" />
      <circle cx="16.5" cy="16.5" r="1.7" />
    </>
  ),
  music: (
    <>
      <path d="M9 17V4l10-2v13" />
      <circle cx="6.5" cy="17" r="2.5" />
      <circle cx="16.5" cy="15" r="2.5" />
    </>
  ),
  outdoors: (
    <>
      <path d="M3 19h18" />
      <path d="M4 19l6-11 4 7 2-3 4 7" />
      <circle cx="7.5" cy="6" r="1.4" />
    </>
  ),
  food: (
    <>
      <path d="M7 3v6a2 2 0 0 0 4 0V3" />
      <path d="M9 11v10" />
      <path d="M16 3c-1.7 0-2.8 2-2.8 5s1.1 4 2.8 4v9" />
    </>
  ),
};

function PassionIcon({ name, className }: { name: string; className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PASSION_ICONS[name] ?? <circle cx="12" cy="12" r="8" />}
    </svg>
  );
}

type Passion = (typeof site.passions)[number];

// the stacked photos behind a panel, only the frame index shows through
function PassionPhotos({
  passion,
  frame,
  sizes,
  kenBurns = false,
}: {
  passion: Passion;
  frame: number;
  sizes: string;
  kenBurns?: boolean;
}) {
  if (passion.images.length === 0) {
    return (
      <div className="bg-accent/[0.07] text-accent/70 absolute inset-0 flex items-center justify-center">
        <PassionIcon name={passion.key} className="idle-float h-14 w-14" />
      </div>
    );
  }

  return (
    <>
      {passion.images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes={sizes}
          className={`object-cover transition-opacity duration-1000 ${
            kenBurns ? "ken-burns" : ""
          } ${i === frame ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </>
  );
}

// clickable dots plus the n of total counter shown on an open panel
function FrameDots({
  passion,
  frame,
  onPick,
}: {
  passion: Passion;
  frame: number;
  onPick: (index: number) => void;
}) {
  if (passion.images.length < 2) return null;

  return (
    <span className="flex shrink-0 items-center gap-3">
      <span className="flex gap-0.5">
        {passion.images.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`${passion.title} photo ${i + 1} of ${passion.images.length}`}
            aria-current={i === frame}
            onClick={() => onPick(i)}
            className="flex h-6 items-center px-0.5"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                i === frame
                  ? "bg-accent w-5"
                  : "bg-muted/40 hover:bg-muted w-1.5"
              }`}
            />
          </button>
        ))}
      </span>
      <span
        aria-hidden="true"
        className="text-muted font-mono text-[11px] tracking-wider"
      >
        {frame + 1} / {passion.images.length}
      </span>
    </span>
  );
}

// the left and right arrows laid over an open panel's photo
function PhotoArrows({
  passion,
  onStep,
}: {
  passion: Passion;
  onStep: (delta: number) => void;
}) {
  if (passion.images.length < 2) return null;

  const arrow = (delta: number, label: string, path: string, side: string) => (
    <button
      type="button"
      aria-label={label}
      onClick={(event) => {
        event.stopPropagation();
        onStep(delta);
      }}
      className={`absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75 ${side}`}
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
        <path d={path} />
      </svg>
    </button>
  );

  return (
    <>
      {arrow(
        -1,
        `Previous ${passion.title} photo`,
        "M15 18l-6-6 6-6",
        "left-4",
      )}
      {arrow(1, `Next ${passion.title} photo`, "M9 18l6-6-6-6", "right-4")}
    </>
  );
}

export function Journey() {
  // the section reveals itself so the accordion can rise in as it scrolls into view
  const { ref, shown } = useReveal<HTMLElement>();

  // which passion is expanded, and which of its photos is showing
  const [active, setActive] = useState(0);
  const [frame, setFrame] = useState(0);
  // mobile is an accordion of its own, null means everything is closed
  const [openKey, setOpenKey] = useState<string | null>(null);

  // opening a panel always starts it on the first photo, done here rather than in an
  // effect so changing panels is one render instead of a cascading second one
  const openPanel = (index: number) => {
    setActive(index);
    setFrame(0);
  };

  // photos only change when the visitor asks, never on a timer
  const step = (delta: number) => {
    const count = site.passions[active]?.images.length ?? 0;
    if (count < 2) return;
    setFrame((f) => (f + delta + count) % count);
  };

  const rise = shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0";

  return (
    <section
      ref={ref}
      id="journey"
      className="border-border flex min-h-screen scroll-mt-20 flex-col border-t px-6 py-24 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col">
        <SectionHeading label="Journey">Outside of school</SectionHeading>

        <div className="mt-12 flex flex-1 flex-col gap-10 sm:mt-16">
          {/* desktop, hovering a slat opens it and squeezes the rest into labelled strips */}
          <div
            className={`hidden h-[clamp(340px,56vh,460px)] gap-3 transition-all duration-700 md:flex ${rise}`}
          >
            {site.passions.map((passion, index) => {
              const open = index === active;
              return (
                <div
                  key={passion.key}
                  onMouseEnter={() => {
                    if (!open) openPanel(index);
                  }}
                  className={`group bg-surface relative overflow-hidden rounded-2xl border text-left transition-[flex-grow,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open
                      ? "border-accent/50 flex-[5] shadow-[0_0_60px_-25px_var(--accent)]"
                      : "border-border hover:border-accent/40 flex-[1] cursor-pointer"
                  }`}
                >
                  <PassionPhotos
                    passion={passion}
                    frame={open ? frame : 0}
                    sizes={open ? "60vw" : "12vw"}
                    kenBurns={open}
                  />

                  {/* closed panels stay dimmed so the vertical label reads, open ones clear
                      right off the photo so there is actually something to look at */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 transition-all duration-500 ${
                      open
                        ? "bg-black/0"
                        : "bg-black/55 group-hover:bg-black/40"
                    }`}
                  />

                  {/* closed, the title runs up the slat, and the whole slat is the button that opens it */}
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-label={passion.title}
                    tabIndex={open ? -1 : 0}
                    onFocus={() => {
                      if (!open) openPanel(index);
                    }}
                    onClick={() => openPanel(index)}
                    className={`focus-visible:outline-accent absolute inset-0 flex items-center justify-center rounded-2xl transition-opacity duration-300 focus-visible:outline-2 focus-visible:-outline-offset-2 ${
                      open ? "pointer-events-none opacity-0" : "opacity-100"
                    }`}
                  >
                    <span className="rotate-180 font-mono text-sm tracking-[0.25em] whitespace-nowrap text-white uppercase [writing-mode:vertical-rl]">
                      {passion.title}
                    </span>
                  </button>

                  {open ? (
                    <PhotoArrows passion={passion} onStep={step} />
                  ) : null}

                  {/* open, the caption sits under the photo the way a post does */}
                  <span
                    className={`border-border bg-surface/95 absolute inset-x-0 bottom-0 block border-t px-6 py-5 backdrop-blur-sm transition-all duration-500 ${
                      open
                        ? "translate-y-0 opacity-100 delay-150"
                        : "pointer-events-none translate-y-full opacity-0"
                    }`}
                  >
                    <span className="flex items-baseline justify-between gap-4">
                      <span className="text-text text-lg font-bold">
                        {passion.title}
                      </span>
                      <FrameDots
                        passion={passion}
                        frame={frame}
                        onPick={setFrame}
                      />
                    </span>
                    <span className="text-muted mt-1.5 block max-w-xl text-[15px] leading-relaxed">
                      {passion.blurb}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>

          {/* mobile, the same thing as a tap to open stack */}
          <div
            className={`flex flex-col gap-3 transition-all duration-700 md:hidden ${rise}`}
          >
            {site.passions.map((passion, index) => {
              const open = openKey === passion.key;
              const panelId = `passion-${passion.key}`;
              return (
                <div
                  key={passion.key}
                  className={`bg-surface overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    open ? "border-accent/50" : "border-border"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => {
                      setOpenKey(open ? null : passion.key);
                      openPanel(index);
                    }}
                    className="relative flex h-24 w-full items-center justify-between px-6 text-left"
                  >
                    <PassionPhotos passion={passion} frame={0} sizes="100vw" />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-black/55"
                    />
                    <span className="relative font-mono text-sm tracking-[0.2em] text-white uppercase">
                      {passion.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`relative text-white transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* grid rows trick animates the height without a fixed value */}
                  <div
                    id={panelId}
                    className={`grid transition-all duration-500 ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pt-5 pb-6">
                        {passion.images.length > 0 ? (
                          <div className="relative mb-3 aspect-[16/10] w-full overflow-hidden rounded-xl">
                            <PassionPhotos
                              passion={passion}
                              frame={index === active && open ? frame : 0}
                              sizes="92vw"
                            />
                            {index === active && open ? (
                              <PhotoArrows passion={passion} onStep={step} />
                            ) : null}
                          </div>
                        ) : null}
                        {index === active && open ? (
                          <div className="mb-3 flex justify-end">
                            <FrameDots
                              passion={passion}
                              frame={frame}
                              onPick={setFrame}
                            />
                          </div>
                        ) : null}
                        <p className="text-muted text-[15px] leading-relaxed">
                          {passion.blurb}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* quick favorites row, not resume material, just personality */}
          {/* every tile is the same square so the row reads as one set, not a collage */}
          <div
            style={{ transitionDelay: shown ? "300ms" : "0ms" }}
            className={`border-border mt-auto border-t pt-10 transition-all duration-500 ${rise}`}
          >
            <p className="text-muted font-mono text-[11px] tracking-[0.18em] uppercase">
              A few favourites
            </p>

            <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {site.favorites.map((favorite) => (
                <li key={`${favorite.label}-${favorite.title}`}>
                  <div className="border-border bg-surface hover:border-accent/50 relative aspect-square w-full overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_-20px_var(--accent)]">
                    <Image
                      src={favorite.imageUrl}
                      alt={favorite.title}
                      fill
                      sizes="(max-width: 640px) 44vw, (max-width: 1024px) 28vw, 200px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-muted mt-2.5 font-mono text-[10px] tracking-[0.18em] uppercase">
                    {favorite.label}
                  </p>
                  <p className="text-text truncate text-sm font-medium">
                    {favorite.title}
                  </p>
                  {favorite.meta ? (
                    <p className="text-muted truncate text-xs">
                      {favorite.meta}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
