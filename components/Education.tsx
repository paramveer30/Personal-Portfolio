import { SectionHeading } from "@/components/SectionHeading";
import { TimelineItem, TimelineList } from "@/components/Timeline";
import { site } from "@/content/site";

export function Education() {
  return (
    // same bg-panel as Experience so the two still read as one material
    <section
      id="education"
      className="bg-panel/85 flex min-h-screen scroll-mt-20 flex-col px-6 py-24 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[880px] flex-1 flex-col">
        <SectionHeading label="Education">Where I studied</SectionHeading>

        <div className="mt-12 flex flex-1 flex-col justify-center sm:mt-16">
          <TimelineList>
            {site.education.map((school, index) => (
              <TimelineItem
                key={school.school}
                index={index}
                dateRange={
                  school.start !== "todo"
                    ? `${school.start} — ${school.end}`
                    : `Expected ${school.end}`
                }
              >
                <h3 className="text-text text-2xl font-bold">
                  {school.credential}
                </h3>

                <p className="text-muted mt-1 font-mono text-sm tracking-wider uppercase">
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
                  <div className="mt-4 flex flex-wrap gap-2">
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
                  <div className="mt-3 flex flex-wrap gap-2">
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
              </TimelineItem>
            ))}
          </TimelineList>
        </div>
      </div>
    </section>
  );
}
