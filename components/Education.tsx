import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export function Education() {
  return (
    // same bg-panel as Experience so the two still read as one material
    <section
      id="education"
      className="bg-panel/85 flex min-h-screen scroll-mt-20 flex-col px-6 py-24 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[860px] flex-1 flex-col">
        <SectionHeading label="Education">Where I studied</SectionHeading>

        {/* body fills the leftover height and centres itself so the section never looks empty */}
        <div className="mt-12 flex flex-1 flex-col justify-center gap-10 sm:mt-16">
          {site.education.map((school) => (
            <article key={school.school} className="flex flex-col gap-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-text text-2xl font-bold">
                  {school.credential}
                </h3>
                <span className="text-muted font-mono text-sm tracking-wider uppercase">
                  {/* start is still "todo", so only show the range once there is a real start date */}
                  {school.start !== "todo" ? `${school.start} to ` : ""}
                  {school.end}
                </span>
              </div>

              <p className="text-muted font-mono text-sm tracking-wider uppercase">
                <a
                  href={school.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {school.school}
                </a>
                {school.average ? ` · Average ${school.average}` : ""}
                {school.gpa ? ` · GPA ${school.gpa}` : ""}
              </p>

              {school.focus.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-2">
                  {school.focus.map((topic) => (
                    <span
                      key={topic}
                      className="border-border text-muted rounded-md border px-2.5 py-1.5 font-mono text-[13px]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              {school.honors.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-2">
                  {school.honors.map((honor) => (
                    <span
                      key={honor}
                      className="border-accent text-accent rounded-md border px-2.5 py-1.5 font-mono text-[13px]"
                    >
                      {honor}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
