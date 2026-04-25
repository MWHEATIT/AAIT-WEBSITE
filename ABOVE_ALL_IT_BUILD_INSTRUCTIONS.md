# Above All IT — Website Build Instructions for Claude Code

## Project Overview

Build a professional, SEO-optimized static website for **Above All IT**, an IT consulting business operating in the Sacramento, California area. The site will be hosted on **GitHub Pages** as a multi-page static HTML/CSS/JS site. No frameworks or build tools required — pure static files that deploy directly.

---

## Repository Structure

```
above-all-it-website/
├── index.html              # Home page
├── services.html           # Our Services page
├── about.html              # About Us page
├── success.html            # Client Success / Testimonials page
├── contact.html            # Contact page
├── css/
│   └── styles.css          # Main stylesheet (all pages)
├── js/
│   └── main.js             # Shared JS (mobile nav, scroll effects, social feed)
├── images/                 # Directory for logo, icons, hero images
│   └── (placeholder SVGs or optimized images)
├── sitemap.xml             # SEO: sitemap for search engines
├── robots.txt              # SEO: crawler instructions
├── 404.html                # Custom 404 error page
├── CNAME                   # Custom domain config (leave empty, owner will fill in)
└── README.md               # Repo documentation
```

---

## Design Direction

### Aesthetic
- **Professional, clean, and trustworthy** — this is B2B IT consulting, not a startup landing page.
- **Dark navy/charcoal primary palette** with a sharp accent color (electric blue or teal) to convey tech sophistication without being generic.
- **Light sections alternated with dark sections** for visual rhythm and readability.
- Avoid: generic SaaS gradients, purple-on-white AI aesthetics, stock photo vibes.

### Typography
- Use **Google Fonts** only (free, no licensing issues).
- Pair a strong display/heading font (e.g., "Plus Jakarta Sans", "Outfit", "Sora", or "Lexend") with a clean readable body font (e.g., "Source Sans 3", "DM Sans", or "Nunito Sans").
- Do NOT use Inter, Roboto, Arial, or system fonts as primary choices.
- Headings should feel bold and authoritative. Body text should be highly readable at 16-18px base.

### Color Palette (CSS Variables)
Define a cohesive palette in `:root`. Suggested direction:
```
--color-primary:       deep navy or charcoal (#1a1f36 or similar)
--color-accent:        electric blue or teal (#0ea5e9 or #06b6d4 or similar)
--color-accent-hover:  slightly lighter/darker accent for interactions
--color-text:          near-white for dark sections (#f0f4f8)
--color-text-dark:     dark text for light sections (#1e293b)
--color-bg-light:      off-white or very light gray (#f8fafc)
--color-bg-dark:       matches or complements primary
--color-success:       green for trust signals (#10b981)
--color-border:        subtle border color (#e2e8f0)
```

### Layout Principles
- Mobile-first responsive design (breakpoints at 768px and 1024px minimum).
- Max content width of ~1200px, centered with generous padding.
- Consistent spacing scale (use multiples of 8px).
- Sections should breathe — don't crowd content.

---

## Page-by-Page Specifications

### Global Header (all pages)
- Sticky/fixed navigation bar at top.
- Left: Company name "Above All IT" as text logo (styled with accent color or bold weight). If a logo image is available later, it replaces this.
- Right: Navigation links — Home | Our Services | About Us | Client Success | Contact
- Mobile: Hamburger menu that slides in or drops down.
- Active page should be visually indicated in the nav.
- Include a CTA button in the nav: "Free Consultation" that links to contact.html.

### Global Footer (all pages)
- Dark background section.
- Three columns (stacked on mobile):
  - **Column 1:** Company name, one-line tagline, and brief description.
  - **Column 2:** Quick links mirroring the navigation.
  - **Column 3:** Contact info (phone placeholder, email: support@aboveallit.com, address placeholder, hours: Mon-Fri 8AM-6PM).
- **Social media icons row:** Include linked icons for Instagram, Facebook, LinkedIn, and X/Twitter. Use simple SVG icons (no Font Awesome CDN dependency — inline SVGs or a small local icon set). Links should be `#` placeholders with `target="_blank"` and `rel="noopener noreferrer"`.
- Bottom bar: `© 2026 Above All IT. All rights reserved.` plus links to Privacy Policy and Terms of Service (can be `#` placeholders).

---

### 1. Home Page (`index.html`)

**Hero Section:**
- Full-width dark background with subtle geometric pattern, gradient mesh, or abstract tech-themed CSS background (no stock images needed).
- Headline: `Elevating Your Business Through Superior IT Solutions`
- Sub-headline: `Above All IT provides enterprise-grade technology support, cybersecurity, and strategic consulting for businesses of all sizes.`
- Two CTA buttons: "Get a Free Consultation" (primary accent) and "Our Services" (outline/ghost style). Link to contact.html and services.html respectively.
- Subtle entrance animation on load (fade-up or slide-in for text elements, staggered).

