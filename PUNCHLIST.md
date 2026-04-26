# AAIT Website — Punch List

Living list of issues to fix. As items get resolved, move them to the **Resolved** section at the bottom and append the date.

Last audit: 2026-04-25 (design critique pass — items added below)

---

## Design critique — needs user input before fixing

- [ ] **Testimonials remain as placeholders by user direction** — will revisit once real client names/companies/quotes are gathered. [index.html:343-371](index.html:343), and the JSON-LD `Review` block in [success.html:43-55](success.html:43) still references "Jane D." / "Mark S." which should be updated/removed at the same time.
- [ ] **Article/social cards use gradient placeholders, not images** — `.article-img-placeholder` and `.social-img` blocks throughout [trends.html](trends.html) and home "Stay Connected" section.
  - Need: confirm whether to (a) source/license stock photography, (b) use Instagram embed images once the feed is wired, or (c) accept the gradient placeholders as a stylistic choice.
- [ ] **"100% Uptime Goal" stat is aspirational and unsubstantiated** [index.html:174](index.html:174) — sits next to verifiable claims ("24/7 Support", "Local") and erodes trust by association.
  - Need: confirm a real measurable to swap in (e.g., "<30-min response", "99.9% SLA", "5-yr avg uptime") OR approval to replace this stat with something concrete.

## Design critique — high priority, can fix without input

- [ ] **Hero CTAs have near-equal visual weight** — primary blue button and outline "Our Services" button compete; conversion path is ambiguous. [index.html:134-140](index.html:134)
  - Fix: keep `.btn-primary` as-is, demote `.btn-outline` in the hero to a `.btn-ghost` or text-link treatment so "Free Consultation" is unambiguously dominant.
- [ ] **Nav-link touch targets are too small** — `padding-bottom: 3px` only, total tap area ~20px tall. WCAG 2.1 AA wants 44×44. [styles.css:195](css/styles.css:195)
  - Fix: add vertical padding to `.nav-links a` so tap area reaches ≥44px.
- [ ] **Tablet users (768–1023px) don't see the "Free Consultation" CTA** — `.nav-actions` is hidden until 1024px. [styles.css:304](css/styles.css:304)
  - Fix: show `.nav-actions` from 768px (compact variant if needed).
- [ ] **`<em>` used for visual styling on "Superior IT"** — semantically wrong; `em` means emphasis. [index.html:127](index.html:127)
  - Fix: replace with `<span class="hero-accent">` and move the existing `.hero h1 em` style to `.hero-accent`.

## Design critique — medium priority, can fix without input

- [ ] **Value-prop intro paragraph is 60+ words of dense prose** between hero and stats grid — most users will skip it. [index.html:152](index.html:152)
  - Fix: cut to one sentence, OR hoist its strongest line into the hero subhead and delete the intro entirely.

## Design critique — low priority polish

- [ ] **Section padding feels tight on 1440px+ displays** — `.section { padding: 4rem 0 }`. [styles.css:105](css/styles.css:105)
  - Fix: change to `padding: clamp(4rem, 8vw, 7rem) 0`.
- [ ] **Card hover transforms inconsistent** — `.service-card` uses `translateY(-6px) scale(1.02)`, `.stat-card` uses `translateY(-5px)` only, buttons use `translateY(-2px) scale(1.03)`.
  - Fix: standardize to two scales (subtle for buttons, pronounced for cards) — pick one transform per surface type.
- [ ] **Icon sizes inconsistent** — 26 / 28 / 24 / 17 / 16 / 15 across the page; social icons (15/17) sit awkwardly next to service icons (28).
  - Fix: snap to a 16/20/24/28 scale.
- [ ] **Eyebrow vs section-label inconsistency** — hero eyebrow has a pulse dot; other section-labels don't.
  - Fix: pick one treatment for both, or make the distinction intentional (e.g., pulse dot only on the hero/page-hero eyebrows).
- [ ] **Scroll-hint text contrast fails WCAG** — `rgba(240,244,248,.30)` on navy ≈ 2.8:1. Currently `aria-hidden`, so functionally OK, but visible low-vision users will struggle. [styles.css:457](css/styles.css:457)
  - Fix: bump opacity to `.55+` on `.hero-scroll-hint`.

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

- ~~Phone number missing site-wide~~ — 2026-04-25 (added `(916) 236-9115` / `tel:+19162369115` to nav, mobile menu, and footer "Get In Touch" across all 8 HTML pages; added Phone item to contact-info-panel on contact.html; added `telephone` to LocalBusiness JSON-LD on index.html and success.html)
- ~~Certifications / partners logo strip~~ — 2026-04-25 (closed without action; user confirmed Above All IT does not have formal partner relationships with Anthropic, Nvidia, or Microsoft, so a logo strip claiming partnership would be inaccurate; existing copy mentions of Microsoft/Cisco/AWS expertise reflect technical certifications and stay as-is)
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
