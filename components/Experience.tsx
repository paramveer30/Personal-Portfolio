import { MediaSlot } from "@/components/MediaSlot";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export function Experience() {
  return (
    // panel is a step lighter than the page background, reads as its own surface
    // scroll-mt-20 keeps the sticky nav from covering the heading when you jump here
    <section
      id="experience"
      className="bg-panel/85 border-border flex min-h-screen scroll-mt-20 flex-col border-t px-6 py-24 lg:py-28"
    >
      {/* narrower column than the rest of the page, reads better for a resume style list */}
      <div className="mx-auto flex w-full max-w-[860px] flex-1 flex-col">
        <SectionHeading label="Experience">
          Where I&apos;ve worked
        </SectionHeading>

        {/* body fills the leftover height and centres itself so the section never looks empty */}
        <div className="mt-12 flex flex-1 flex-col justify-center gap-12 sm:mt-16">
          {site.experience.map((role) => (
            <article
              key={`${role.company}-${role.title}`}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-5">
                <MediaSlot
                  src={role.logoUrl}
                  alt={`${role.company} logo`}
                  label="logo"
                  className="h-16 w-16 shrink-0"
                />
                <div className="flex flex-1 flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-text text-2xl font-bold">{role.title}</h3>
                  <span className="bg-surface text-muted rounded-full px-3.5 py-1.5 font-mono text-sm tracking-wider uppercase">
                    {role.type}
                  </span>
                </div>
              </div>

              <p className="text-muted font-mono text-sm tracking-wider uppercase">
                {role.company} &middot; {role.location} &middot; {role.start} to{" "}
                {role.end}
              </p>

              <ul className="text-muted flex flex-col gap-2.5 text-base leading-relaxed">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-accent" aria-hidden="true">
                      &bull;
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-1 flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border-border text-muted rounded-md border px-2.5 py-1.5 font-mono text-[13px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
