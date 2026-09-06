import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { HeroBackground } from "@/components/HeroBackground";
import { Journey } from "@/components/Journey";
import { Portrait } from "@/components/Portrait";
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
      <section className="relative flex min-h-screen items-center overflow-hidden px-6">
        <HeroBackground />

        <div className="relative z-10 mx-auto grid w-full max-w-[1120px] items-center gap-12 md:grid-cols-2">
          {/* photo on the left on desktop, below the name on mobile */}
          <div className="order-2 md:order-1">
            <Portrait />
          </div>

          {/* name and short bio, sits in the right half on desktop */}
          <div className="order-1 md:order-2">
            <p className="text-accent font-mono text-xs tracking-[0.16em] uppercase">
              {site.role} &middot; McMaster University
            </p>

            {/* aria-label keeps the name one phrase for screen readers despite the line break */}
            <h1
              aria-label={site.name}
              className="mt-3 text-6xl leading-[1.03] font-bold sm:text-7xl lg:text-8xl"
            >
              {firstNames}
              <br />
              <span className="text-accent">{lastName}</span>
            </h1>

            <p className="text-muted mt-6 max-w-[420px] text-lg leading-relaxed">
              {site.bioShort}
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                // the box-shadow is the red glow, an arbitrary value since it is a one off
                className="bg-accent text-contrast inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium shadow-[0_0_24px_rgba(216,178,122,0.22)]"
              >
                Get in touch &rarr;
              </a>
            </div>
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
