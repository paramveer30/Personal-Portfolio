"use client";

import { useState } from "react";

import { MediaSlot } from "@/components/MediaSlot";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export function Projects() {
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="border-border flex min-h-screen scroll-mt-20 flex-col border-t px-6 py-24 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col">
        <SectionHeading label="Projects">Things I&apos;ve built</SectionHeading>

        <div className="mt-12 grid flex-1 content-center gap-6 sm:mt-16 md:grid-cols-2">
          {site.projects.map((project, index) => {
            const open = openTitle === project.title;
            const panelId = `project-${index}`;
            return (
              <article
                key={project.title}
                className={`border-border bg-surface/70 flex flex-col rounded-xl border p-8 transition-colors ${
                  open
                    ? "md:col-span-2"
                    : "hover:border-accent/40 transition-transform hover:-translate-y-1"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-muted font-mono text-xs tracking-wider uppercase">
                    {String(index + 1).padStart(2, "0")} / {project.category}
                  </span>
                  {project.sourceUrl ? (
                    <span className="text-accent/70 font-mono text-[10px] tracking-[0.2em] uppercase">
                      Source
                    </span>
                  ) : null}
                </div>

                <h3 className="text-text mt-4 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-muted mt-2 text-base leading-relaxed">
                  {project.description}
                </p>

                {project.tech.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="border-border text-muted rounded-md border px-2.5 py-1.5 font-mono text-[13px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}

                {/* expands in place, the grid-rows trick animates the height */}
                <div
                  id={panelId}
                  className={`grid transition-all duration-500 ${
                    open
                      ? "mt-6 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-border grid gap-6 border-t pt-6 md:grid-cols-[1.1fr_1fr]">
                      <MediaSlot
                        src={project.imageUrl}
                        alt={`${project.title} screenshot`}
                        label="screenshot"
                        className="aspect-[16/10] w-full"
                      />
                      <div className="flex flex-col gap-3">
                        {project.detail?.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-muted text-base leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                        <div className="mt-auto flex flex-wrap gap-4 pt-2 font-mono text-sm tracking-wider uppercase">
                          {project.sourceUrl ? (
                            <a
                              href={project.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent hover:text-text"
                            >
                              View on GitHub ↗
                            </a>
                          ) : null}
                          {project.demoUrl ? (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent hover:text-text"
                            >
                              Live demo ↗
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenTitle((current) =>
                      current === project.title ? null : project.title,
                    )
                  }
                  className="text-accent hover:text-text mt-6 w-fit font-mono text-sm tracking-wider uppercase"
                >
                  {open ? "Close" : "Open"} &rarr;
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
