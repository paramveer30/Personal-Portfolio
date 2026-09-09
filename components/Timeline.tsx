import type { ReactNode } from "react";

// a dated ladder, one rail down the left with a ring per entry and the date to its side
export function TimelineList({ children }: { children: ReactNode }) {
  return <ol className="relative">{children}</ol>;
}

interface TimelineItemProps {
  index: number;
  start: string;
  end: string;
  children: ReactNode;
}

export function TimelineItem({
  index,
  start,
  end,
  children,
}: TimelineItemProps) {
  return (
    <li className="group relative grid gap-x-10 gap-y-4 pb-16 last:pb-0 md:grid-cols-[7rem_1fr] md:pl-12">
      {/* rail segment, stacks with the others into one continuous line */}
      <span
        aria-hidden="true"
        className="bg-border absolute top-3 bottom-0 left-2.5 hidden w-px md:block"
      />
      {/* the ring marker, picks up a halo as you hover the entry */}
      <span
        aria-hidden="true"
        className="border-accent bg-bg absolute top-1.5 left-2.5 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 transition-shadow duration-300 group-hover:shadow-[0_0_0_5px_color-mix(in_srgb,var(--accent)_16%,transparent)] md:block"
      />
      {/* oversized faint index */}
      <span
        aria-hidden="true"
        className="text-text/[0.05] pointer-events-none absolute -top-8 right-0 hidden text-[8rem] leading-none font-black select-none md:block"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* one line on mobile, stacked against the rail from md up */}
      <p className="text-muted font-mono text-xs tracking-wider uppercase md:pt-1 md:text-right">
        <span className="text-text/75">{start}</span>{" "}
        <span className="md:block">&mdash; {end}</span>
      </p>
      <div className="min-w-0">{children}</div>
    </li>
  );
}
