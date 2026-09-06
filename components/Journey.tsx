import { MediaSlot } from "@/components/MediaSlot";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export function Journey() {
  return (
    <section
      id="journey"
      className="border-border flex min-h-screen scroll-mt-20 flex-col border-t px-6 py-24 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col">
        <SectionHeading label="Journey">Outside of work</SectionHeading>

        {/* body fills the leftover height and centres itself so the section never looks empty */}
        <div className="mt-12 flex flex-1 flex-col justify-center gap-14 sm:mt-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {site.passions.map((passion) => (
              <div
                key={passion.key}
                className="border-border bg-surface overflow-hidden rounded-xl border transition-transform hover:-translate-y-1"
              >
                {/* first photo in the array is the cover shot, rest would go in a gallery later */}
                <MediaSlot
                  src={passion.images[0]}
                  alt={passion.title}
                  label="photo"
                  className="aspect-[4/3] w-full rounded-none border-x-0 border-t-0"
                />
                <div className="p-7">
                  <h3 className="text-text text-xl font-bold">
                    {passion.title}
                  </h3>
                  <p className="text-muted mt-2 text-base leading-relaxed">
                    {passion.blurb}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* quick favorites row, not resume material, just personality */}
          <div className="border-border grid gap-8 border-t pt-10 font-mono text-sm sm:grid-cols-4">
            <div>
              <p className="text-muted tracking-wider uppercase">Rapper</p>
              <p className="text-text mt-1">{site.favorites.rapper}</p>
            </div>

            <div>
              <p className="text-muted tracking-wider uppercase">Movies</p>
              <div className="mt-2 flex gap-2">
                {site.favorites.movies.map((movie) => (
                  <div
                    key={movie.title}
                    className="flex flex-col items-center gap-1"
                  >
                    <MediaSlot
                      src={movie.posterUrl}
                      alt={movie.title}
                      label="poster"
                      className="aspect-[2/3] w-24"
                    />
                    <span className="text-muted text-center normal-case">
                      {movie.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-muted tracking-wider uppercase">Song</p>
              <div className="mt-2 flex items-center gap-3">
                <MediaSlot
                  src={site.favorites.albumArtUrl}
                  alt={`${site.favorites.song} album art`}
                  label="art"
                  className="h-16 w-16 shrink-0"
                />
                {site.favorites.songUrl ? (
                  <a
                    href={site.favorites.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent normal-case hover:underline"
                  >
                    {site.favorites.song}, {site.favorites.songArtist}
                  </a>
                ) : (
                  <p className="text-text normal-case">
                    {site.favorites.song}, {site.favorites.songArtist}
                  </p>
                )}
              </div>
            </div>

            <div>
              <p className="text-muted tracking-wider uppercase">UFC</p>
              <p className="text-text mt-1">{site.favorites.ufcFighter}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
