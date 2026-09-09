import type { MetadataRoute } from "next";

import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.role}`,
    short_name: site.name.split(" ")[0] ?? site.name,
    description: site.tagline,
    start_url: "/",
    display: "standalone",
    // matches the dark surface the icon sits on, so the splash does not flash white
    background_color: "#1e1a16",
    theme_color: "#d8b27a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
