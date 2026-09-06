import { MediaSlot } from "@/components/MediaSlot";
import { site } from "@/content/site";

// hero photo, a plain rounded rectangle with a border
export function Portrait() {
  return (
    <div className="border-border relative aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-xl border">
      <MediaSlot
        src={site.portraitUrl}
        alt={site.name}
        label="photo"
        className="h-full w-full"
      />
    </div>
  );
}
