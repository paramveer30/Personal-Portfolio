"use client";

import { useState } from "react";

import { MediaSlot } from "@/components/MediaSlot";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

// copy that has not been written yet is parked as "todo", keep it off the page
function written(value: string) {
  return (
    value.trim().length > 0 && !value.trim().toLowerCase().startsWith("todo")
  );
}

export function Projects() {
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="border-border flex min-h-screen scroll-mt-20 flex-col border-t px-6 py-24 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[1150px] flex-1 flex-col">
        <SectionHeading label="Projects">Things I&apos;ve built</SectionHeading>

        {/* one wide row per project, alternating sides so it does not read as a stack of boxes */}
        <div className="mt-14 flex flex-col gap-16 sm:mt-16 lg:gap-20">
          {site.projects.map((project, index) => {
            const open = openTitle === project.title;
            const panelId = `project-${index}`;
            const flip = index % 2 === 1;
            const hasDetail = (project.detail?.length ?? 0) > 0;

            return (
              <article
                key={project.title}
                className="group grid items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                {/* the shot, glowing softly so the row has a focal point even before the copy */}
                <div className={flip ? "md:order-2" : undefined}>
                  <div className="border-border bg-surface relative aspect-[16/10] w-full overflow-hidden rounded-2xl border shadow-[0_0_70px_-45px_var(--accent)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_0_70px_-28px_var(--accent)]">
                    <MediaSlot
                      src={project.imageUrl}
                      alt={`${project.title} screenshot`}
                      label="screenshot"
                      className="h-full w-full rounded-none"
                    />
                  </div>
                </div>

                <div className={flip ? "md:order-1" : undefined}>
                  <p className="text-muted font-mono text-xs tracking-[0.18em] uppercase">
                    <span className="text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>{" "}
                    / {project.category}
                  </p>

                  <h3 className="text-text mt-3 text-2xl leading-tight font-bold sm:text-3xl">
                    {project.title}
                  </h3>

                  {written(project.description) ? (
                    <p className="text-muted mt-3 text-base leading-relaxed">
                      {project.description}
                    </p>
                  ) : null}

                  {project.tech.length > 0 ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="border-border text-muted hover:border-accent/50 hover:bg-accent/[0.06] hover:text-text rounded-full border px-3.5 py-1.5 font-mono text-[13px] transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {/* the longer write up expands in place, grid-rows animates the height */}
                  {hasDetail ? (
                    <div
                      id={panelId}
                      className={`grid transition-all duration-500 ${
                        open
                          ? "mt-5 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-accent/40 flex flex-col gap-3 border-l-2 pl-5">
                          {project.detail?.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="text-muted text-[15px] leading-relaxed"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm tracking-wider uppercase">
                    {hasDetail ? (
                      <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() =>
                          setOpenTitle((current) =>
                            current === project.title ? null : project.title,
                          )
                        }
                        className="text-accent hover:text-text transition-colors"
                      >
                        {open ? "Close" : "Read more"}{" "}
                        <span
                          aria-hidden="true"
                          className={`inline-block transition-transform duration-300 ${
                            open ? "rotate-180" : ""
                          }`}
                        >
                          &darr;
                        </span>
                      </button>
                    ) : null}

                    {project.sourceUrl ? (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors"
                      >
                        GitHub &#8599;
                      </a>
                    ) : null}

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors"
                      >
                        Live demo &#8599;
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
