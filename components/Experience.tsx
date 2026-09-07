import { SectionHeading } from "@/components/SectionHeading";
import { TimelineItem, TimelineList } from "@/components/Timeline";
import { site } from "@/content/site";

export function Experience() {
  return (
    // panel is a step lighter than the page background, reads as its own surface
    <section
      id="experience"
      className="bg-panel/85 border-border flex min-h-screen scroll-mt-20 flex-col border-t px-6 py-24 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[880px] flex-1 flex-col">
        <SectionHeading label="Experience">
          Where I&apos;ve worked
        </SectionHeading>

        <div className="mt-12 flex flex-1 flex-col justify-center sm:mt-16">
          <TimelineList>
            {site.experience.map((role, index) => (
              <TimelineItem
                key={`${role.company}-${role.title}`}
                index={index}
                dateRange={`${role.start} — ${role.end}`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-text text-2xl font-bold">{role.title}</h3>
                  <span className="text-accent font-mono text-xs tracking-wider uppercase">
                    {role.type}
                  </span>
                </div>

                <p className="text-muted mt-1 font-mono text-sm tracking-wider uppercase">
                  {role.company} &middot; {role.location}
                </p>

                <ul className="text-muted mt-4 flex flex-col gap-2.5 text-base leading-relaxed">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-accent" aria-hidden="true">
                        &bull;
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border-border text-muted rounded-md border px-2.5 py-1.5 font-mono text-[13px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TimelineItem>
            ))}
          </TimelineList>
        </div>
      </div>
    </section>
  );
}
