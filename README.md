# Anbariyya Islamic Institute — Platform Prototype

A clickable prototype of the Anbariyya digital platform (Tamale, Ghana), built to gather feedback from the Institute's leadership and stakeholders.

> **All names, dates, figures and images are sample content** pending verification by the Institute. The only real texts are the Qur'an verse (20:114), the first hadith of al-Nawawi's Forty, and the titles of classical works in the sample library.

## What's inside

| Page | What it demonstrates |
|---|---|
| Home `/en/` · `/ar/` | Full institutional homepage, English and Arabic (right-to-left) |
| Our Founder | Heritage archive layout: sourced timeline, writings, restored lectures, testimonies |
| Academics | Proposed programme structure and admissions steps |
| Knowledge Centre | Working search across Arabic/English (ignores vowel marks and alif forms; accepts Latin spelling) |
| Announcements | Moon sighting announcement with verified badge, audio and sharing |
| Alerts | SMS/email sign-up with a simulated SMS code |
| Admin preview | Two-person approval: draft → second officer approves → send with delivery report |
| Get the app | Installs to a phone home screen (works offline for visited pages) |

Nothing is actually sent or stored — every interactive part is simulated in the browser.

## Run it on your computer

Requires [Node.js 20+](https://nodejs.org).

```powershell
npm install
npm run dev
```

Then open http://localhost:3000/anbariyya-prototype/en/

## Publish to GitHub Pages

1. Push this folder to the `main` branch of `anbariyya-prototype`.
2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Each push to `main` rebuilds the site (see the **Actions** tab). It appears at
   `https://<username>.github.io/anbariyya-prototype/`.

The repository must be **public** for Pages on a free GitHub account. The site asks search engines not to index it.

## How it's built (and how it grows)

- **Next.js 15 + TypeScript + Tailwind CSS**, exported as a static site.
- Sample content lives in `src/data/content.ts`; interface text in `src/lib/i18n.ts` (English + Arabic).
- After approval, the plan is to replace the sample data with **Supabase** (database, logins, file storage), add real SMS/email sending through a Ghanaian SMS provider, and move hosting to Vercel. The pages and components carry over unchanged.

## Still to confirm with the Institute

- Official name in Arabic, logo, and the correct spelling of the founder's name in Arabic and English
- Verified biography, dates and sources for the founder timeline
- Actual programmes, entry requirements and durations
- Leadership welcome message, photographs, contact details
- Arabic interface wording (first draft — needs review by Arabic faculty)
- Approved donation channels
