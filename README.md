# Lyndon Vision

Personal photography portfolio — modern editorial / dark gallery aesthetic.
Built with [Astro](https://astro.build/), single-page anchor navigation,
zero backend.

## Stack

- **Astro 4** — static site generator, ships ~zero JS
- **Vanilla CSS** — single `src/styles/global.css`, CSS variables
- **Inter + Playfair Display** — sans body + italic display accent
- **Single-page** — Hero / Work / About / Contact, smooth-scroll anchor nav
- Old multi-page routes (`/about`, `/contact`, `/series`, `/themes`,
  `/timeline`) issue `301` redirects to the corresponding anchor on `/`

## Local development

```bash
# Node 18.17+ or 20.3+
npm install
npm run dev          # http://localhost:4321
```

Production build (output → `dist/`):

```bash
npm run build
npm run preview
```

## What's where

```
lyndon-vision/
├── public/
│   ├── favicon.svg
│   └── lyndon-vision.vcf
├── src/
│   ├── components/
│   │   ├── Header.astro          # sticky nav with active-section JS
│   │   ├── Footer.astro
│   │   ├── PhotoCard.astro       # overlay-on-hover card
│   │   ├── PlaceholderPhoto.astro
│   │   └── ObfuscatedEmail.astro # base64 + reverse + JS decode
│   ├── data/photos.ts            # categories: Landscape · Portrait · Street · Nature · Architecture · Macro
│   ├── layouts/BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro           # Hero + Work (filterable grid) + About + Contact
│   │   └── …                     # legacy routes that 301 → '/#anchor'
│   └── styles/global.css
└── README.md
```

## Replacing placeholders with real photographs

1. Drop images into `public/photos/` (or `src/assets/photos/` for Astro
   image optimisation).
2. Add `src` to each entry in `src/data/photos.ts`:
   ```ts
   { id: 'l-001', title: 'Glacial Edge', src: '/photos/l-001.jpg', ... }
   ```
3. Update `src/components/PhotoCard.astro` so `<div class="img-wrap">`
   uses a real `<img>` when `photo.src` is present:
   ```astro
   {photo.src
     ? <img src={photo.src} alt={photo.title} loading="lazy" />
     : <PlaceholderPhoto preset={photo.preset} palette={photo.palette} seed={photo.id} />
   }
   ```
4. Consider Astro's `<Image />` from `astro:assets` for automatic
   responsive `srcset` + lazy loading.

## Customisation checklist

| Where                         | What to change                                       |
| ----------------------------- | ---------------------------------------------------- |
| `astro.config.mjs` — `site`   | your real domain                                     |
| `src/components/Footer.astro` | Instagram URL                                        |
| `src/pages/index.astro`       | `FORMSPREE_ENDPOINT`, 小红书/微博 handles, stats     |
| `public/lyndon-vision.vcf`    | URLs, optionally TEL                                 |
| `src/data/photos.ts`          | the actual photographs                               |

## Contact form (no backend)

The form posts to [Formspree](https://formspree.io). To wire it:

1. Sign up, create a form, copy the endpoint (`https://formspree.io/f/xxx`).
2. Replace `FORMSPREE_ENDPOINT` near the top of `src/pages/index.astro`.
3. Verify your email — first submission triggers verification.

Alternative: [Web3Forms](https://web3forms.com) — same shape, swap `action`
URL and add a hidden `<input name="access_key">`.

## Deployment

Plain static HTML/CSS/JS, so any static host works:

- **Cloudflare Pages**: connect repo, build `npm run build`, output `dist`
- **GitHub Pages**: change `base` in `astro.config.mjs` to `'/repo-name/'`,
  then use `actions-gh-pages` with `dist/` as publish dir
- **Netlify / Vercel**: zero config, both autodetect Astro

## Privacy notes

- Email on the contact section is hidden from naive scrapers via
  base64 + reversed string + client-side decode — see
  `src/components/ObfuscatedEmail.astro`. A determined scraper that runs
  JS can still read it; this filters out the regex-based majority.
- vCard is plaintext — that's by design (download → contacts).
- Form has a hidden `_gotcha` honeypot, which Formspree treats as spam.

## License

Code: MIT. Photographs (when added): all rights reserved unless stated.
