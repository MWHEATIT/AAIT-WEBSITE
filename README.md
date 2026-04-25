# Above All IT — Website

Professional, SEO-optimized static website for **Above All IT**, an IT consulting business based in Sacramento, CA. Hosted on GitHub Pages.

---

## Tech Stack

- Pure HTML5 / CSS3 / Vanilla JavaScript — zero build tools, zero frameworks
- Google Fonts: Plus Jakarta Sans + Source Sans 3
- Inline SVG icons (no icon library dependency)
- Form-ready for [Formspree](https://formspree.io) (see `contact.html`)

---

## Repository Structure

```
├── index.html          # Home page
├── services.html       # Services detail page
├── about.html          # About Us page
├── success.html        # Client Success Stories page
├── contact.html        # Contact page with form
├── 404.html            # Custom 404 error page
├── css/
│   └── styles.css      # Full design system (single file)
├── js/
│   └── main.js         # Navigation, scroll, animations
├── images/             # Place all images here
├── sitemap.xml         # XML sitemap (update {domain} placeholder)
├── robots.txt          # Crawler directives (update {domain} placeholder)
├── CNAME               # Custom domain for GitHub Pages
└── README.md
```

---

## GitHub Pages Deployment

### First-Time Setup

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial site build"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings → Pages**
   - Under **Source**, select `Deploy from a branch`
   - Set branch to `main`, folder to `/ (root)`
   - Click **Save**

3. **Your site will be live at:**
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Custom Domain Setup

1. Add your domain to the `CNAME` file (one line, no `https://`):
   ```
   aboveallit.com
   ```

2. With your DNS provider, add these records:
   ```
   Type    Host    Value
   A       @       185.199.108.153
   A       @       185.199.109.153
   A       @       185.199.110.153
   A       @       185.199.111.153
   CNAME   www     YOUR_USERNAME.github.io
   ```

3. In GitHub Pages settings, enter your custom domain and enable **Enforce HTTPS**.

4. DNS propagation can take up to 24–48 hours.

---

## Post-Launch Checklist

### Domain & Routing
- [ ] Replace `{domain}` placeholders in `sitemap.xml` and `robots.txt` with your actual domain
- [ ] Set custom domain in GitHub Pages settings and populate `CNAME`
- [ ] Verify HTTPS is enforced and working

### Forms
- [ ] Create a [Formspree](https://formspree.io) account and generate a form endpoint
- [ ] Replace `action="#"` in `contact.html` with your Formspree URL (e.g. `https://formspree.io/f/XXXXXXXX`)
- [ ] Test form submission end-to-end

### SEO & Analytics
- [ ] Replace all OG image URLs (`/images/og-*.png`) with real social preview images (1200×630px recommended)
- [ ] Add actual favicon files to `/images/` (favicon.ico, apple-touch-icon.png)
- [ ] Submit `sitemap.xml` to [Google Search Console](https://search.google.com/search-console)
- [ ] Submit `sitemap.xml` to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Install Google Analytics 4 or Plausible by adding the tracking snippet before `</head>` on each page

### Google Maps
- [ ] Generate a real Google Maps embed URL for your business address
- [ ] Replace the placeholder `<iframe src>` in `contact.html`

### Social Media
- [ ] Replace `href="#"` placeholders on all social icon links with real profile URLs
- [ ] Replace Instagram oEmbed comment in `index.html` social feed section with real embedded posts (or a service like [Behold.so](https://behold.so))

### Content
- [ ] Add a phone number to footer and contact page
- [ ] Verify business hours are current
- [ ] Review all copy and confirm accuracy with the client
- [ ] Add real photography to the `/images/` folder as needed

### Performance
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev) and address any issues
- [ ] Verify lazy-loading is working on any added images (`loading="lazy"`)

### Accessibility
- [ ] Run [WAVE](https://wave.webaim.org) accessibility audit
- [ ] Test keyboard navigation across all pages
- [ ] Verify colour contrast passes WCAG AA (already designed to, but verify with real content)

---

## Local Development

No build step required. Simply open any `.html` file in a browser, or serve locally:

```bash
# Python 3
python -m http.server 8000

# Node (if npx available)
npx serve .
```

Then visit `http://localhost:8000`.

---

## Updating Content

All pages follow the same structure:
- **Navigation** and **Footer** are copy-pasted across pages (update all when changing nav links)
- **CSS variables** in `css/styles.css` `:root` block control all colors, fonts, and spacing
- **Scroll reveal animations** are class-driven (`.reveal`, `.stagger-parent`) — JS handles the rest

---

*Built with the Above All IT brand guidelines. For questions, contact support@aboveallit.com.*
