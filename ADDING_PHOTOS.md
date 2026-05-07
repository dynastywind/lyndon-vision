# Adding Your Own Photos

This guide is written for the workflow where your originals come out of
Lightroom Classic / Capture One / Phocus at 60–100 MP and you want them
to render fast and sharp on the web.

## TL;DR

1. Export web JPEGs from your editor at the sizes recommended below.
2. Drop the files into `public/photos/`.
3. Edit `src/data/photos.ts` and set the `src` field on each photo.
4. (Optional) Set `HERO_PHOTO` near the top of `src/pages/index.astro`.
5. `npm run dev` → check at `http://localhost:4321`.

## Step 1 — Export sizes

You do **not** want to ship 100 MP JPEGs to the web. The browser only
shows about 0.3 — 4 MP at most, depending on the slot. Anything more is
wasted bandwidth.

Recommended export sizes for this site (long edge, sRGB, no profile,
strip metadata):

| Slot                                  | Display logical size | Long edge | Format          | Quality   | Target file size |
| ------------------------------------- | -------------------- | --------- | --------------- | --------- | ---------------- |
| Hero (full-bleed background)          | up to 1920px wide    | **2560**  | JPEG (or AVIF)  | 85 / 70   | 400 — 900 KB     |
| Featured / `wide` card (span-2)       | up to 880px wide     | **2000**  | JPEG (or AVIF)  | 85 / 70   | 250 — 600 KB     |
| Standard / `tall` / `square` card     | up to 600px wide     | **1600**  | JPEG (or AVIF)  | 80 / 65   | 150 — 400 KB     |
| Mobile thumbnail fallback             | up to 600px wide     | 800       | JPEG            | 80        | 60 — 200 KB      |
| About-section portrait                | up to 600px wide     | 1600      | JPEG            | 85        | 200 — 500 KB     |

Why these numbers, given that your sensor is 60 — 100 MP:

- Display devices cap out at around **4K (3840 × 2160 = 8.3 MP)** for
  full-screen, and most laptops are still 1440 × 900 native at 2× DPR
  → effectively 2880 × 1800 = 5 MP. **2560 px on the long edge is the
  practical ceiling for web.**
- A photo card is at most ~440 × 550 logical px on a 1320 px container
  (3-col grid). At 2× DPR that's 880 × 1100 native → **1600 px long
  edge gives you a comfortable 1.5× retina margin.**
- Past quality 85 the JPEG file size grows roughly linearly while
  perceived quality plateaus. 80 — 85 is the sweet spot for online
  display.

If you want cutting-edge compression: also export an **AVIF** version
at quality 65 — 70. AVIF cuts size by another 30–50% versus JPEG with
no visible loss. Use the `<picture>` pattern shown below to provide
both with JPEG fallback.

### Lightroom Classic export preset

```
File Settings:
  Image Format: JPEG
  Quality:      85
  Color Space:  sRGB
  Limit File Size: (unchecked)

Image Sizing:
  Resize to Fit: Long Edge
  Don't Enlarge: ✓
  Long Edge:    2560 (or 1600 for cards)
  Resolution:   72 ppi   (irrelevant for web, just put 72)

Output Sharpening:
  Sharpen For: Screen
  Amount:      Standard

Metadata:
  Include: Copyright Only
  Remove Location Info: ✓ (privacy)
```

Save it twice — once at long edge **2560** for hero/featured, once at
**1600** for the standard grid.

### Capture One / Phocus equivalents

Both have "Process Recipe" / "Output Recipe" with the same parameters.
Save two recipes named `Web 2560 q85` and `Web 1600 q80`.

### macOS ImageMagick / sips one-liners

If you'd rather batch from the terminal:

```bash
# 100 MP TIFF → 2560 px long edge JPEG q=85, sRGB, stripped metadata
mogrify -resize '2560x2560>' -quality 85 -strip \
        -colorspace sRGB -path out/ /Users/you/Pictures/exports/*.tif

# Same with sips (built into macOS, slightly slower):
for f in *.jpg; do
  sips --resampleHeightWidthMax 2560 -s format jpeg -s formatOptions 85 \
       "$f" --out "out/$f"
done
```

## Step 2 — Drop the files in

Project layout:

```
public/photos/
├── hero-2560.jpg
├── l-001-1600.jpg
├── l-001-2560.jpg
├── l-001-800.jpg          ← optional, for srcset
├── p-001-1600.jpg
└── …
```

