# Kundu Special (kunduspecial.co.in) – Scraped Structure Reference

**Purpose:** Use as a generic boilerplate/reference for structure and patterns only. Content and branding remain Annapurna Tourism.

---

## 1. Site map (pages discovered)

| Page | URL | Status |
|------|-----|--------|
| Home | `/` or `/index.php` | ✓ |
| Tours (list) | `/tours/` | ✓ |
| Tour itinerary (detail) | `/tour-itinerary/?tour_id=XX` | ✓ |
| Date of Journey | `/date-of-journey/` | ✓ |
| Contact Us | `/contact/` | ✓ |
| Rules and Regulations | `/rules-and-regulations/` | ✓ |
| About | `/about/` | 404 (About content is on Home) |
| Feedback | `/feedback/` | 404 |

---

## 2. Global structure (every page)

- **Top bar / Header**
  - Logo / site name (e.g. “Kundu Special >> Best tour operator in Kolkata”)
  - Primary CTA: **Enquiry** (opens enquiry form/modal)
- **Hero / Banner**
  - Single headline: e.g. “Founder: Late Sripaticharan Kundu”
  - **News ticker:** “Seat Available : Bhutan : 31/03/2026, …” (rotating/static availability)
- **Main content**
  - Page title (H2): e.g. “About Kundu Special”, “Tours”, “Contact Us”, “Date of Journey”, “Rules and Regulations”
  - Page-specific content below
- **Footer**
  - Page links (Home, Tours, Date of Journey, Feedback, Rules and Regulations, Contact Us)
  - Contact: address, phone, fax
  - Copyright

---

## 3. Home page structure

1. **Hero** – Single strong headline (founder/tagline).
2. **News** – One-line seat-availability / announcements.
3. **About** – One or two paragraphs (brand story, legacy).
4. **Featured “Vacant” packages** – 3 blocks (e.g. Kashmir by Air, Nepal, Leh-Kargil):
   - Tour name (H3)
   - “Click for details”
   - **Table:** When | Where | Days | Fare | S/Seeing
   - CTA: “Learn More” → tour itinerary page
5. **Archived Pictures** – Gallery/section title + image captions (e.g. Sundarban, Jaishalmer, Rann of Kutch, etc.).

---

## 4. Tours page structure

- **Title:** “Tours”
- **List of tours** – Each item:
  - Tour name (e.g. Vaisnodevi, Himachal Pradesh, Rajasthan, Andaman, Kerala, Nepal, Bhutan, …)
  - Short line: “Click more link to view tour itinerary details…”
  - Link: “More” → `/tour-itinerary/?tour_id=XX`
- Long list (30+ tours); can be shown as grid/list of cards.

---

## 5. Tour itinerary (detail) page structure

- **Title:** “Tour Itinerary” + tour name (e.g. “Proposed Tour Programme for Kashmir by Air”).
- **Day-wise table:**
  - Columns: **Day | Station | Itinerary**
  - Rows: Day 1, 2, … N; station name; description.
- **“Tour Ends”** at end of itinerary.
- **Tour Packages** – Same “Date of Journey” style block:
  - Grouped by month (e.g. March-2026, April-2026)
  - Table: When | Where | Days | Fare | S/Seeing
  - “Where” links to same or other tour itinerary.

---

## 6. Date of Journey page structure

- **Title:** “Tour Packages”
- **Grouped by month** (e.g. February-2026, March-2026, April-2026, May-2026, June-2026).
- For each month:
  - **Table:** When | Where | Days | Fare | S/Seeing
  - “When” = date (e.g. 03, 07, 08).
  - “Where” = long tour name (link to itinerary).
  - “Days” = number, “Fare” = price, “S/Seeing” = optional column.

---

## 7. Contact page structure

- **Title:** “Contact Us”
- **Tagline:** “Please feel free to contact us for your most sought after travel destinations”
- **Enquiry form:** Full Name, Address, Phone, Email, Your Query, Captcha.
- **Office units** (multiple addresses):
  - Unit I: address, phone, fax, email
  - Unit II: address, phone
  - Unit III: name (e.g. Sripati Bhavan), address, phone(s)

---

## 8. Rules and Regulations page structure

- **Title:** “Rules and Regulations”
- **Sections:** A. BOOKING, B. RAIL AND AIR TICKET, C. CANCELLATION, D. GENERAL RULES
- Dense policy text (booking amount, room allotment, child/infant charges, GST, rail/air, cancellation slabs, refunds, luggage, liability, etc.).
- **Note** at end (staff, complaints, polite behaviour).
- **Office hours:** e.g. Mon–Fri 10–6, Sat 10–2:30, Sunday & holiday closed.

---

## 9. Reusable UI patterns (boilerplate)

| Pattern | Description |
|--------|-------------|
| **Enquiry CTA** | Sticky or header button “Enquiry” → form/modal or contact page |
| **News / ticker** | One-line announcement (seat availability, dates) |
| **Tour card** | Title + short text + “More”/“Learn More” → itinerary |
| **Vacant table** | When \| Where \| Days \| Fare \| S/Seeing |
| **Itinerary table** | Day \| Station \| Itinerary |
| **Multi-unit contact** | Several offices with address, phone, fax, email |
| **Policy page** | Sections A, B, C, D with numbered clauses |
| **Gallery block** | “Archived Pictures” / gallery with captions |

---

## 10. Navigation (footer + header)

- **Header:** Logo, Enquiry.
- **Footer / Page links:** Home, Tours, Date of Journey, Feedback, Rules and Regulations, Contact Us.

---

## 11. Content we are NOT copying

- All Kundu Special text (founder name, 92 years, films, authors, celebrity clientele).
- Tour names, dates, prices, itineraries (Kashmir by Air, Nepal, etc.).
- Contact addresses, phone numbers.
- Exact wording of rules and regulations.

This file is only a **structural and UX reference** for Annapurna Tourism’s site (e.g. adding a “Date of Journey”–style page, enquiry CTA, rules page, or itinerary-style layout).
