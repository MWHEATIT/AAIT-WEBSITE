# AAIT Website — Punch List

Living list of issues to fix. As items get resolved, move them to the **Resolved** section at the bottom and append the date.

Last audit: 2026-04-26

---

## Design critique — needs user input before fixing

- [ ] **Testimonials remain as placeholders by user direction** — will revisit once real client names/companies/quotes are gathered. [index.html:343-371](index.html:343), and the JSON-LD `Review` block in [success.html:43-55](success.html:43) still references "Jane D." / "Mark S." which should be updated/removed at the same time.
- [ ] **Article/social cards use gradient placeholders, not images** — `.article-img-placeholder` and `.social-img` blocks throughout [trends.html](trends.html) and home "Stay Connected" section.
  - Need: confirm whether to (a) source/license stock photography, (b) use Instagram embed images once the feed is wired, or (c) accept the gradient placeholders as a stylistic choice.

---

## High priority — blocked on user-supplied assets

- [ ] **Missing Open Graph images** — pages reference `images/og-home.png`, `images/og-services.png`, `images/og-trends.png`. None exist. Social shares will fall back to no preview image.
  - Fix: add 1200×630 PNG OG images to `images/`, or remove the `og:image` / `twitter:image` meta tags.

## Medium priority — placeholder links

These `href="#"` links will refresh the page if clicked. Replace with real URLs once available.

- [ ] **LinkedIn profile** — placeholder `href="#"` in footer of all pages. Replace with real URL once available.
- [ ] **X (Twitter) profile** — placeholder `href="#"` in footer of all pages. Replace with real URL once available.
- [ ] **Facebook vanity username** — footer links currently use the numeric profile URL (`?id=61576016171471`). Once the page has a vanity handle (e.g. `facebook.com/aboveallit`), update all pages.

## Medium priority — feature work

- [ ] **Dynamic social feed (Instagram + Facebook) on Trends sidebar and home page** — single initiative replacing the two prior placeholder items. Goal: the [trends.html](trends.html) sidebar widget and the home page "Stay Connected With Us" three-card section ([index.html](index.html)) both pull live posts from `instagram.com/aboveallit` and the new Facebook business page, refreshing automatically as new posts go up.
  - **Direction confirmed** (2026-04-25): user wants minimal-maintenance — "make an occasional post and know it's on the website." → Approach (a), an embed-widget service, NOT the Graph API path.
  - **Status (2026-04-26): unblocked.**
    - Instagram `aboveallit` is confirmed as a Business/Creator account.
    - Facebook page URL: `https://www.facebook.com/profile.php?id=61589016171471`
  - **Recommended path (ready to implement):**
    - Use **Behold.so** for Instagram (free up to 50 posts, drop-in `<div>` snippet, no backend). Sign up at behold.so, connect the `aboveallit` IG account, copy the widget snippet.
    - For Facebook, **EmbedSocial** or **Elfsight** can handle both IG + FB in one widget if combining is preferred — confirm preference before signing up (third-party vendor decision, needs user choice).
    - Wire the snippet into the existing `<div id="instagramFeed">` on [trends.html](trends.html) and into the three-card section on [index.html](index.html).
    - Match widget styling to the existing `.social-card` glassmorphic look as closely as the vendor allows.
  - **Blocked on:** vendor selection (Behold-only vs. combined IG+FB widget). Present options to user before creating any account.

---

## Larger initiatives — design / brand

- [ ] **Logo / brand mark to replace the text wordmark site-wide** — the current "Above All IT" treatment is type-only (Space Grotesk wordmark with a blue "IT"). Goal: design a proper logo/mark, get user approval on a draft, then roll it out to nav (top-left), footer logo, favicon, and OG share images.
  - **Brief confirmed** (2026-04-25):
    - Style: modern, tech-forward — Tesla / SpaceX / Anthropic minimalism. Geometric, restrained, confident.
    - Symbolism to evoke: sustainable, reliable, innovative, highly advanced.
    - Palette: keep current navy `#1a1f36` + cyan-blue `#0ea5e9`. Must read in single-color (white-on-dark for nav, navy-on-light for light sections).
    - Tagline: none in the lockup (matches the Tesla/SpaceX/Anthropic style — they use the brand name only, no descriptor underneath).
    - Wordmark: keep "Above All IT" alongside the mark. Mark-only variant for favicon/avatar.
  - **Workflow:**
    1. Generate 2–4 draft directions as PNG mocks via `anthropic-skills:canvas-design`. Each draft shows: the mark alone (avatar size), the horizontal lockup (mark + "Above All IT"), and a quick mock against both light and dark website backgrounds.
    2. User reviews in chat, picks a direction (or asks for revisions).
    3. On approval, finalize as SVG (primary) + PNG fallbacks at 32×32, 180×180 (apple-touch), and 1200×630 (OG).
    4. Wire the SVG into `.nav-logo` + `.footer-logo` across all pages, replace `images/favicon.ico`, generate new `og-home.png` etc.
    5. Keep `aria-label="Above All IT — home"` on the linked logo so screen readers still hear the brand name.
  - Status: ready for step 1 (draft generation) on the next routine pass.

---

## Resolved

- ~~"100% Uptime Goal" stat was aspirational~~ — 2026-04-26 (changed to "99.9% Uptime SLA" in [index.html:186-187](index.html:186); description line unchanged)
- ~~Missing favicon (browsers 404'd on `images/favicon.ico`)~~ — 2026-04-26 (created [images/favicon.svg](images/favicon.svg): geometric cyan "A" on navy rounded square; `<link rel="icon">` updated to SVG type across all 10 pages)
- ~~Facebook footer link was placeholder `href="#"`~~ — 2026-04-26 (wired to `https://www.facebook.com/profile.php?id=61589016171471` across all 9 HTML pages; JSON-LD `sameAs` in [index.html](index.html) updated to match)
- ~~`privacy.html` and `terms.html` carried "Draft — pending legal review" callout~~ — 2026-04-26 (counsel review complete; amber draft banner removed from both pages, "Last updated" date bumped to April 26, 2026)
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
