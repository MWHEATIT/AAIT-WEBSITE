# AAIT Website — Punch List

Living list of issues to fix. As items get resolved, move them to the **Resolved** section at the bottom and append the date.

Last audit: 2026-04-25

---

## High priority — blocked on user-supplied assets

- [ ] **Missing favicon** — every page references `images/favicon.ico` but the file does not exist (the `images/` directory is empty). Browsers will 404 on favicon requests.
  - Fix: drop a real `favicon.ico` (and ideally `favicon-32.png`, `apple-touch-icon.png`) into `images/`, or remove the `<link rel="icon">` tags.

- [ ] **Missing Open Graph images** — pages reference `images/og-home.png`, `images/og-services.png`, `images/og-trends.png`. None exist. Social shares will fall back to no preview image.
  - Fix: add 1200×630 PNG OG images to `images/`, or remove the `og:image` / `twitter:image` meta tags.

## Medium priority — placeholder links

These `href="#"` links will refresh the page if clicked. Replace with real URLs once available.

- [ ] **Facebook profile** — placeholder `href="#"` in footer of [index.html](index.html), [services.html](services.html), [about.html](about.html), [contact.html](contact.html), [success.html](success.html), [trends.html](trends.html), [articles.html](articles.html).
- [ ] **LinkedIn profile** — same set of pages, same fix.
- [ ] **X (Twitter) profile** — same set of pages, same fix.
- [ ] **Privacy Policy** — placeholder in `.footer-bottom` on all 7 main pages. Either build a `privacy.html` page or link to a hosted policy.
- [ ] **Terms of Service** — placeholder in `.footer-bottom` on all 7 main pages. Same options as above.

## Medium priority — feature work

- [ ] **Instagram feed on [trends.html](trends.html) is placeholder-only** — until the Behold.so (or Elfsight / EmbedSocial) embed snippet is pasted into `<div id="instagramFeed">`, the sidebar shows two static placeholder cards. New IG posts will not appear automatically. See HTML comment above the widget for setup steps.

- [ ] **Home page "Stay Connected With Us" social cards** — three hardcoded post cards in [index.html](index.html) are static. Consider wiring these to the same Instagram embed used on Trends, or to live IG profile data.

---

## Resolved

- ~~Logo: increase size and switch to a more eye-catching display font~~ — 2026-04-25 (Space Grotesk applied to nav + footer)
- ~~Hero: too much vertical empty space between nav and "Sacramento's Trusted IT Partner"~~ — 2026-04-25
- ~~Home: replace Cybersecurity card with AI Business Adoption~~ — 2026-04-25 (later restored to 5 cards)
- ~~Home: "Rapid Response Times" updated to under 30 minutes~~ — 2026-04-25
- ~~Home: "Transparent Pricing" updated to time and materials~~ — 2026-04-25
- ~~Instagram URL on every page set to `https://www.instagram.com/aboveallit/`~~ — 2026-04-25
- ~~Trends sidebar: replaced X/Twitter and LinkedIn widgets with Instagram-focused widget~~ — 2026-04-25
- ~~New `articles.html` created and not added to header nav~~ — 2026-04-25
- ~~Trends "Read Full Article" / "Read More" links wired to articles.html anchors~~ — 2026-04-25
- ~~Home: 5th service card "AI Business Adoption" added alongside Cybersecurity~~ — 2026-04-25
- ~~Services page: matching Service 05 (AI Business Adoption) section added~~ — 2026-04-25
- ~~Home services-overview lead copy updated from "Four pillars" → "Five pillars"~~ — 2026-04-25
- ~~`sitemap.xml` had placeholder `{domain}`~~ — 2026-04-25 (replaced with `aboveallit.com`, added `articles.html` entry, bumped lastmod dates)
- ~~`robots.txt` had placeholder `{domain}`~~ — 2026-04-25 (Sitemap line now points to `https://aboveallit.com/sitemap.xml`)
- ~~Empty `CNAME` file~~ — 2026-04-25 (set to `aboveallit.com`)
- ~~`AAIT-WEBSITE.code-workspace` checked into repo~~ — 2026-04-25 (added to `.gitignore` and untracked via `git rm --cached`; file remains on disk locally)
- ~~`ABOVE_ALL_IT_BUILD_INSTRUCTIONS.md` (not intended to be public) checked into repo~~ — 2026-04-25 (added to `.gitignore` and untracked via `git rm --cached`; file remains on disk locally)
