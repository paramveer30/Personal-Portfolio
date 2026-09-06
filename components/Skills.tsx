import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-border bg-surface/75 flex min-h-screen scroll-mt-20 flex-col border-t px-6 py-24 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col">
        <SectionHeading label="Skills">What I work with</SectionHeading>

        {/* body fills the leftover height and centres itself so the section never looks empty */}
        <div className="mt-12 grid flex-1 content-center gap-10 sm:mt-16 sm:grid-cols-3">
          {site.skills.map((group) => (
            <div key={group.category} className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-muted font-mono text-sm tracking-wider uppercase">
                  {group.category}
                </h3>
                <span className="text-accent font-mono text-sm">
                  {group.level}/10
                </span>
              </div>

              {/* proficiency bar, width is a real number so it has to be an inline style */}
              <div className="bg-panel h-1.5 w-full rounded-full">
                <div
                  className="bg-accent h-1.5 rounded-full"
                  style={{ width: `${group.level * 10}%` }}
                />
              </div>

              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`border-border rounded-md border px-2.5 py-1.5 font-mono text-[13px] ${
                      // key skills render in the accent so they stand out from the rest
                      site.skillHighlights.includes(item)
                        ? "text-accent"
                        : "text-muted"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
