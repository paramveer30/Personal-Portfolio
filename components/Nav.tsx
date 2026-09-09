"use client";

import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/content/site";

// nav items as plain data for now, moves into content/site.ts once section content exists
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  // which section the reader is currently in, drives the underline
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    // the band sits near the top of the viewport, so the active link flips
    // as a section's heading arrives rather than when its last pixel leaves
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const nearest = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );
        setActive(nearest.target.id);
      },
      { rootMargin: "-18% 0px -72% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    // sticky keeps this pinned once you scroll past it, z-50 keeps it above the page content
    <header className="border-border bg-bg/90 sticky top-0 z-50 border-b backdrop-blur">
      <div className="text-muted mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-4 font-mono text-xs tracking-wider uppercase">
        <a href="#top" className="text-text font-bold normal-case">
          {site.name}
        </a>

        <nav aria-label="Section" className="hidden gap-6 md:flex">
          {navLinks.map((link) => {
            const current = active === link.href.slice(1);
            return (
              // key has to be unique per item, react uses it to track list items
              <a
                key={link.href}
                href={link.href}
                aria-current={current ? "true" : undefined}
                className={`hover:text-accent relative transition-colors duration-200 ${
                  current ? "text-accent" : ""
                }`}
              >
                {link.label}
                {/* the underline slides open under whichever section you are in */}
                <span
                  aria-hidden="true"
                  className={`bg-accent absolute -bottom-1.5 left-0 h-px transition-all duration-300 ${
                    current ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* deliberately only two things here. availability lives in the hero and about,
            and the social links are a proper row in the hero, so the bar stays quiet */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={site.resumeUrl}
            className="bg-accent text-contrast hover:bg-accent-deep rounded-md px-4 py-2 font-sans text-xs font-medium normal-case transition-colors"
          >
            Resume
          </a>

          {/* hamburger, only shows below the md breakpoint where the inline nav is hidden */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="text-text hover:text-accent md:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile dropdown, closes when you tap a link */}
      {open && (
        <nav
          aria-label="Section"
          className="border-border text-muted flex flex-col gap-1 border-t px-6 py-3 font-mono text-xs tracking-wider uppercase md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-accent py-1.5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
