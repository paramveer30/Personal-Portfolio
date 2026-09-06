import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Dancing_Script,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google";
import Script from "next/script";

import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

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

export const metadata: Metadata = {
  title: "Paramveer Multani",
  description: "Personal portfolio of Paramveer Multani.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // attaches both font css variables to the whole page, globals.css reads them from here
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${dancingScript.variable}`}
    >
      {/* runs before paint, only forces a theme when the visitor has an explicit saved choice */}
      <Script id="theme-init" strategy="beforeInteractive">
        {`try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`}
      </Script>
      <body>
        <Nav />
        {/* children is whatever page.tsx is being rendered, nav and footer wrap around it automatically */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
