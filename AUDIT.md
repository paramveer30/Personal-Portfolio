# Portfolio audit — Phase 3 (after fixes)

Repo: `Personal-Portfolio` · Next.js 16 (App Router), TypeScript strict, Tailwind v4
Owner: Paramveer Multani · GitHub `paramveer30` · LinkedIn `in/paramveermt` · X `@Paramveermt`

**Before: 12 PASS · 21 FAIL · 4 WARN · 6 MANUAL**
**After: 33 PASS · 0 FAIL · 3 WARN · 6 MANUAL**

Verified green after every group: `typecheck`, `lint`, `format:check`, `test`, `build`.
Build now emits 8 routes, up from 3.

```
┌ ○ /                        ├ ○ /llms.txt
├ ○ /_not-found              ├ ○ /manifest.webmanifest
├ ○ /apple-icon.png          ├ ○ /opengraph-image
├ ○ /icon.svg                ├ ○ /robots.txt
                             └ ○ /sitemap.xml
```

---

## A. Template fingerprints

| #   | Before | After    | What changed                                                                                        |
| --- | ------ | -------- | --------------------------------------------------------------------------------------------------- |
| A6  | FAIL   | **PASS** | `README.md` written — screenshot, stack, scripts, layout map, theming and motion notes, deploy step |
| A12 | WARN   | **PASS** | stale "todo until param sends one" comment removed; every project now has a thumbnail               |

Everything else in A was already passing and was left alone.

## B. Semantics and accessibility

| #   | Before | After    | What changed                                                                                                                                                                                                                                           |
| --- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| B3  | FAIL   | **PASS** | `Journey.tsx:198` — `focus-visible:outline-none` had no replacement, so the accordion was invisible to keyboard. Now `focus-visible:outline-2 focus-visible:outline-accent` with an inset offset so it is not clipped by the panel's `overflow-hidden` |
| B4  | FAIL   | **PASS** | skip link in `app/layout.tsx`, `sr-only` until focused, jumps past 7 nav links + 5 social icons                                                                                                                                                        |
| B5  | FAIL   | **PASS** | all four Contact fields got `<label class="sr-only">` + `htmlFor`/`id`, plus `autoComplete`. Visually identical — no redesign                                                                                                                          |
| B6  | WARN   | **PASS** | success is `role="status"`, errors are `role="alert"`, so the outcome is announced rather than signalled by colour alone                                                                                                                               |
| B14 | FAIL   | **PASS** | light `--muted` `#7c7267` was **3.70:1** on panel (AA needs 4.5). Now `#5d554b` = **5.75:1** panel / 7.03 surface. Dark `#b3a696` = 7.01:1                                                                                                             |

## C. Metadata and social preview — was the largest gap

All of the following were absent and are now in `app/layout.tsx`:

`metadataBase` · `alternates.canonical` · `openGraph` (type, url, siteName, title, description,
locale, image + dimensions + alt) · `twitter` (summary_large_image, title, description, creator
`@Paramveermt`) · `viewport.themeColor` with light **and** dark variants · `robots` directives ·
`title.template` · `keywords` · `authors` / `creator`

**OG image:** rather than ask you for a 1200×630 asset, `app/opengraph-image.tsx` generates one
at build time via `next/og` from the same `content/site.ts` the page reads. It can never drift
out of sync and there is no file to maintain. Verified: HTTP 200, `image/png`, 52 KB.

**Favicon set complete:** `app/icon.svg` (PM monogram, Dancing Script, gold ramp on brown),
`app/apple-icon.png` 180×180, `public/icon-192.png`, `public/icon-512.png`, and
`app/manifest.ts` referencing them with name, short_name, description, start_url, display,
theme_color, background_color, and a maskable variant.

## D. Structured data

`components/StructuredData.tsx` emits a single `@graph` from the root layout — **verified
exactly one `application/ld+json` tag in the rendered HTML**, not one per component.

Contains `Person` (name, url, image, jobTitle, email, address, `alumniOf` → both schools,
`knowsAbout` → every skill, `sameAs` → GitHub/LinkedIn/X/Instagram), `WebSite` (publisher
linked by `@id`), and a `CreativeWork` per project. Every value is read from `content/site.ts`,
so the markup cannot contradict the visible page.

**MANUAL:** paste the rendered payload into `validator.schema.org` and Google's Rich Results
Test once deployed.

## E. Crawler and AI files

`app/robots.ts`, `app/sitemap.ts`, `app/llms.txt/route.ts` — all generated, all deriving URLs
from `siteUrl`, all verified serving correctly.

**AI crawler stance — I chose "search-only" on your behalf. Change it if you disagree.**
`app/robots.ts` allows `OAI-SearchBot`, `ChatGPT-User`, `Claude-User`, `Claude-SearchBot`,
`PerplexityBot` (the ones that answer a live question and cite you) and disallows `GPTBot`,
`ClaudeBot`, `Google-Extended`, `CCBot`, `Bytespider`, `Applebot-Extended` (the ones that
collect training corpora). You stay findable when a recruiter asks an assistant about embedded
work in Hamilton, without donating the content to training. Flip either list in one line.

