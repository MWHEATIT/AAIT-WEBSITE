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
- [ ] **Legal review of `privacy.html` and `terms.html`** — both pages exist as functional drafts with prominent "Draft — pending legal review" notices. Before they are treated as binding policy, they should be reviewed by counsel and the draft notice + "Last updated" date should be updated. Specific items to confirm: data-handling section (CCPA/CPRA accuracy), governing-law clause (currently California / Sacramento County), liability cap, and confidentiality language vs. the actual client service agreement.

## Medium priority — feature work

- [ ] **Instagram feed on [trends.html](trends.html) is placeholder-only** — until the Behold.so (or Elfsight / EmbedSocial) embed snippet is pasted into `<div id="instagramFeed">`, the sidebar shows two static placeholder cards. New IG posts will not appear automatically. See HTML comment above the widget for setup steps.

- [ ] **Home page "Stay Connected With Us" social cards** — three hardcoded post cards in [index.html](index.html) are static. Consider wiring these to the same Instagram embed used on Trends, or to live IG profile data.

---

## Resolved

- ~~Privacy Policy and Terms of Service footer links were dead `href="#"`~~ — 2026-04-25 (created `privacy.html` and `terms.html` as functional drafts modeled on the existing page-hero / section-light pattern; both carry a prominent "Draft — pending legal review" amber callout. New `.legal-draft` / `.legal-content` styles added to [css/styles.css](css/styles.css). Footer-legal links updated from `#` to `privacy.html` / `terms.html` across all 7 main pages [index.html](index.html), [services.html](services.html), [about.html](about.html), [contact.html](contact.html), [success.html](success.html), [trends.html](trends.html), [articles.html](articles.html). Both pages added to [sitemap.xml](sitemap.xml). The legal review of these drafts is now its own open punchlist item under "needs user input")
- ~~Live site at aboveallit.com missing all stylization (CSS 404, stale HTML)~~ — 2026-04-25 (root cause: GitHub Pages legacy Jekyll build had been erroring on every push since commit 85c41f8 on 2026-04-25 05:09 UTC, leaving the site frozen on the last successful build's snapshot — that snapshot referenced css/styles.css but the failed deploys never republished it. Fix: added empty `.nojekyll` file at repo root to bypass Jekyll entirely, since this is a static-HTML site with no Liquid templating. Committed as 7733562 and pushed.)
- ~~Hero CTAs had near-equal visual weight~~ — 2026-04-25 (added `.hero-ctas .btn-outline` override demoting "Our Services" to a transparent text-link with arrow; added arrow icon to the markup so primary "Get a Free Consultation" is unambiguously dominant)
- ~~Nav-link touch targets too small (~20px)~~ — 2026-04-25 (`.nav-links a` now uses `padding: 0.75rem 0.25rem`, `min-height: 44px`, and inline-flex centering; underline `::after` repositioned to `bottom: 0.5rem` to track the new padding)
- ~~Tablet users (768–1023px) couldn't see "Free Consultation" CTA~~ — 2026-04-25 (moved `.nav-actions { display: flex }` to the 768px breakpoint; phone link kept hidden until 1024px to avoid cramping the bar)
- ~~`<em>` used for visual styling on "Superior IT"~~ — 2026-04-25 (replaced with `<span class="hero-accent">` in [index.html](index.html); CSS rule renamed from `.hero h1 em` to `.hero h1 .hero-accent`)
- ~~Value-prop intro paragraph too long (60+ words)~~ — 2026-04-25 (trimmed to one sentence: "From your first help-desk call to a full-scale cloud migration, Above All IT is your technology partner at every step.")
- ~~Section padding tight on 1440px+ displays~~ — 2026-04-25 (`.section` padding changed from `var(--sp-16)` to `clamp(4rem, 8vw, 7rem)` so spacing scales with viewport)
- ~~Card hover transforms inconsistent~~ — 2026-04-25 (`.stat-card` hover bumped from `translateY(-5px)` to `translateY(-6px) scale(1.02)` to match `.service-card`)
- ~~Icon size scale inconsistencies~~ — 2026-04-25 (stat icons 26→28 across home, about, success; social-platform icons 15→16; footer-social icons 17→16 across all 7 pages)
- ~~Eyebrow vs section-label treatment~~ — 2026-04-25 (closed as intentional; `.hero-eyebrow` is a pill-with-pulse-dot reserved for the home hero, `.section-label` is the inline-text variant used in section headers and page-hero — distinct on purpose)
- ~~Scroll-hint text contrast failed WCAG~~ — 2026-04-25 (`.hero-scroll-hint` color opacity bumped from .30 to .55, lifting contrast above 4.5:1)
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
