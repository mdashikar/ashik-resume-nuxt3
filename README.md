# ashik.dev

Personal site and web resume for Md Ashiqur Rahman. Nuxt 3 + Tailwind CSS, prerendered to static HTML and deployed on Vercel.

## Editing content

All copy lives in [`data/profile.ts`](data/profile.ts):

- `profile`: name, intro, availability, links
- `building`: products I'm working on now (Feevox, Erestro)
- `shipped`: products shipped at Dorik (Consently, Postmonk)
- `experience`, `skills`, `education`

The home page and `/resume` both render from it. The downloadable PDF in `public/files/` is a separate document, so update it too when the resume changes (and `site.resumePdf` if the filename changes). Old PDF URLs are 301-redirected in the `nitro:config` hook in `nuxt.config.ts`.

## Structure

```
data/profile.ts            content (single source of truth)
pages/index.vue            home: hero, now building, shipped, experience, contact
pages/resume.vue           print-friendly web resume + PDF download
error.vue                  404 and error page
components/                sections and UI pieces
composables/usePageSeo.ts  meta tags, Open Graph and JSON-LD
assets/css/main.css        theme tokens (light / dark), base styles, print styles
public/                    favicons, OG image, robots.txt, sitemap.xml, resume PDF
```

Colours are CSS variables (`--bg`, `--ink`, `--accent`, …) defined in `assets/css/main.css` and exposed to Tailwind in `tailwind.config.js`. Dark mode follows the system setting until the visitor toggles it.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # vue-tsc
npm run generate   # static, prerendered build in dist/
npm run cf-preview # preview dist/ with Wrangler (Cloudflare Pages)
```

## Deploying

Production deploys come from Vercel's Git integration on pushes to `main` (preview deploys for other branches). Nitro detects the platform at build time, so the same config also works on Cloudflare Pages or any static host:

- Vercel: `npm run build` or `npm run generate`; output goes to `.vercel/output` automatically.
- Cloudflare Pages: build command `npm run generate`, output directory `dist`.
- Anywhere else: `npm run generate` and upload `dist/` (a link to `.output/public`).

The build needs Node.js 22 (`engines` in `package.json`).