Naming convention (suggested): `{photo-id}-{long-edge-px}.jpg`. Keeps
the relationship between source file and `photos.ts` entry obvious,
and groups the responsive sizes for one photo together.

For maximum simplicity you can also just drop one file per photo with
no size suffix — the site won't generate a `srcset`, but it'll still
work fine.

## Step 3 — Wire it in `src/data/photos.ts`

Each entry now accepts an optional `src` (and `alt`) field. Two forms
are supported:

### Simple — one image per photo

```ts
{
  id: 'l-001',
  title: 'Glacial Edge',
  date: '2024-02-05',
  location: 'Jökulsárlón, Iceland',
  category: 'Landscape',
  preset: 'mountain',     // still used as a fallback
  palette: 'midnight',    // still used as a fallback
  aspect: 'tall',
  featured: true,
  src: '/photos/l-001-2560.jpg',
  alt: 'A receding glacier shelf at first light, Iceland, 2024',
},
```

### Responsive — let the browser pick the right size

```ts
{
  id: 'l-001',
  title: 'Glacial Edge',
  // … rest unchanged …
  src: {
    src:    '/photos/l-001-2560.jpg',                              // largest, default
    srcset: '/photos/l-001-800.jpg 800w, /photos/l-001-1600.jpg 1600w, /photos/l-001-2560.jpg 2560w',
    sizes:  '(max-width: 600px) 100vw, (max-width: 920px) 50vw, 33vw',
  },
  alt: 'A receding glacier shelf at first light, Iceland, 2024',
},
```

The `sizes` value tells the browser how big the `<img>` will be at
each viewport breakpoint, so it can pick the smallest `srcset` entry
that's still ≥ the displayed size. The default in `PhotoCard.astro`
matches the 3-column grid this site uses.

When `src` is undefined, the procedural SVG placeholder still renders
— so you can ship the site with only some photos in place and fill in
the rest over time.

## Step 4 — Hero image

Open `src/pages/index.astro`, find the line near the top:

```ts
const HERO_PHOTO: string | undefined = undefined;
```

Set it to the public path:

```ts
const HERO_PHOTO = '/photos/hero-2560.jpg';
```

The hero applies a dark gradient overlay automatically, so your
original tones don't have to be already-dark — just make sure the
focal point is in the upper-middle of the frame so it isn't covered
by the bottom-fade.

## Step 5 — (Optional) advanced — Astro's `<Image />` pipeline

For automatic AVIF/WebP generation and per-breakpoint resizing
**without** pre-exporting multiple sizes, use Astro's built-in image
pipeline:

```astro
---
// in PhotoCard.astro
import { Image } from 'astro:assets';
import myPhoto from '../assets/photos/l-001.jpg';   // imported as ESM
---
<Image src={myPhoto} alt="…" widths={[800, 1600, 2400]} formats={['avif','webp','jpg']} />
```

Caveats:
- Photos must live in `src/assets/`, not `public/`, and be imported
  via ESM (`import x from '../assets/...'`).
- Astro will sharp-process them at build time — for 100 MP source
  files this can be slow and RAM-hungry, so I'd recommend exporting
  a 2560-edge master from Lightroom first and feeding that to Astro.
- Adds a build-time dependency on `sharp`.

For a portfolio of ≤ 50 photos, the manual `public/` workflow above is
simpler and faster. Switch to the Astro pipeline only when you hit
~hundreds of images.

## Step 6 — Sanity check

```bash
npm run dev       # http://localhost:4321
```

Open DevTools → Network → Img. Check:

- Each card image is **< 500 KB** (cards) or **< 1 MB** (hero)
- The right size is being served at each viewport (resize the
  window — the browser should swap to a smaller srcset entry)
- `Content-Type` is `image/jpeg` (or `image/avif`)
- Lazy-loaded cards don't fetch until you scroll near them

If a card is downloading a 5 MB original, you forgot to set `src`
to the resized export.

## Reference: my recommended pipeline

For someone shooting Hasselblad X2D / Sony A7R V at 60—100 MP:

1. **Cull and edit at full resolution** in Capture One / Lightroom.
2. Export **two web JPEGs** per chosen photo:
   - `{id}-2560.jpg` at q=85, long edge 2560 (used for hero/featured)
   - `{id}-1600.jpg` at q=80, long edge 1600 (used for grid cards)
3. Drop both into `public/photos/`, reference the larger from `src.src`
   and both in `src.srcset` if you want bandwidth savings on phones.
4. Keep the print-ready full-resolution versions in your archive,
   never the website. The website is for *deciding to email you* — not
   for delivering high-quality reproductions.
