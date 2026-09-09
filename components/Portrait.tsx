import { MediaSlot } from "@/components/MediaSlot";
import { site } from "@/content/site";

// hero photo, a plain rounded rectangle with a border
export function Portrait() {
  return (
    <div className="border-border relative aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-xl border">
      {/* this is the largest thing above the fold, so it is the LCP element and must
          not be lazy loaded like every other image on the page */}
      <MediaSlot
        src={site.portraitUrl}
        alt={site.name}
        label="photo"
        className="h-full w-full"
        priority
      />
    </div>
  );
}
