import { ImageResponse } from "next/og";

import { site } from "@/content/site";

// generated at build time from the same content the page uses, so the card can never
// drift out of sync with the site and there is no static asset to keep updated
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name}, ${site.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#1e1a16",
        padding: "72px 80px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* warm pool, the same gesture the page uses behind its sections */}
      <div
        style={{
          position: "absolute",
          top: -180,
          right: -140,
          width: 620,
          height: 620,
          borderRadius: 620,
          background: "rgba(216, 178, 122, 0.16)",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ width: 44, height: 3, background: "#d8b27a" }} />
        <div
          style={{
            color: "#d8b27a",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {site.location}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            color: "#f3ece1",
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.05,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            color: "#b3a696",
            fontSize: 34,
            marginTop: 20,
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          {site.role}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(243, 236, 225, 0.14)",
          paddingTop: 28,
        }}
      >
        <div style={{ color: "#b3a696", fontSize: 26 }}>
          {site.education[0]?.school ?? ""}
        </div>
        <div style={{ color: "#d8b27a", fontSize: 26 }}>
          {site.availability}
        </div>
      </div>
    </div>,
    size,
  );
}
