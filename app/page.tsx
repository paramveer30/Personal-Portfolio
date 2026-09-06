import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Journey } from "@/components/Journey";
import { Portrait } from "@/components/Portrait";
import { Projects } from "@/components/Projects";
import { Reveal } from "@/components/Reveal";
import { Skills } from "@/components/Skills";
import { TopologyBackground } from "@/components/TopologyBackground";
import { TypeCycle } from "@/components/TypeCycle";
import { site } from "@/content/site";

// last word of the name gets the accent color
const nameParts = site.name.split(" ");
const firstNames = nameParts.slice(0, -1).join(" ");
const lastName = nameParts[nameParts.length - 1];

// lines the hero cycles through, module const so the ref stays stable
const HERO_PHRASES = [
  "Seeking internships for Winter 2027.",
  "I like making things and figuring out how they work.",
  "Happy to talk projects, or basketball.",
  "Always building something new.",
  "Lets Connect!",
  "Welcome to my website.",
];

export default function HomePage() {
  return (
    // scroll target for the name link in the header
    <main id="top" className="relative isolate [overflow-x:clip]">
      {/* warm light pools that run the height of the page, gives each section its own glow */}
      <div className="page-aura" aria-hidden="true" />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24">
        <TopologyBackground />

        {/* a faint rounded container, no hard corner ticks, just gentle structure */}
        <div className="border-border bg-surface/30 relative z-10 mx-auto w-full max-w-[1120px] rounded-2xl border p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.85fr)] md:items-center">
            {/* left, name and details. min-w-0 so the big name cannot shove the photo column to zero width */}
            <div className="order-1 min-w-0">
              {/* aria-label keeps the name one phrase for screen readers despite the two faces */}
              <h1
                aria-label={site.name}
                className="leading-none font-bold break-words"
              >
                <span className="block text-6xl sm:text-7xl lg:text-[5rem]">
                  {firstNames}
                </span>
                {/* cursive face, pulled up because script fonts carry a lot of empty space on top */}
                <span className="text-accent font-script -mt-2 block text-7xl leading-[0.9] font-semibold sm:text-8xl lg:text-[7.5rem]">
                  {lastName}
                </span>
              </h1>

              <p className="text-muted mt-6 text-sm sm:text-base">
                Computer Engineering <span className="text-accent">@</span>{" "}
                McMaster University
              </p>

              {/* the cycling line, boxed in a small pill so it reads as its own thing */}
              <div className="border-border bg-surface/50 text-muted mt-5 inline-flex w-[min(90vw,24rem)] items-center overflow-hidden rounded-full border px-4 py-1.5 text-xs whitespace-nowrap sm:text-sm">
                <TypeCycle phrases={HERO_PHRASES} />
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="bg-accent text-contrast hover:bg-accent-deep inline-flex items-center gap-2 rounded-lg px-7 py-4 text-base font-medium shadow-[0_10px_30px_-12px_var(--accent)]"
                >
                  Get in touch &rarr;
                </a>
              </div>

              {/* meta row fills the space with real info, normal case so it stays friendly */}
              <div className="text-muted mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <span className="inline-flex items-center gap-2">
                  <span
                    className="bg-accent h-1.5 w-1.5 rounded-full"
                    aria-hidden="true"
                  />
                  {site.availability}
                </span>
                <span>{site.location}</span>
                <a
                  href={site.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  GitHub
                </a>
                <a
                  href={site.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* right, the photo. flex not justify-self so the column keeps its track width and the photo does not collapse */}
            <div className="order-2 flex justify-center md:justify-end">
              <Portrait />
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="scroll-cue text-muted absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
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
