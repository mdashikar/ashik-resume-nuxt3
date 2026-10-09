# ashik.dev

Personal portfolio and web resume for Md Ashiqur Rahman — built with Nuxt 3 + Tailwind CSS and deployed to Cloudflare Pages.

## Editing content

All copy lives in [`data/profile.ts`](data/profile.ts): summary, highlights, projects, experience, skills, education and testimonials. Both the home page and `/resume` render from it.

When the resume changes, update `data/profile.ts` **and** replace the PDF in `public/files/` (then update `site.resumePdf` if the filename changes). Old PDF URLs are 301-redirected via `routeRules` in `nuxt.config.ts`.

## Structure

```
data/profile.ts           content (single source of truth)
pages/index.vue           home: hero, work, experience, skills, testimonials, contact
pages/resume.vue          print-friendly web resume + PDF download
components/               sections and UI pieces
composables/usePageSeo.ts meta tags, Open Graph and JSON-LD
assets/css/main.css       theme tokens (light / dark) and base styles
```

Colors are CSS variables (`--paper`, `--ink`, `--accent`, …) defined in `assets/css/main.css` and exposed to Tailwind in `tailwind.config.js`. Dark mode follows the system setting until the visitor toggles it.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static, prerendered build in dist/
npm run cf-preview # preview dist/ with Wrangler
```

Pages are server-rendered at build time (prerendered), so search engines and link previews get full HTML.
