import { Kicker } from "@/components/Kicker";
import { site } from "@/content/site";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-border bg-surface scroll-mt-20 border-t px-6 py-20"
    >
      <div className="mx-auto max-w-[1080px]">
        <Kicker>Skills</Kicker>
        <h2 className="text-text mt-2 text-3xl font-bold">What I work with</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {site.skills.map((group) => (
            <div key={group.category} className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-muted font-mono text-xs tracking-wider uppercase">
                  {group.category}
                </h3>
                <span className="text-accent font-mono text-xs">
                  {group.level}/10
                </span>
              </div>

              {/* proficiency bar, width is a real number so it has to be an inline style */}
              <div className="bg-panel h-1 w-full rounded-full">
                <div
                  className="bg-accent h-1 rounded-full"
                  style={{ width: `${group.level * 10}%` }}
                />
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`border-border rounded-md border px-2 py-1 font-mono text-xs ${
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