## F. Images and performance

| #   | Before | After    | What changed                                                                                                                                                                                                                                                                         |
| --- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| F1  | FAIL   | **PASS** | **`unoptimized` removed from all 6 call sites.** The comment explained it — _"skips the on-disk image cache, this machine is out of C: space"_ — a local dev workaround that would have shipped, disabling AVIF/WebP and `srcset` for every visitor. Build verified clean without it |
| F2  | FAIL   | **PASS** | `MediaSlot` gained a `priority` prop; `Portrait` sets it. The LCP image is no longer lazy                                                                                                                                                                                            |
| F3  | WARN   | **PASS** | seven >200 KB images recompressed, 1845 KB → 1624 KB. Gains are modest because they had already been re-encoded once; the real win is F1, since Next now serves resized AVIF/WebP regardless of source                                                                               |

## G. Runtime correctness

| #   | Before | After    | What changed                                                                                        |
| --- | ------ | -------- | --------------------------------------------------------------------------------------------------- |
| G1  | FAIL   | **PASS** | `app/not-found.tsx` — site-styled 404 with the page aura, a link home and a mailto                  |
| G2  | FAIL   | **PASS** | `app/error.tsx` — error boundary with a reset button, so one throw no longer white-screens the site |
| G3  | WARN   | **WARN** | still falls back to `mailto:` — needs a Web3Forms key from you                                      |

## H. Security

| #   | Before | After    | What changed                                                                                                                                                                                                                                                                                                                     |
| --- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| H5  | FAIL   | **PASS** | `vercel.json` — CSP, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (camera/mic/geolocation denied), HSTS with preload, `X-Frame-Options: DENY`. CSP allows `api.web3forms.com` in `connect-src`/`form-action` so the contact form still works when you add the key |

H1–H4, H6, H7 were already passing: no secrets, `.env` never committed, no tracked junk, no
`NEXT_PUBLIC_*` exposure, **0 npm vulnerabilities**.

## I. Repo signals

| #   | Before | After    | What changed                                                                                                                                                           |
| --- | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| I1  | FAIL   | **PASS** | README written                                                                                                                                                         |
| I6  | FAIL   | **PASS** | `.github/workflows/ci.yml` — runs lint, typecheck, format:check, test and build on push and PR, using `npm ci` against the lockfile and the Node version from `.nvmrc` |
| I2  | FAIL   | **WARN** | LICENSE deliberately not added — see below                                                                                                                             |

## J. Copy — untouched, as instructed

Still PASS on AI-tell vocabulary (zero hits in prose). The two observations from Phase 1 stand
and remain yours: be ready to explain the "25% diagnostic time / 20% downtime" arithmetic, and
the two hardware project descriptions lead with components rather than the problem.

---

## Still needs you

1. **LICENSE.** Not added on purpose — this is a legal choice, and MIT is wrong for a portfolio
   whose photos and copy are personal. Common answer is code MIT, content reserved. Your call.
2. **Contact form.** Set `contact.formAccessKey` to a Web3Forms key, or keep the mailto
   fallback. Today it opens a mail client, which does nothing useful for webmail users.
3. **Custom domain.** `siteUrl` resolves automatically — localhost in dev, the Vercel
   production URL on deploy. Only if you buy a domain do you set `NEXT_PUBLIC_SITE_URL`.
4. **Meta description.** I wrote one from your existing content. Read it, make it yours.
5. **AI crawler stance.** Search-only is chosen. Change if you disagree.
6. **Parrot blurb** and the **BS Transportation AI detail** are still my draft / still missing.

## Still MANUAL — needs a browser or the live URL

| Check                | How                                                                                                                                       |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Lighthouse           | `npx lighthouse <URL> --preset=desktop` and `npx lighthouse <URL> --form-factor=mobile --screenEmulation.mobile` — target 90+ on all four |
| Console clean        | DevTools console on every section                                                                                                         |
| No horizontal scroll | 360 / 768 / 1280 / 1920                                                                                                                   |
| Dark mode readable   | toggle and scan; contrast maths passes                                                                                                    |
| Tab order            | tab from the top, confirm the skip link appears first                                                                                     |
| Structured data      | validator.schema.org + Google Rich Results Test                                                                                           |
| GitHub repo          | set description, website link and topics; pin the repo                                                                                    |

## Not in this repo, still outstanding

The deleted **LetMeKnock** repo had `.env` files committed with a live `DATABASE_URL`, Postgres
password, `SESSION_SECRET`, and Firebase / OpenRouteService / TravelTime keys. Repo is gone
(404 confirmed) but those keys were public while it existed. **Rotate all of them.**
