import { Kicker } from "@/components/Kicker";
import { MediaSlot } from "@/components/MediaSlot";
import { site } from "@/content/site";

export function Experience() {
  return (
    // panel is a step lighter than the page background, reads as its own surface
    // scroll-mt-20 keeps the sticky nav from covering the heading when you jump here
    <section
      id="experience"
      className="bg-panel border-border min-h-screen scroll-mt-20 border-t px-6 py-24"
    >
      {/* narrower column than the rest of the page, reads better for a resume style list */}
      <div className="mx-auto max-w-[760px]">
        <Kicker>Experience</Kicker>
        <h2 className="text-text mt-2 text-3xl font-bold">
          Where I&apos;ve worked
        </h2>

        <div className="mt-10 flex flex-col gap-10">
          {site.experience.map((role) => (
            <article
              key={`${role.company}-${role.title}`}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-4">
                <MediaSlot
                  src={role.logoUrl}
                  alt={`${role.company} logo`}
                  label="logo"
                  className="h-12 w-12 shrink-0"
                />
                <div className="flex flex-1 flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-text text-xl font-bold">{role.title}</h3>
                  <span className="bg-surface text-muted rounded-full px-3 py-1 font-mono text-xs tracking-wider uppercase">
                    {role.type}
                  </span>
                </div>
              </div>

              <p className="text-muted font-mono text-xs tracking-wider uppercase">
                {role.company} &middot; {role.location} &middot; {role.start} to{" "}
                {role.end}
              </p>

              <ul className="text-muted flex flex-col gap-2 text-sm leading-relaxed">
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
                    className="border-border text-muted rounded-md border px-2 py-1 font-mono text-xs"
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
