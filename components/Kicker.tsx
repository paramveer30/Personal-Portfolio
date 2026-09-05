import type { ReactNode } from "react";

// small accent colored label used above a section heading, same style everywhere
export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-accent font-mono text-xs tracking-wider uppercase">
      {children}
    </p>
  );
}
