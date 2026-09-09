import Image from "next/image";
import type { ReactNode } from "react";

// drawn marks for the places that have no logo worth showing, keyed by the icon field
const DRAWN_BADGES: Record<string, ReactNode> = {
  truck: (
    <>
      <path d="M2 6.5h11v9.5H2z" />
      <path d="M13 9.5h3.4l3.1 3.4V16H13z" />
      <circle cx="6.2" cy="18.2" r="1.9" />
      <circle cx="16.2" cy="18.2" r="1.9" />
      <path d="M2 18.2h2.3M8.1 18.2h6.2M18.1 18.2h1.4" />
    </>
  ),
};

interface LogoBadgeProps {
  src?: string;
  // a key into the drawn marks above, used when there is no image
  icon?: string;
  // used for the monogram fallback when there is neither
  name: string;
  className?: string;
}

// square identity tile that sits at the head of an experience or education entry
export function LogoBadge({ src, icon, name, className = "" }: LogoBadgeProps) {
  const drawn = icon ? DRAWN_BADGES[icon] : undefined;

  return (
    <span
      aria-hidden="true"
      className={`border-border bg-surface relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border transition-transform duration-300 group-hover:scale-105 ${className}`}
    >
      {src ? (
        // unoptimized skips the on-disk image cache, this machine is out of C: space
        <Image src={src} alt="" fill unoptimized sizes="48px" />
      ) : drawn ? (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
        >
          {drawn}
        </svg>
      ) : (
        <span className="text-accent font-mono text-xl font-bold">
          {name.charAt(0)}
        </span>
      )}
    </span>
  );
}
