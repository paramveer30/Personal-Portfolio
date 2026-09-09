"use client";

import { MediaSlot } from "@/components/MediaSlot";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";
import { useReveal } from "@/hooks/useReveal";

// the two short takes, sharing one row at the foot of the panel
const TAKES = [
  { label: "My approach", body: site.about.approach },
  { label: "What I do", body: site.about.whatIDo },
];

interface FactProps {
  label: string;
  value: string;
  // draws the small live dot beside the value, used for the availability row
  live?: boolean;
}

function Fact({ label, value, live = false }: FactProps) {
  return (
    <div className="border-border flex items-baseline justify-between gap-5 border-b py-3 last:border-b-0">
      <span className="text-muted shrink-0 font-mono text-[11px] tracking-[0.18em] uppercase">
        {label}
      </span>
      <span className="text-text flex items-center gap-2 text-right text-sm">
        {live ? (
          <span
            aria-hidden="true"
            className="bg-accent live-dot h-1.5 w-1.5 shrink-0 rounded-full"
          />
        ) : null}
        {value}
      </span>
    </div>
  );
}

export function About() {
  // the section drives its own reveal so the panel and the photo can arrive a beat apart
  const { ref, shown } = useReveal<HTMLElement>();

  const rise = shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0";
  const delay = (ms: number) => ({
    transitionDelay: shown ? `${ms}ms` : "0ms",
  });

  return (
    <section
      ref={ref}
      id="about"
      className="border-border relative flex min-h-screen scroll-mt-20 flex-col border-t px-6 py-24 lg:py-28"
    >
      {/* one warm pool under the whole section, the only glow in here */}
      <div
        aria-hidden="true"
        className="about-glow pointer-events-none absolute inset-x-0 top-1/4 bottom-0 -z-10"
      />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col">
        <SectionHeading label="About">A bit about me</SectionHeading>

        {/* body fills the leftover height and centres itself so the section never looks empty */}
        <div className="mt-12 grid flex-1 content-center gap-8 sm:mt-16 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
          {/* everything written lives in one panel, no nested cards */}
          <div
            style={delay(60)}
            className={`border-border bg-surface/55 rounded-2xl border p-8 shadow-[0_0_90px_-50px_var(--accent)] transition-all duration-700 sm:p-10 ${rise}`}
          >
            <div className="flex flex-col gap-5">
              {site.bio.map((paragraph, index) =>
                index === 0 ? (
                  // lead paragraph carries the one accent gesture in the section
                  <p
                    key={paragraph}
                    className="border-accent/50 text-text border-l-2 pl-5 text-xl leading-relaxed sm:text-[1.3rem]"
                  >
                    {paragraph}
                  </p>
                ) : (
                  // still body copy, but this is prose to be read, not a caption
                  <p
                    key={paragraph}
                    className="text-text/90 text-lg leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ),
              )}
            </div>

            <div className="border-border mt-8 grid gap-7 border-t pt-8 sm:grid-cols-2">
              {TAKES.map((take) => (
                <div key={take.label}>
                  <h3 className="text-accent font-mono text-sm tracking-wider uppercase">
                    {take.label}
                  </h3>
                  <p className="text-muted mt-2 text-base leading-relaxed">
                    {take.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* photo, then the plain facts underneath it */}
          <aside
            style={delay(200)}
            className={`flex flex-col gap-6 transition-all duration-700 ${rise}`}
          >
            <div className="border-border relative overflow-hidden rounded-2xl border shadow-[0_0_80px_-45px_var(--accent)]">
              <MediaSlot
                src={site.aboutImageUrl}
                alt={site.name}
                label="photo"
                className="aspect-[4/5] w-full rounded-none"
              />
            </div>

            <div className="flex flex-col">
              <Fact label="Studying" value={site.role} />
              <Fact label="Based in" value={site.location} />
              <Fact label="Status" value={site.availability} live />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
