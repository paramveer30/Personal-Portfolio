import { SectionHeading } from "@/components/SectionHeading";
import { SkillIcon } from "@/components/SkillIcons";
import { site } from "@/content/site";

export function Skills() {
  return (
    // deliberately not full height, this is a reference strip rather than a stop on the page
    <section
      id="skills"
      className="border-border bg-surface/75 scroll-mt-20 border-t px-6 py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <SectionHeading label="Skills">What I work with</SectionHeading>

        <div className="mt-12 flex flex-col gap-8">
          {site.skills.map((group) => (
            <div
              key={group.category}
              className="border-border grid gap-4 border-t pt-8 first:border-t-0 first:pt-0 md:grid-cols-[9rem_1fr] md:gap-8"
            >
              <h3 className="text-accent font-mono text-sm tracking-wider uppercase md:pt-2">
                {group.category}
              </h3>

              <ul className="flex flex-wrap items-center gap-2">
                {group.items.map((item) => {
                  // the ones he reaches for most sit forward, the rest stay quiet
                  const core = site.skillHighlights.includes(item);

                  return (
                    <li
                      key={item}
                      className={
                        core
                          ? "border-accent/45 bg-accent/[0.08] text-text flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium shadow-[0_0_28px_-14px_var(--accent)]"
                          : "border-border text-muted hover:border-accent/40 hover:text-text flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[13px] transition-colors duration-200"
                      }
                    >
                      <span className={core ? "text-accent" : "opacity-70"}>
                        <SkillIcon name={item} size={core ? 16 : 13} />
                      </span>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
