import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/site";

// crawlers that answer a live question and cite the source, worth being in
const AI_SEARCH = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
];

// crawlers that collect corpora for training, which gives nothing back
const AI_TRAINING = [
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "CCBot",
  "Bytespider",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_SEARCH.map((userAgent) => ({ userAgent, allow: "/" })),
      ...AI_TRAINING.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
