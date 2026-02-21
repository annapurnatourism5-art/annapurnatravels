# Annapurna Tourism Static Website

Premium, multi-page static website for an India-based travel agency.

## Pages
- `index.html` (Home)
- `tours.html` (Tours list + filters)
- `itinerary.html` (Day-wise itinerary template)
- `date-of-journey.html` (Monthly grouped departures)
- `rules.html` (Rules & Regulations)
- `about.html` (Company story, values, promise)
- `contact.html` (Contact + enquiry form)

## Run Locally
Open `index.html` directly, or use a local server.

### Option 1: Python server
```bash
python3 -m http.server 8080
```
Visit: `http://localhost:8080`

### Option 2: VS Code Live Server
1. Open project folder in VS Code.
2. Install "Live Server" extension.
3. Right-click `index.html` -> "Open with Live Server".

## Deploy to GitHub Pages
1. Push this project to a GitHub repository.
2. Go to `Settings -> Pages`.
3. Under "Build and deployment":
   - Source: `Deploy from a branch`
   - Branch: `main` (or your default branch), folder `/ (root)`
4. Save and wait for deployment.
5. Your site URL will appear in the Pages settings.

## Deploy to Vercel
1. Push code to GitHub.
2. Log in to Vercel and click "Add New Project".
3. Import the repo.
4. Framework preset: `Other` (static site).
5. Build command: leave empty.
6. Output directory: leave empty (root static files).
7. Deploy.

## Connect GoDaddy Domain

### GoDaddy -> Vercel
1. In Vercel project: `Settings -> Domains`, add your domain.
2. Copy DNS records Vercel provides.
3. In GoDaddy DNS manager, add/update:
   - `A` record (for apex) as instructed by Vercel.
   - `CNAME` for `www` to Vercel target.
4. Wait for DNS propagation and verify in Vercel.

### GoDaddy -> GitHub Pages
1. In repo `Settings -> Pages`, set custom domain.
2. Add `CNAME` file in repo root containing your domain.
3. In GoDaddy DNS manager:
   - Add `A` records pointing to GitHub Pages IPs.
   - Add `CNAME` for `www` to `<username>.github.io`.
4. Wait for propagation and confirm HTTPS in GitHub Pages settings.

## Where to Edit Content

### Tour/package data
- Home featured packages: `index.html`
- Tours card list (12 sample tours): `tours.html`
- Itinerary day table + package slots: `itinerary.html`
- Month-wise journey tables: `date-of-journey.html`

### Contact details
- Footer/contact placeholders in all pages (`+91-XXXXXXXXXX`, `annapurnatourism5@gmail.com`, address)
- Main contact form and office details: `contact.html`
- Mail recipient and WhatsApp number logic: `assets/js/main.js`

## TODO Checklist (must replace before production)
- TODO: Real phone/email/address placeholders across pages
- TODO: Real WhatsApp number in links and `assets/js/main.js`
- TODO: Real tour details, dates, and prices
- TODO: Replace placeholder images in `assets/images/`

## Tech Notes
- Stack: HTML + CSS + vanilla JS
- No backend required
- Mobile nav + enquiry modal with keyboard support
- Tour category filtering on Tours page
- Intersection Observer reveal animations
- Contact form opens prefilled `mailto:` draft (static-safe)
