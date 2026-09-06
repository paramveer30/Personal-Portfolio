import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export function About() {
  return (
    <section
      id="about"
      className="border-border flex min-h-screen scroll-mt-20 flex-col border-t px-6 py-24 lg:py-28"
    >
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col">
        <SectionHeading label="About">A bit about me</SectionHeading>

        {/* body fills the leftover height and centres itself so the section never looks empty */}
        <div className="mt-12 grid flex-1 content-center gap-12 sm:mt-16 md:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-7">
            {/* first line runs large as a lead, the rest settles back to body size */}
            <div className="flex flex-col gap-4">
              {site.bio.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "text-text text-xl leading-relaxed"
                      : "text-muted text-lg leading-relaxed"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* two short takes, the mono labels break the prose up */}
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-accent font-mono text-sm tracking-wider uppercase">
                  My approach
                </h3>
                <p className="text-muted mt-2 text-base leading-relaxed">
                  {site.about.approach}
                </p>
              </div>
              <div>
                <h3 className="text-accent font-mono text-sm tracking-wider uppercase">
                  What I do
                </h3>
                <p className="text-muted mt-2 text-base leading-relaxed">
                  {site.about.whatIDo}
                </p>
              </div>
            </div>

            <p className="text-muted font-mono text-sm tracking-wider uppercase">
              {site.location} &middot; {site.availability}
            </p>
          </div>

          {/* stat cards, portrait goes here once the sketchify pipeline runs */}
          <div className="flex flex-col gap-5">
            {site.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-border bg-surface rounded-xl border px-7 py-6"
              >
                <p className="text-text text-4xl font-bold sm:text-5xl">
                  {stat.value}
                </p>
                <p className="text-muted mt-2 font-mono text-sm tracking-wider uppercase">
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
