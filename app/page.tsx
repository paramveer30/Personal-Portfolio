import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Journey } from "@/components/Journey";
import { Projects } from "@/components/Projects";
import { Reveal } from "@/components/Reveal";
import { Skills } from "@/components/Skills";
import { site } from "@/content/site";

// last word of the name gets the accent color
const nameParts = site.name.split(" ");
const firstNames = nameParts.slice(0, -1).join(" ");
const lastName = nameParts[nameParts.length - 1];

export default function HomePage() {
  return (
    // scroll target for the name link in the header
    <main id="top">
      <section className="flex min-h-screen flex-col justify-center px-6">
        <div className="mx-auto w-full max-w-[1120px]">
          <p className="text-accent font-mono text-xs tracking-[0.16em] uppercase">
            {site.role} &middot; McMaster University
          </p>

          <h1 className="mt-3 text-6xl leading-[1.02] font-bold sm:text-7xl">
            {firstNames} <span className="text-accent">{lastName}</span>
          </h1>

          <p className="text-muted mt-5 max-w-[560px] text-xl">
            {site.tagline}
          </p>

          {/* small terminal flourish, matches the mono labelling used elsewhere */}
          <div className="text-muted bg-surface border-border mt-6 inline-flex items-center gap-2 rounded-lg border px-4 py-2 font-mono text-xs">
            <span className="text-accent">$</span> whoami &rarr;{" "}
            <span className="text-text">paramveer.multani</span>
          </div>

          <div className="mt-8">
            <a
              href="#contact"
              // the box-shadow is the red glow, an arbitrary value since it is a one off
              className="bg-accent text-text inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium shadow-[0_0_26px_rgba(193,18,62,0.35)]"
            >
              Get in touch &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* each section fades and rises in the first time it scrolls into view */}
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Journey />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <Education />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </main>
  );
}
