import { LogoBadge } from "@/components/LogoBadge";
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
      <div className="mx-auto flex w-full max-w-[900px] flex-1 flex-col">
        <SectionHeading label="Education">Where I studied</SectionHeading>

        <div className="mt-12 flex flex-1 flex-col justify-center sm:mt-16">
          <TimelineList>
            {site.education.map((school, index) => (
              <TimelineItem
                key={school.school}
                index={index}
                start={school.start}
                end={school.end}
              >
                {/* the crest then the school, mirrors the experience header */}
                <div className="flex items-center gap-3.5">
                  <LogoBadge src={school.logoUrl} name={school.school} />
                  <div className="min-w-0">
                    <a
                      href={school.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text hover:text-accent font-mono text-sm tracking-[0.16em] uppercase transition-colors"
                    >
                      {school.school}
                    </a>
                    {school.average || school.gpa ? (
                      <p className="text-muted mt-1 font-mono text-xs">
                        {school.average ? (
                          <>
                            Average{" "}
                            <span className="text-accent">
                              {school.average}
                            </span>
                          </>
                        ) : null}
                        {school.gpa ? (
                          <>
                            GPA{" "}
                            <span className="text-accent">{school.gpa}</span>
                          </>
                        ) : null}
                      </p>
                    ) : null}
                  </div>
                </div>

                <h3 className="text-text mt-5 text-3xl leading-tight font-bold sm:text-4xl">
                  {school.credential}
                </h3>

                {school.honors.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {school.honors.map((honor) => (
                      <span
                        key={honor}
                        className="border-accent/60 text-accent bg-accent/[0.06] rounded-full border px-3.5 py-1.5 font-mono text-[13px]"
                      >
                        {honor}
                      </span>
                    ))}
                  </div>
                )}

                {school.focus.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-muted font-mono text-[11px] tracking-[0.18em] uppercase">
                      Coursework
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {school.focus.map((topic) => (
                        <span
                          key={topic}
                          className="border-border text-muted hover:border-accent/50 hover:bg-accent/[0.06] hover:text-text rounded-full border px-3.5 py-1.5 font-mono text-[13px] transition-colors duration-200"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {school.activities && school.activities.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-muted font-mono text-[11px] tracking-[0.18em] uppercase">
                      Clubs and teams
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {school.activities.map((activity) => (
                        <span
                          key={activity}
                          className="border-border text-muted hover:border-accent/50 hover:bg-accent/[0.06] hover:text-text rounded-full border px-3.5 py-1.5 font-mono text-[13px] transition-colors duration-200"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
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
