import { Kicker } from "@/components/Kicker";
import { site } from "@/content/site";

export function Education() {
  return (
    // same bg-panel as Experience so the two read as one continuous panel
    <section id="education" className="bg-panel scroll-mt-20 px-6 pb-20">
      {/* border is on the inner column, not the whole section, so it lines up with the content above */}
      <div className="border-border mx-auto max-w-[760px] border-t pt-10">
        <Kicker>Education</Kicker>

        <div className="mt-6 flex flex-col gap-8">
          {site.education.map((school) => (
            <article key={school.school} className="flex flex-col gap-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-text text-xl font-bold">
                  {school.credential}
                </h3>
                <span className="text-muted font-mono text-xs tracking-wider uppercase">
                  {/* start is still "todo", so only show the range once there is a real start date */}
                  {school.start !== "todo" ? `${school.start} to ` : ""}
                  {school.end}
                </span>
              </div>

              <p className="text-muted font-mono text-xs tracking-wider uppercase">
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
                      className="border-border text-muted rounded-md border px-2 py-1 font-mono text-xs"
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
                      className="border-accent text-accent rounded-md border px-2 py-1 font-mono text-xs"
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
