import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Journey } from "@/components/Journey";
import { Projects } from "@/components/Projects";
import { Reveal } from "@/components/Reveal";
import { Skills } from "@/components/Skills";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    // scroll target for the name link in the header
    <main id="top">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div>
          <h1 className="text-text text-5xl font-bold">{site.name}</h1>
          <p className="text-muted mt-4">{site.tagline}</p>
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
