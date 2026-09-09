import Link from "next/link";

import { site } from "@/content/site";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="page-aura" aria-hidden="true" />

      <p className="text-accent flex items-center gap-3 font-mono text-sm tracking-wider uppercase">
        <span aria-hidden="true" className="bg-accent h-px w-8 shrink-0" />
        404
      </p>

      <h1 className="text-text mt-5 text-[3rem] leading-[0.95] font-bold sm:text-[4rem]">
        Nothing here
        <span className="text-accent">.</span>
      </h1>

      <p className="text-muted mt-5 max-w-md text-lg leading-relaxed">
        That page does not exist. Everything on this site lives on one page, so
        the link you followed was probably to a section that has since been
        renamed.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="bg-accent text-contrast hover:bg-accent-deep rounded-lg px-7 py-4 text-base font-medium shadow-[0_10px_30px_-12px_var(--accent)] transition-colors"
        >
          Back to the start &rarr;
        </Link>
        <a
          href={`mailto:${site.contact.email}`}
          className="text-muted hover:text-accent font-mono text-sm tracking-wider uppercase transition-colors"
        >
          Or email me
        </a>
      </div>
    </main>
  );
}
