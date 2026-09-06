import Image from "next/image";

interface MediaSlotProps {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  // extra classes for the image itself, e.g. filters
  imgClassName?: string;
}

// reserves the space for an image, shows a dashed placeholder until a real src is set
export function MediaSlot({
  src,
  alt,
  label,
  className = "",
  imgClassName = "",
}: MediaSlotProps) {
  if (!src) {
    return (
      <div
        className={`border-border bg-panel text-muted flex items-center justify-center rounded-md border border-dashed font-mono text-[10px] tracking-wider uppercase ${className}`}
      >
        {label}
      </div>
    );
  }

  return (
    // fill makes the image stretch to match this wrapper instead of needing a fixed width and height,
    // it needs position relative on the wrapper to know what to fill
    <div className={`relative overflow-hidden rounded-md ${className}`}>
      {/* unoptimized skips the on-disk image cache, this machine is out of C: space */}
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        className={`object-cover object-top ${imgClassName}`}
        sizes="(max-width: 768px) 90vw, 340px"
      />
    </div>
  );
}
