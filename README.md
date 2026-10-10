# ashik.dev

Personal site and web resume for Md Ashiqur Rahman. Nuxt 3 + Tailwind CSS, prerendered to static HTML and deployed on Cloudflare Pages.

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
npm run cf-preview # build for Cloudflare and preview with Wrangler
npm run deploy:cf  # build for Cloudflare and deploy with Wrangler
```

## Deploying

### Cloudflare Pages (Git integration)

Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → `mdashikar/ashik-resume-nuxt3`:

- Production branch: `main`
- Framework preset: Nuxt.js
- Build command: `npm run generate`
- Build output directory: `dist`

Node 22 comes from `.node-version`. Nitro detects the Pages build environment and uses the `cloudflare-pages-static` preset, so `dist/` includes `_redirects` (old PDF URLs) and `_headers`. Every push to `main` deploys to production, and other branches get preview URLs.

### Cloudflare Pages (from your machine)

```bash
npx wrangler login
npm run deploy:cf
```

This deploys to the `ashik-resume-nuxt3` Pages project (created on first deploy).

### Other hosts

Nitro picks the preset for the platform it builds on, so the same config also works on Vercel (`.vercel/output`) or any static host (`npm run generate`, upload `dist/`). The build needs Node.js 22 (`engines` in `package.json`, `.node-version`).
