import type { ReactNode } from "react";

interface SectionHeadingProps {
  // one word, doubles as the small label and the oversized ghost word behind
  label: string;
  children: ReactNode;
}

// shared header for every section, kicker rule plus a big title over a faint ghost word
export function SectionHeading({ label, children }: SectionHeadingProps) {
  return (
    // isolate so the ghost word paints above the section surface but below the real text
    <div className="relative isolate">
      <span
        aria-hidden="true"
        className="text-text/[0.08] pointer-events-none absolute -top-20 -left-4 z-0 hidden text-[11rem] leading-none font-black tracking-tighter whitespace-nowrap select-none lg:block xl:text-[14rem]"
      >
        {label}
      </span>

      <p className="text-accent relative z-10 flex items-center gap-3 font-mono text-sm tracking-wider uppercase">
        <span aria-hidden="true" className="bg-accent h-px w-8 shrink-0" />
        {label}
      </p>

      <h2 className="text-text relative z-10 mt-4 text-[3.25rem] leading-[0.95] font-bold sm:text-[4.25rem] lg:text-[5.5rem]">
        {children}
        <span className="text-accent">.</span>
      </h2>

      <div className="bg-accent relative z-10 mt-6 h-1.5 w-20 rounded-full" />
    </div>
  );
}
