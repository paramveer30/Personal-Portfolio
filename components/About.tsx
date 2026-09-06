import { Kicker } from "@/components/Kicker";
import { site } from "@/content/site";

export function About() {
  return (
    <section
      id="about"
      className="border-border min-h-screen scroll-mt-20 border-t px-6 py-24"
    >
      <div className="mx-auto max-w-[1080px]">
        <Kicker>About</Kicker>
        <h2 className="text-text mt-2 text-3xl font-bold">A bit about me</h2>

        {/* left column wider than the right, bio needs more room than the stat cards do */}
        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-4">
            {/* using the paragraph text itself as the key, fine here since bio is short and never reorders */}
            {site.bio.map((paragraph) => (
              <p key={paragraph} className="text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-accent font-mono text-xs tracking-wider uppercase">
                  My approach
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {site.about.approach}
                </p>
              </div>
              <div>
                <h3 className="text-accent font-mono text-xs tracking-wider uppercase">
                  What I do
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {site.about.whatIDo}
                </p>
              </div>
            </div>

            <p className="text-muted mt-4 font-mono text-xs tracking-wider uppercase">
              {site.location} &middot; {site.availability}
            </p>
          </div>

          {/* stat cards, portrait goes here once the sketchify pipeline runs */}
          <div className="flex flex-col gap-4">
            {site.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-border bg-surface rounded-lg border px-5 py-4"
              >
                <p className="text-text text-3xl font-bold">{stat.value}</p>
                <p className="text-muted mt-1 font-mono text-xs tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
