import { Kicker } from "@/components/Kicker";
import { site } from "@/content/site";

export function Projects() {
  return (
    <section
      id="projects"
      className="border-border min-h-screen scroll-mt-20 border-t px-6 py-24"
    >
      <div className="mx-auto w-full max-w-[1080px]">
        <Kicker>Projects</Kicker>
        <h2 className="text-text mt-2 text-3xl font-bold">
          Things I&apos;ve built
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {site.projects.map((project) => (
            <article
              key={project.title}
              // lifts slightly on hover, a small hint that the card is meant to draw the eye
              className="border-border bg-surface flex flex-col gap-3 rounded-lg border p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-text text-lg font-bold">{project.title}</h3>
                <span className="text-accent font-mono text-xs tracking-wider uppercase">
                  {project.category}
                </span>
              </div>

              <p className="text-muted text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border-border text-muted rounded-md border px-2 py-1 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* only shows the link row if at least one url exists, none of the three projects have one yet */}
              {(project.demoUrl ?? project.sourceUrl) ? (
                <div className="mt-2 flex gap-4 font-mono text-xs tracking-wider uppercase">
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
