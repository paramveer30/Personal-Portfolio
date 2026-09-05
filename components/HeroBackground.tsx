// sits behind the hero content, animation classes live in globals.css
export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-dots absolute inset-0" />

      {/* two faint concentric rings, roughly behind where the portrait sits */}
      <svg
        className="hero-ring absolute top-1/2 -left-48 h-[680px] w-[680px]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle
          cx="100"
          cy="100"
          r="96"
          stroke="var(--color-accent)"
          strokeWidth="0.5"
          opacity="0.12"
        />
        <circle
          cx="100"
          cy="100"
          r="68"
          stroke="var(--color-accent)"
          strokeWidth="0.4"
          strokeDasharray="2 7"
          opacity="0.1"
        />
      </svg>
    </div>
  );
}
