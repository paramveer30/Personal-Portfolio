import { Kicker } from "@/components/Kicker";
import { MediaSlot } from "@/components/MediaSlot";
import { site } from "@/content/site";

export function Journey() {
  return (
    <section
      id="journey"
      className="border-border scroll-mt-20 border-t px-6 py-20"
    >
      <div className="mx-auto max-w-[1080px]">
        <Kicker>Journey</Kicker>
        <h2 className="text-text mt-2 text-3xl font-bold">Outside of work</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.passions.map((passion) => (
            <div
              key={passion.key}
              className="border-border bg-surface overflow-hidden rounded-lg border"
            >
              <MediaSlot
                src={passion.images[0]}
                alt={passion.title}
                label="photo"
                className="aspect-video w-full rounded-none border-x-0 border-t-0"
              />
              <div className="p-6">
                <h3 className="text-text text-lg font-bold">{passion.title}</h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {passion.blurb}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* quick favorites row, not resume material, just personality */}
        <div className="border-border mt-10 grid gap-6 border-t pt-8 font-mono text-xs sm:grid-cols-4">
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
                    className="aspect-[2/3] w-14"
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
                className="h-12 w-12 shrink-0"
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
    </section>
  );
}
