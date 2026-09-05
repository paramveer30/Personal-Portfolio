import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  // computed once when the page builds, since this page is static and does not re-render per visit
  const year = new Date().getFullYear();

  return (
    <footer className="border-border bg-surface border-t">
      <div className="text-muted mx-auto flex max-w-[1080px] flex-col gap-6 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-text font-mono text-xs tracking-wider uppercase">
            Paramveer Multani
          </p>
          <p className="mt-1 text-xs">&copy; {year}. All rights reserved.</p>
        </div>

        <nav
          aria-label="Section"
          className="flex flex-wrap gap-4 font-mono text-xs tracking-wider uppercase"
        >
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 font-mono text-xs tracking-wider uppercase">
          <a
            href="https://github.com/paramveer30"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accent"
          >
            <GithubIcon />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent"
          >
            <LinkedinIcon />
          </a>
          <a href="/resume.pdf" className="hover:text-accent">
            Resume
          </a>
          {/* jumps back to the id="top" on main in page.tsx */}
          <a href="#top" className="hover:text-accent">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
