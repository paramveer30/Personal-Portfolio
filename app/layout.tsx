import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import {
  Dancing_Script,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google";
import Script from "next/script";

import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { StructuredData } from "@/components/StructuredData";
import { site, siteUrl } from "@/content/site";

import "./globals.css";

// next/font downloads the font at build time and exposes it as a css variable with this name
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// cursive face, used only for the last name in the hero
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-dancing-script",
  display: "swap",
});

const description = `${site.role} at McMaster University. Instrument diagnostics and calibration tooling at Hoskin Scientific, embedded and full stack projects, and a standing technical role alongside school.`;

export const metadata: Metadata = {
  // every relative url below resolves against this, so og:image and canonical come out absolute
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  keywords: [
    site.name,
    "Computer Engineering",
    "McMaster University",
    "co-op",
    "embedded systems",
    "software developer",
    "Toronto",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
    creator: "@Paramveermt",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// matches the two palettes in globals.css so the browser chrome follows the theme
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5efe4" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1a16" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // attaches both font css variables to the whole page, globals.css reads them from here
    // suppressHydrationWarning because the theme script sets data-theme on html before react hydrates
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${dancingScript.variable}`}
    >
      <head>
        {/* runs before paint, only forces a theme when the visitor has an explicit saved choice */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`}
        </Script>
        <StructuredData />
      </head>
      <body suppressHydrationWarning>
        {/* hidden until tabbed to, so a keyboard user can jump the nav and the social row */}
        <a
          href="#top"
          className="bg-accent text-contrast focus:outline-contrast sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:outline-2 focus:outline-offset-2"
        >
          Skip to content
        </a>
        <Nav />
        {/* children is whatever page.tsx is being rendered, nav and footer wrap around it automatically */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
