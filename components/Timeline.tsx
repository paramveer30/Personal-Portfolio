import type { ReactNode } from "react";

// a dated ladder, one rail down the left with a dot per entry and the date to its side
export function TimelineList({ children }: { children: ReactNode }) {
  return <ol className="relative">{children}</ol>;
}

interface TimelineItemProps {
  index: number;
  dateRange: string;
  children: ReactNode;
}

export function TimelineItem({
  index,
  dateRange,
  children,
}: TimelineItemProps) {
  return (
    <li className="relative grid gap-x-8 gap-y-3 pb-16 last:pb-0 md:grid-cols-[6rem_1fr] md:pl-10">
      {/* rail segment, stacks with the others into one continuous line */}
      <span
        aria-hidden="true"
        className="bg-border absolute top-2 bottom-0 left-2 hidden w-px last:bottom-16 md:block"
      />
      {/* the marker */}
      <span
        aria-hidden="true"
        className="border-accent bg-bg absolute top-1.5 left-2 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 md:block"
      />
      {/* oversized faint index */}
      <span
        aria-hidden="true"
        className="text-text/[0.06] pointer-events-none absolute -top-6 right-0 hidden text-[7rem] leading-none font-black select-none md:block"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <p className="text-muted font-mono text-xs tracking-wider uppercase md:pt-0.5 md:text-right">
        {dateRange}
      </p>
      <div className="min-w-0">{children}</div>
    </li>
  );
}
