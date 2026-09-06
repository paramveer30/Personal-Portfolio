import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export function Projects() {
  return (
    <section
      id="projects"
      className="border-border flex min-h-screen scroll-mt-20 flex-col border-t px-6 py-24 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col">
        <SectionHeading label="Projects">Things I&apos;ve built</SectionHeading>

        {/* body fills the leftover height and centres itself so the section never looks empty */}
        <div className="mt-12 grid flex-1 content-center gap-8 sm:mt-16 sm:grid-cols-2">
          {site.projects.map((project) => (
            <article
              key={project.title}
              // lifts slightly on hover, a small hint that the card is meant to draw the eye
              className="border-border bg-surface flex flex-col gap-4 rounded-xl border p-8 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-text text-2xl font-bold">
                  {project.title}
                </h3>
                <span className="text-accent font-mono text-sm tracking-wider uppercase">
                  {project.category}
                </span>
              </div>

              <p className="text-muted text-base leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border-border text-muted rounded-md border px-2.5 py-1.5 font-mono text-[13px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* only shows the link row if at least one url exists, none of the three projects have one yet */}
              {(project.demoUrl ?? project.sourceUrl) ? (
                <div className="mt-2 flex gap-4 font-mono text-sm tracking-wider uppercase">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-text"
                    >
                      Live demo
                    </a>
                  ) : null}
                  {project.sourceUrl ? (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-text"
                    >
                      Source
                    </a>
                  ) : null}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
