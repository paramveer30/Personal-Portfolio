"use client";

import { useState } from "react";

import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { site } from "@/content/site";

// nav items as plain data for now, moves into content/site.ts once section content exists
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    // sticky keeps this pinned once you scroll past it, z-50 keeps it above the page content
    <header className="border-border bg-bg/90 sticky top-0 z-50 border-b backdrop-blur">
      <div className="text-muted mx-auto flex max-w-[1080px] items-center justify-between gap-6 px-6 py-4 font-mono text-xs tracking-wider uppercase">
        <a href="#top" className="text-text font-bold normal-case">
          {site.name}
        </a>

        <nav aria-label="Section" className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            // key has to be unique per item, react uses it to track list items
            <a key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 sm:flex">
            {/* box-shadow is a soft red glow, same treatment as the hero */}
            <span
              className="bg-accent h-1.5 w-1.5 rounded-full shadow-[0_0_5px_0_var(--accent)]"
              aria-hidden="true"
            />
            {site.availability}
          </div>
          <a
            href={site.contact.github}
            target="_blank"
            // noopener stops the new tab getting a handle back to this page, noreferrer hides this url from the destination site
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text hover:text-accent"
          >
            <GithubIcon />
          </a>
          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text hover:text-accent"
          >
            <LinkedinIcon />
          </a>
          <a
            href={site.resumeUrl}
            className="bg-accent text-contrast rounded-md px-4 py-2 font-sans text-xs font-medium normal-case"
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
