# personal_website

My personal website — built with **Next.js** (static export) and **Tailwind CSS**, deployed on **Cloudflare Pages**.

Features:
- 🎨 Colorful, playful single-page design
- 🌐 Bilingual (English / 中文) with a language toggle that remembers your choice
- 🧬 All copy lives in [`src/config/site.ts`](src/config/site.ts) — edit one file to personalize

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Static output goes to `out/` (thanks to `output: "export"` in `next.config.ts`).

## Deploy to Cloudflare Pages

1. Push this repo to GitHub (done — `git@github.com:chestnzu1/personal_website.git`).
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the `chestnzu1/personal_website` repository.
4. Build settings:
   - Framework preset: **Next.js (Static HTML Export)** (or set manually: build command `npm run build`, output directory `out`)
5. **Save and Deploy** — every push to `main` will redeploy automatically.
