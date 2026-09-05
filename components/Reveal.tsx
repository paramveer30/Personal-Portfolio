"use client";

import type { ReactNode } from "react";

import { useReveal } from "@/hooks/useReveal";

// wraps a section so it fades and rises in the first time you scroll to it
// the global prefers-reduced-motion rule in globals.css makes this instant when motion is off
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
