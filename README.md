# Meka Indranadh — Frontend Developer Portfolio

A responsive Next.js portfolio with a dark navy, cyan and violet visual system.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before publishing

1. Add your current resume as `public/resume.pdf` (the download buttons point to this path).
2. Add verified project demo and GitHub URLs in `lib/data.js` where `demoUrl` and `repoUrl` are currently empty.
3. Confirm the Lauratek role title and period in `lib/data.js`; it is intentionally described conservatively until exact details are confirmed.
4. Configure the contact form environment variables using `.env.example`.
5. Set `SITE_URL` to your deployed domain for canonical metadata and sitemap generation.

## Main sections

Home, About, Technical Skills, Featured Projects, Work Experience, Resume and Contact.

## Notes

The portfolio avoids invented project URLs, testimonials, client-satisfaction figures or an unprovided profile photograph. Add only verified information before sending it to recruiters.
