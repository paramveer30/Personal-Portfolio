import { LogoBadge } from "@/components/LogoBadge";
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
      <div className="mx-auto flex w-full max-w-[900px] flex-1 flex-col">
        <SectionHeading label="Experience">
          Where I&apos;ve worked
        </SectionHeading>

        <div className="mt-12 flex flex-1 flex-col justify-center sm:mt-16">
          <TimelineList>
            {site.experience.map((role, index) => (
              <TimelineItem
                key={`${role.company}-${role.title}`}
                index={index}
                start={role.start}
                end={role.end}
              >
                {/* who, the company mark then the plain facts */}
                <div className="flex items-center gap-3.5">
                  <LogoBadge
                    src={role.logoUrl}
                    icon={role.icon}
                    name={role.company}
                  />
                  <div className="min-w-0">
                    <p className="text-text font-mono text-sm tracking-[0.16em] uppercase">
                      {role.company}
                    </p>
                    <p className="text-muted mt-1 font-mono text-xs">
                      {role.location} &middot;{" "}
                      <span className="text-accent">{role.type}</span>
                    </p>
                  </div>
                </div>

                <h3 className="text-text mt-5 text-3xl leading-tight font-bold sm:text-4xl">
                  {role.title}
                </h3>

                <p className="text-text/90 mt-3 text-lg leading-relaxed">
                  {role.summary}
                </p>

                {/* the detail hangs off a hairline so it reads as a level below the summary */}
                <ul className="border-border text-muted mt-5 ml-0.5 flex flex-col gap-3 border-l pl-6 text-base leading-relaxed">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="relative">
                      <span
                        aria-hidden="true"
                        className="bg-accent/60 absolute top-[0.62em] -left-3 h-1 w-1 rounded-full"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border-border text-muted hover:border-accent/50 hover:bg-accent/[0.06] hover:text-text rounded-full border px-3.5 py-1.5 font-mono text-[13px] transition-colors duration-200"
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
