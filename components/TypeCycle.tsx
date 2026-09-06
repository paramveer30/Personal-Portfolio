"use client";

import { useEffect, useState } from "react";

interface TypeCycleProps {
  phrases: string[];
  className?: string;
}

// types a phrase out, holds, deletes it, moves to the next, forever
export function TypeCycle({ phrases, className = "" }: TypeCycleProps) {
  const [text, setText] = useState(phrases[0] ?? "");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const current = phrases[index] ?? "";
    let delay = deleting ? 32 : 55;
    if (!deleting && text === current) delay = 2000;
    if (deleting && text === "") delay = 260;

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText((prev) =>
          current.slice(0, deleting ? prev.length - 1 : prev.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="caret text-accent ml-0.5 font-normal" aria-hidden="true">
        |
      </span>
    </span>
  );
}
