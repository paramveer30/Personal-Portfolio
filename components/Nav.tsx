import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

// nav items as plain data for now, moves into content/site.ts once that exists
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    // sticky keeps this pinned once you scroll past it, z-50 keeps it above the page content
    <header className="border-border bg-bg/90 sticky top-0 z-50 border-b backdrop-blur">
      <div className="text-muted mx-auto flex max-w-[1080px] items-center justify-between gap-6 px-6 py-4 font-mono text-xs tracking-wider uppercase">
        <a href="#top" className="text-text font-bold normal-case">
          Paramveer Multani
        </a>

        {/* hidden on mobile until there is a real mobile menu */}
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
            <span
              className="bg-accent h-1.5 w-1.5 rounded-full"
              aria-hidden="true"
            />
            Open to connecting
          </div>
          <a
            href="https://github.com/paramveer30"
            target="_blank"
            // noopener stops the new tab getting a handle back to this page, noreferrer hides this url from the destination site
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text hover:text-accent"
          >
            <GithubIcon />
          </a>
          <a
            // placeholder until there is a real linkedin url
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text hover:text-accent"
          >
            <LinkedinIcon />
          </a>
          <a
            // resume file does not exist in public/ yet
            href="/resume.pdf"
            className="bg-accent text-text rounded-md px-4 py-2 font-sans text-xs font-medium normal-case"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
