import { MediaSlot } from "@/components/MediaSlot";
import { site } from "@/content/site";

// animated frame for the hero photo, shows a placeholder until portraitUrl is set
export function Portrait() {
  return (
    <div className="portrait-float relative mx-auto w-full max-w-[340px]">
      {/* viewfinder corner brackets */}
      <span className="border-accent absolute -top-1 -left-1 h-5 w-5 border-t-2 border-l-2" />
      <span className="border-accent absolute -top-1 -right-1 h-5 w-5 border-t-2 border-r-2" />
      <span className="border-accent absolute -bottom-1 -left-1 h-5 w-5 border-b-2 border-l-2" />
      <span className="border-accent absolute -right-1 -bottom-1 h-5 w-5 border-r-2 border-b-2" />

      <div className="relative aspect-[4/5] overflow-hidden rounded-md">
        <MediaSlot
          src={site.portraitUrl}
          alt={site.name}
          label="photo"
          className="h-full w-full rounded-md"
        />
        {/* thin accent line sweeping top to bottom */}
        <span className="portrait-scan bg-accent pointer-events-none absolute inset-x-0 h-px" />
      </div>
    </div>
  );
}