**Value Proposition Section:**
- Light background section.
- Short paragraph: "At Above All IT, we believe technology should empower your business, not hold it back. Our dedicated team of certified professionals ensures your infrastructure is secure, optimized, and ready to scale."
- Optionally pair with 3 icon-stat blocks (e.g., "24/7 Support", "100% Uptime Goal", "Sacramento Local") using simple inline SVG icons.

**Services Overview (abbreviated):**
- Section with 4 service cards in a responsive grid (2x2 on desktop, stacked on mobile).
- Each card: icon (inline SVG), service name, 1-2 sentence summary, and a "Learn More →" link to services.html with an anchor.
- Services: Managed IT Support, Cybersecurity Solutions, Cloud Computing & Migration, Network Infrastructure.
- Cards should have hover effects (subtle lift/shadow or border-accent transition).

**Why Choose Us (abbreviated):**
- 4 feature highlights in a row/grid with icons:
  - Rapid Response Times
  - Tailored Strategies
  - Transparent Pricing
  - Experienced Professionals
- Keep text short here — one sentence each.

**Testimonial Preview:**
- Show 1-2 testimonials in a styled quote block or card.
- Include a "See More Success Stories →" link to success.html.

**CTA Banner:**
- Full-width accent-colored or dark section.
- Text: "Ready to optimize your business technology?"
- Button: "Schedule Your Free Assessment" → links to contact.html.

---

### 2. Our Services Page (`services.html`)

- Page hero/banner: smaller than home hero. Title: "Our Services". Subtitle: "Comprehensive IT solutions tailored to your business."
- **4 detailed service sections**, each with:
  - An anchor ID (e.g., `id="managed-it"`) so home page cards can deep-link.
  - Service name as an H2.
  - Full description paragraph.
  - Key features as a short list (3-4 bullet points styled as checkmarks or custom list icons).
  - Alternating layout: odd sections text-left, even sections text-right (or alternating background colors).

**Service Details:**

1. **Managed IT Support** — Proactive monitoring and maintenance of your entire IT infrastructure to prevent downtime before it occurs.
   - 24/7 Help Desk Support
   - Remote & On-site Assistance
   - Patch Management

2. **Cybersecurity Solutions** — Robust defense mechanisms designed to protect your sensitive data from evolving internal and external threats.
   - Threat Detection & Response
   - Employee Security Training
   - Firewall & Antivirus Management

3. **Cloud Computing & Migration** — Seamless transition to cloud environments, enabling remote work, improved collaboration, and data redundancy.
   - Microsoft 365 & Google Workspace
   - Cloud Backup Solutions
   - Server Virtualization

4. **Network Infrastructure** — Design, implementation, and optimization of robust networking systems to ensure maximum connectivity and speed.
   - Router & Switch Configuration
   - Wireless Network Setup
   - VPN Implementations

- End with a CTA section: "Not sure what you need? Let's talk." → contact.html.

---

### 3. About Us Page (`about.html`)

- Page hero/banner with title: "About Above All IT"
- **Mission section:** Write a professional mission statement about providing reliable, honest, and high-quality IT services to Sacramento-area businesses. Emphasize local presence, hands-on approach, and long-term partnerships.
- **Why We're Different section:** Expand on the 4 differentiators (Rapid Response, Tailored Strategies, Transparent Pricing, Experienced Professionals) with fuller descriptions than the home page.
- **Service Area:** Mention Sacramento, CA and surrounding areas. This is important for local SEO.
- End with CTA to contact page.

---

### 4. Client Success Page (`success.html`)

- Page hero/banner with title: "Client Success Stories"
- **Testimonials section:** Display the following testimonials in styled quote cards:

  > "Above All IT completely transformed our network infrastructure. We used to experience weekly outages, but since they took over our managed services, we have had 100% uptime. Highly recommended!" — Jane D., Operations Manager

  > "Their cybersecurity team found vulnerabilities we did not even know we had. I sleep much better at night knowing our customer data is secure." — Mark S., CEO

- Style each testimonial as a card with a large quotation mark icon, the quote text, and the attribution below.
- Leave room for additional testimonials to be added easily (just duplicate the card HTML pattern).
- Optionally add a "Share Your Experience" CTA linking to contact.html.

---

### 5. Contact Page (`contact.html`)

- Page hero/banner with title: "Get in Touch"
- **Two-column layout** (stacked on mobile):
  - **Left column:** Contact form with fields for Name, Email, Phone, Company Name, and Message. Include a Submit button styled with the accent color. The form should use `action="#"` and `method="POST"` as a placeholder — add a comment in the HTML noting the owner should connect this to a form handler (Formspree, Google Forms, Netlify Forms, or similar free service).
  - **Right column:** Contact information block with phone (placeholder), email, address (placeholder), and business hours. Optionally embed a Google Maps iframe showing Sacramento, CA area (use a generic Sacramento center point).
- Add a note/comment in the code: `<!-- TODO: Replace form action with your form handler (e.g., https://formspree.io/f/your-id) -->`

---

## Social Media Integration

### Social Icons (Footer + optionally a dedicated section)
- Use inline SVG icons for Instagram, Facebook, LinkedIn, and X/Twitter.
- Style them with the accent color, with hover transition to a lighter shade.
- All links are `#` placeholders with comments to insert real URLs.

