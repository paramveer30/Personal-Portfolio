import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

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

export const metadata: Metadata = {
  title: "Paramveer Multani",
  description: "Personal portfolio of Paramveer Multani.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // attaches both font css variables to the whole page, globals.css reads them from here
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Nav />
        {/* children is whatever page.tsx is being rendered, nav and footer wrap around it automatically */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
