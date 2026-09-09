import type { ReactNode } from "react";

import { BRAND_PATHS } from "@/components/skillBrandPaths";

// the rest of the stack has no logo of its own, so these are drawn to match
// stroked rather than filled, which reads at the same weight once they are 14px and one colour
const DRAWN_ICONS: Record<string, ReactNode> = {
  MATLAB: (
    <>
      <path d="M4 4v16h16" />
      <path d="M6.5 17c2-1 2.5-8 4.5-8s2 5 4 5 2-3 3.5-3" />
    </>
  ),
  ExcelJS: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="1.5" />
      <path d="M3.5 9.5h17M3.5 14.5h17M9.5 5v14M15 5v14" />
    </>
  ),
  WebSockets: (
    <>
      <path d="M3 9h13M13 6l3 3-3 3" />
      <path d="M21 15H8M11 12l-3 3 3 3" />
    </>
  ),
  "VS Code": (
    <>
      <path d="M8.5 7 4 12l4.5 5M15.5 7l4.5 5-4.5 5M13.8 4.5l-3.6 15" />
    </>
  ),
  "PCB Diagnostics": (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 8h3.5v3.5H8zM15 8.5v7M11.5 15.5H15" />
      <circle cx="15" cy="7.4" r="0.9" />
    </>
  ),
  Soldering: (
    <>
      <path d="M20.5 3.5 14 10" />
      <path d="M14 10l-2.5 2.5 2 2L16 12z" />
      <path d="M11.5 14.5 7 19" />
      <circle cx="5.4" cy="20.4" r="1.1" />
    </>
  ),
  "Multimeter Testing": (
    <>
      <rect x="4" y="4" width="11" height="16" rx="2" />
      <path d="M7 8h5" />
      <circle cx="9.5" cy="14.5" r="2.5" />
      <path d="M9.5 14.5 11 13" />
      <path d="M18 7c2 1.6 2 7.4 0 10" />
    </>
  ),
  MSP432E401Y: (
    <>
      <rect x="7" y="6" width="10" height="12" rx="1" />
      <path d="M7 9H4M7 12H4M7 15H4M17 9h3M17 12h3M17 15h3" />
      <circle cx="9.4" cy="8.4" r="0.7" />
    </>
  ),
  "VL53L1X ToF": (
    <>
      <rect x="3.5" y="8" width="6" height="8" rx="1" />
      <path d="M13 8.5a5.5 5.5 0 0 1 0 7M17 6a9.5 9.5 0 0 1 0 12" />
    </>
  ),
  Quanser: (
    <>
      <path d="M3.5 20h6" />
      <path d="M6.5 20v-4.5l5.5-4 5 2.5" />
      <circle cx="6.5" cy="15.5" r="1.4" />
      <circle cx="12" cy="11.5" r="1.4" />
      <path d="M17 14l2.6-1.6" />
    </>
  ),
  "Digilent Analog Discovery": (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M6 14c1.5 0 1.5-4 3-4s1.5 6 3 6 1.5-4 3-4 1.2 2 2.5 2" />
    </>
  ),
  "3D Printing (Prusa)": (
    <>
      <path d="M9 4h6v4.5l-3 3-3-3z" />
      <path d="M5 16.5h14M5 20h14" />
    </>
  ),
};

interface SkillIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function SkillIcon({ name, size = 14, className }: SkillIconProps) {
  const brand = BRAND_PATHS[name];

  if (brand) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={className}
      >
        <path d={brand} />
      </svg>
    );
  }

  const drawn = DRAWN_ICONS[name];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {/* anything without a mark of its own still gets a placeholder so the row stays even */}
      {drawn ?? <circle cx="12" cy="12" r="7" />}
    </svg>
  );
}
