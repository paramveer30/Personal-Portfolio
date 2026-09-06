"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { MediaSlot } from "@/components/MediaSlot";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";
import { useReveal } from "@/hooks/useReveal";

// simple line marks stand in for the passions until real photos exist
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

function PassionIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      aria-hidden="true"
    >
      {PASSION_ICONS[name] ?? <circle cx="12" cy="12" r="8" />}
    </svg>
  );
}

interface PassionCardProps {
  passion: (typeof site.passions)[number];
  index: number;
  shown: boolean;
}

function PassionCard({ passion, index, shown }: PassionCardProps) {
  const [active, setActive] = useState(0);
  const count = passion.images.length;

  useEffect(() => {
    if (count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let interval = 0;
    // stagger the start so the cards do not all cross fade in lockstep
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setActive((a) => (a + 1) % count);
      }, 4500);
    }, index * 900);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [count, index]);

  return (
    <article
      style={{ transitionDelay: shown ? `${index * 80}ms` : "0ms" }}
      className={`group border-border bg-surface/60 hover:border-accent/40 relative flex flex-col overflow-hidden rounded-xl border transition-all duration-500 hover:-translate-y-1.5 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {count > 0 ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {passion.images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              unoptimized
              sizes="(max-width: 768px) 92vw, 380px"
              className={`object-cover transition-opacity duration-[1200ms] ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="from-surface/70 absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t to-transparent" />
          {count > 1 ? (
            <div className="absolute right-3 bottom-3 flex gap-1.5">
              {passion.images.map((src, i) => (
                <span
                  key={src}
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full ${
                    i === active ? "bg-accent" : "bg-accent/30"
                  }`}
                />
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <div className="flex aspect-[4/3] w-full items-center justify-center">
          <span
            style={{ animationDelay: `${index * 350}ms` }}
            className="idle-float bg-accent/10 text-accent flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
          >
            <PassionIcon name={passion.key} />
          </span>
        </div>
      )}

      <div className="p-7">
        <h3 className="text-text text-xl font-bold">{passion.title}</h3>
        {passion.blurb && passion.blurb !== "todo, one sentence" ? (
          <p className="text-muted mt-2 text-base leading-relaxed">
            {passion.blurb}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export function Journey() {
  // the section reveals itself so the cards can cascade in as it scrolls into view
  const { ref, shown } = useReveal<HTMLElement>();

  const rise = shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0";

  return (
    <section
      ref={ref}
      id="journey"
      className="border-border flex min-h-screen scroll-mt-20 flex-col border-t px-6 py-24 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col">
        <SectionHeading label="Journey">Outside of work</SectionHeading>

        <div className="mt-12 flex flex-1 flex-col gap-10 sm:mt-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.passions.map((passion, index) => (
              <PassionCard
                key={passion.key}
                passion={passion}
                index={index}
                shown={shown}
              />
            ))}
          </div>

          {/* quick favorites row, not resume material, just personality */}
          <div
            style={{ transitionDelay: shown ? "520ms" : "0ms" }}
            className={`border-border mt-auto grid gap-8 border-t pt-10 font-mono text-sm transition-all duration-500 sm:grid-cols-4 ${rise}`}
          >
            <div>
              <p className="text-muted tracking-wider uppercase">Rapper</p>
              <p className="text-text mt-1">{site.favorites.rapper}</p>
            </div>

            <div>
              <p className="text-muted tracking-wider uppercase">Movies</p>
              <div className="mt-2 flex gap-2">
                {site.favorites.movies.map((movie) => (
                  <div
                    key={movie.title}
                    className="flex flex-col items-center gap-1"
                  >
                    <MediaSlot
                      src={movie.posterUrl}
                      alt={movie.title}
                      label="poster"
                      className="aspect-[2/3] w-20"
                    />
                    <span className="text-muted text-center normal-case">
                      {movie.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-muted tracking-wider uppercase">
                Now spinning
              </p>
              <div className="mt-2 flex items-center gap-3">
                {site.favorites.albumArtUrl ? (
                  <MediaSlot
                    src={site.favorites.albumArtUrl}
                    alt={`${site.favorites.song} album art`}
                    label="art"
                    className="h-16 w-16 shrink-0"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="bg-accent/10 flex h-16 w-16 shrink-0 items-end justify-center gap-[3px] rounded-lg p-3"
                  >
                    {[0, 1, 2, 3].map((i) => (
                      <span
                        key={i}
                        style={{
                          animationDelay: `${i * 130}ms`,
                          animationDuration: `${720 + i * 110}ms`,
                        }}
                        className="eq-bar bg-accent h-full w-[3px] rounded-full"
                      />
                    ))}
                  </span>
                )}
                {site.favorites.songUrl ? (
                  <a
                    href={site.favorites.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent normal-case hover:underline"
                  >
                    {site.favorites.song}, {site.favorites.songArtist}
                  </a>
                ) : (
                  <p className="text-text normal-case">
                    {site.favorites.song}, {site.favorites.songArtist}
                  </p>
                )}
              </div>
            </div>

            <div>
              <p className="text-muted tracking-wider uppercase">UFC</p>
              <p className="text-text mt-1">{site.favorites.ufcFighter}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