### Featured Social Feed Section (Home Page, optional)
- Build a simple "Follow Us" or "Latest Updates" section near the bottom of the home page.
- Create a responsive grid (3 cards on desktop, scrollable or stacked on mobile).
- Each card is a placeholder styled like a social media post preview (image placeholder area + caption area + platform icon + "View Post →" link).
- Add a code comment explaining how to embed real Instagram posts using Instagram's oEmbed (`https://www.instagram.com/p/{POST_ID}/embed/`) inside an iframe when ready.
- Keep this lightweight — no third-party scripts loaded by default.

---

## SEO Requirements

### Meta Tags (every page)
Each HTML page must include in `<head>`:
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{Page Title} | Above All IT - Sacramento IT Consulting</title>
<meta name="description" content="{Unique 150-160 char description for each page}">
<meta name="keywords" content="IT consulting Sacramento, managed IT services, cybersecurity, cloud computing, network infrastructure, Above All IT">
<link rel="canonical" href="https://{domain}/{page}.html">

<!-- Open Graph -->
<meta property="og:title" content="{Page Title} | Above All IT">
<meta property="og:description" content="{Same as meta description}">
<meta property="og:type" content="website">
<meta property="og:url" content="https://{domain}/{page}.html">
<meta property="og:image" content="https://{domain}/images/og-image.png">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{Page Title} | Above All IT">
<meta name="twitter:description" content="{Same as meta description}">
```
- Use `{domain}` as a placeholder throughout — add a comment at the top of each file noting to replace it.

### Structured Data (Home Page)
Add JSON-LD structured data in the `<head>` of `index.html`:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Above All IT",
  "description": "Enterprise-grade IT consulting, cybersecurity, and managed services for businesses in Sacramento, CA.",
  "url": "https://{domain}",
  "telephone": "{phone}",
  "email": "support@aboveallit.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sacramento",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "areaServed": "Sacramento, CA",
  "openingHours": "Mo-Fr 08:00-18:00",
  "sameAs": [
    "{instagram_url}",
    "{facebook_url}",
    "{linkedin_url}",
    "{twitter_url}"
  ]
}
```

### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://{domain}/</loc><priority>1.0</priority></url>
  <url><loc>https://{domain}/services.html</loc><priority>0.9</priority></url>
  <url><loc>https://{domain}/about.html</loc><priority>0.7</priority></url>
  <url><loc>https://{domain}/success.html</loc><priority>0.6</priority></url>
  <url><loc>https://{domain}/contact.html</loc><priority>0.8</priority></url>
</urlset>
```

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://{domain}/sitemap.xml
```

---

## Performance & Accessibility

- All images must use `alt` attributes with descriptive text.
- Use semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Ensure color contrast meets WCAG AA standards (especially text on dark backgrounds).
- All interactive elements must be keyboard-navigable.
- Form inputs must have associated `<label>` elements.
- Keep total CSS under one file. Keep total JS under one file. No external dependencies other than Google Fonts.
- Lazy-load any images below the fold with `loading="lazy"`.
- Add `aria-label` attributes to icon-only links (social media icons).

---

## GitHub Pages Deployment Notes

Include these as comments in `README.md`:

1. Push all files to the `main` branch of the repository.
2. Go to **Settings → Pages** in the GitHub repo.
3. Set source to **Deploy from a branch**, select `main` and `/ (root)`.
4. The site will be live at `https://{username}.github.io/{repo-name}/`.
5. To use a custom domain: add your domain in the Pages settings and update the `CNAME` file with your domain name.
6. After deployment, submit the sitemap to **Google Search Console** at `https://search.google.com/search-console/`.
7. Connect **Google Analytics** by adding the GA4 tracking snippet to each page's `<head>` (placeholder comment already included in the HTML).

---

## Post-Build Checklist (for the site owner)

- [ ] Replace all `{domain}` placeholders with your actual domain
- [ ] Replace all `{phone}` placeholders with your business phone number
- [ ] Replace address placeholder with your business address
- [ ] Update social media icon links with real profile URLs
- [ ] Add a real logo image to `/images/` and update the header
- [ ] Connect the contact form to a free form handler (Formspree recommended)
- [ ] Set up Google Search Console and submit sitemap.xml
- [ ] Set up Google Analytics (GA4) and add tracking code
- [ ] Claim/update Google Business Profile and link to the new website
- [ ] Add a real OG image at `/images/og-image.png` (recommended 1200x630px)
- [ ] Replace testimonial placeholder names with real client names (with permission)
- [ ] Add real social media post embeds to the social feed section when ready

---

## Summary for Claude Code

When connected to the repo, build this site file-by-file following the structure and specifications above. Prioritize:
1. Clean, semantic HTML with full SEO markup on every page.
2. A single cohesive CSS file with CSS variables, responsive design, and polished visual design.
3. Minimal JS for mobile navigation toggle, smooth scroll, and any scroll-triggered animations.
4. All placeholder content clearly marked with comments for easy replacement.
5. Every file committed and ready for GitHub Pages deployment with zero build steps.
