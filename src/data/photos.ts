/**
 * Real photo catalogue. Aspect classes verified against actual pixel
 * dimensions on disk (so object-fit: cover doesn't crop awkwardly).
 *
 * IDs follow the file-naming convention used in public/photos/:
 *   1-xxx → Nature       (Yosemite · Kelingking · Kings Canyon · Star Track · Lighthouse · Jeju · Milky Way · Hobbiton)
 *   2-xxx → Architecture (Forbidden City · Hangzhou · Shanghai · Singapore · UK · Hong Kong)
 *   3-xxx → Macro        (Laowa 100 / Canon 5D IV)
 *   4-xxx → Portrait     (Canon 5D IV + 70-300L @300mm)
 *
 * Exposure fields marked '' need the real shooting parameters.
 * 3-001 is the only frame with intact EXIF on disk; all others were
 * stripped during web export.
 */

export type Category =
  | 'Landscape'
  | 'Portrait'
  | 'Street'
  | 'Nature'
  | 'Architecture'
  | 'Macro';

export type Preset =
  | 'landscape' | 'mountain' | 'ocean' | 'forest'
  | 'city' | 'street' | 'architecture'
  | 'macro' | 'portrait';

export type Palette =
  | 'midnight' | 'amber' | 'rose' | 'teal' | 'sage' | 'noir' | 'rust';

export type Aspect = 'tall' | 'wide' | 'square' | 'standard';

export interface Photo {
  id: string;
  title: string;
  date: string;       // ISO
  location: string;
  camera?: string;
  lens?: string;
  exposure?: string;
  category: Category;
  preset: Preset;
  palette: Palette;
  aspect?: Aspect;
  /** When set, surfaced in the hero/featured strip */
  featured?: boolean;
  /**
   * Path to the rendered image. If undefined, a generated SVG placeholder is
   * shown instead. Two valid forms:
   *   • '/photos/foo.jpg'                — file lives at public/photos/foo.jpg
   *   • { src: '/photos/foo-2400.jpg',
   *       srcset: '/photos/foo-800.jpg 800w, /photos/foo-1600.jpg 1600w, /photos/foo-2400.jpg 2400w',
   *       sizes: '(max-width: 600px) 100vw, 33vw' }
   *                                       — manual responsive set
   */
  src?: string | { src: string; srcset?: string; sizes?: string };
  /** Alt text for the rendered image. Falls back to "{title}, {location}". */
  alt?: string;
}

export const categories: Category[] = [
  'Landscape',
  'Portrait',
  'Street',
  'Nature',
  'Architecture',
  'Macro',
];

export const photos: Photo[] = [

  // ── 1-xxx · Nature ─────────────────────────────────────────────────

  {
    id: '1-001', title: 'Yosemite',
    src: '/photos/1-001.jpg',
    date: '2024-02-04', location: 'Yosemite, USA',
    camera: 'Apple iPhone 15 Pro Max',
    lens: '120mm equiv. f/2.8',
    exposure: '1/6900s · f/2.8 · ISO 64',
    category: 'Nature',
    preset: 'ocean', palette: 'sage', aspect: 'wide',
    featured: true,
    alt: 'Yosemite, USA — February 2024',
  },
  {
    id: '1-002', title: 'Kelingking Beach',
    src: '/photos/1-002.jpg',
    date: '2024-02-04', location: 'Kelingking, Indonesia',
    camera: 'Sony A7R V', lens: 'FE 16-35mm F2.8 GM II',
    exposure: '1/1000s · f/8 · 16mm · ISO 100',
    category: 'Nature',
    preset: 'ocean', palette: 'sage', aspect: 'tall',
    alt: 'Kelingking Beach, Indonesia — February 2024',
  },
  {
    id: '1-003', title: 'Star Track',
    src: '/photos/1-003.jpg',
    date: '2025-10-04', location: 'Dunedin, New Zealand',
    camera: 'Sony A7R V', lens: 'FE 16-35mm F2.8 GM II',
    exposure: '',   // star-trail stack — fill in real parameters
    category: 'Nature',
    preset: 'ocean', palette: 'midnight', aspect: 'wide',
    alt: 'Star trail above Dunedin, New Zealand — October 2025',
  },
  {
    id: '1-004', title: 'Kings',
    src: '/photos/1-004.jpg',
    date: '2025-03-28', location: 'Kings Canyon, USA',
    camera: 'Apple iPhone 15 Pro Max',
    lens: '120mm equiv. f/2.8',
    exposure: '1/6900s · f/2.8 · ISO 64',
    category: 'Nature',
    preset: 'ocean', palette: 'sage', aspect: 'tall',
    featured: true,
    alt: 'Kings Canyon, USA — March 2025',
  },
  {
    id: '1-005', title: 'Lighthouse',
    src: '/photos/1-005.jpg',
    date: '2025-03-28', location: 'California 1, USA',
    camera: 'Apple iPhone 15 Pro Max',
    lens: '120mm equiv. f/2.8',
    exposure: '1/6900s · f/2.8 · ISO 64',
    category: 'Nature',
    preset: 'ocean', palette: 'sage', aspect: 'tall',
    featured: true,
    alt: 'Lighthouse on California Highway 1 — March 2025',
  },
  {
    id: '1-006', title: 'Horse and Sakura',
    src: '/photos/1-006.jpg',
    date: '2024-03-28', location: 'Jeju, Korea',
    camera: 'Apple iPhone 15 Pro Max',
    lens: '120mm equiv. f/2.8',
    exposure: '1/6900s · f/2.8 · ISO 64',
    category: 'Nature',
    preset: 'ocean', palette: 'sage', aspect: 'wide',
    featured: true,
    alt: 'Horses with cherry blossoms, Jeju, Korea — March 2024',
  },
  {
    id: '1-007', title: 'Milky Way',
    src: '/photos/1-007.jpg',
    date: '2025-10-28', location: 'Te Anau, New Zealand',
    camera: 'Apple iPhone 15 Pro Max',
    lens: '13mm equiv. f/2.2',
    exposure: '',   // iPhone astrophoto — fill in real parameters
    category: 'Nature',
    preset: 'ocean', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'Milky Way over Te Anau, New Zealand — October 2025',
  },
  {
    id: '1-008', title: 'The Hobbit',
    src: '/photos/1-008.jpg',
    date: '2025-10-28', location: 'Hobbiton, New Zealand',
    camera: 'Apple iPhone 15 Pro Max',
    lens: '',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'ocean', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'Hobbiton, New Zealand — October 2025',
  },

  // ── 2-xxx · Architecture ───────────────────────────────────────────

  {
    id: '2-001', title: 'Forbidden City',
    src: '/photos/2-001.jpg',
    date: '2023-10-14', location: 'Beijing, China',
    camera: 'Sony A7R V', lens: 'FE 16-35mm F2.8 GM II',
    exposure: '1/500s · f/8 · 16mm · ISO 100',
    category: 'Architecture',
    preset: 'architecture', palette: 'amber', aspect: 'wide',
    featured: true,
    alt: 'Forbidden City, Beijing — wide-angle, October 2023',
  },
  {
    id: '2-002', title: 'Oriental Park',
    src: '/photos/2-002.jpg',
    date: '2021-11-13', location: 'Hangzhou, China',
    camera: 'DJI Mavic 2 Pro',  // Hasselblad L1D-20c sensor
    lens: '28mm equiv. f/2.8',
    exposure: '1/80s · f/5.6 · ISO 100',
    category: 'Architecture',
    preset: 'architecture', palette: 'rust', aspect: 'wide',
    alt: 'Oriental Park, Hangzhou — aerial view, November 2021',
  },
  {
    id: '2-003', title: 'Bund',
    src: '/photos/2-003.jpg',
    date: '2024-09-01', location: 'Shanghai, China',
    camera: 'Hasselblad X2D 100C', lens: 'XCD 35-75 @75mm',
    exposure: '1/80s · f/11 · ISO 200',
    category: 'Architecture',
    preset: 'architecture', palette: 'teal', aspect: 'wide',
    featured: true,
    alt: 'The Bund, Shanghai — Hasselblad X2D 100MP, September 2024',
  },
  {
    id: '2-004', title: 'Lujiazui',
    src: '/photos/2-004.jpg',
    date: '2024-08-11', location: 'Shanghai, China',
    camera: 'Hasselblad X2D 100C', lens: 'XCD 35-75 @35mm',
    exposure: '32s · f/19 · ISO 64',
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'Lujiazui skyline, Shanghai — 32-second night exposure, August 2024',
  },
  {
    id: '2-005', title: 'Changi',
    src: '/photos/2-005.jpg',
    date: '2023-12-24', location: 'Singapore',
    camera: 'Sony A7R V', lens: 'FE 16-35mm F2.8 GM II',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'Changi at night, Singapore — December 2023',
  },
  {
    id: '2-006', title: 'Westminster',
    src: '/photos/2-006.jpg',
    date: '2025-05-01', location: 'London, UK',
    camera: 'Sony A7R V', lens: 'FE 16-35mm F2.8 GM II',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    alt: 'Westminster, London — May 2025',
  },
  {
    id: '2-007', title: 'Cathedral',
    src: '/photos/2-007.jpg',
    date: '2025-04-24', location: 'Liverpool, UK',
    camera: 'Sony A7R V', lens: 'FE 16-35mm F2.8 GM II',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'Cathedral, Liverpool — April 2025',
  },
  {
    id: '2-008', title: 'Man Mo Temple',
    src: '/photos/2-008.jpg',
    date: '2025-12-24', location: 'Hong Kong',
    camera: 'Sony A7R V', lens: 'FE 16-35mm F2.8 GM II',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'square',
    alt: 'Man Mo Temple, Hong Kong — December 2025',
  },
  {
    id: '2-009', title: 'Victoria Harbour',
    src: '/photos/2-009.jpg',
    date: '2025-12-24', location: 'Hong Kong',
    camera: 'Sony A7R V', lens: 'FE 16-35mm F2.8 GM II',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'square',
    alt: 'Victoria Harbour, Hong Kong — December 2025',
  },
  {
    id: '2-010', title: 'Central',
    src: '/photos/2-010.jpg',
    date: '2025-12-24', location: 'Hong Kong',
    camera: 'Sony A7R V', lens: 'FE 16-35mm F2.8 GM II',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'Central, Hong Kong — December 2025',
  },
  {
    id: '2-011', title: 'West Lake',
    src: '/photos/2-011.jpg',
    date: '2021-01-24', location: 'Hangzhou, China',
    camera: 'Sony A7R V', lens: 'FE 16-35mm F2.8 GM II',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'West Lake, Hangzhou — January 2021',
  },
  {
    id: '2-012', title: 'West Lake (Winter)',
    src: '/photos/2-012.jpg',
    date: '2019-12-29', location: 'Hangzhou, China',
    camera: 'Sony A7R V', lens: 'FE 16-35mm F2.8 GM II',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    alt: 'West Lake, Hangzhou — December 2019',
  },

  // ── 3-xxx · Macro ──────────────────────────────────────────────────

  {
    id: '3-001', title: 'Butterfly',
    src: '/photos/3-001.jpg',
    date: '2020-10-06', location: 'Hangzhou, China',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'Laowa 100mm F2.8 CA-Dreamer Macro 2X',
    exposure: '1/400s · f/5 · 100mm · ISO 100',   // EXIF confirmed
    category: 'Macro',
    preset: 'macro', palette: 'amber', aspect: 'wide',
    featured: true,
    alt: 'Butterfly macro at f/5, 100mm, October 2020',
  },
  {
    id: '3-002', title: 'Bug',
    src: '/photos/3-002.jpg',
    date: '2020-09-19', location: 'Hangzhou, China',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'Laowa 100mm F2.8 CA-Dreamer Macro 2X',
    exposure: '1/200s · f/8 · 100mm · ISO 400',
    category: 'Macro',
    preset: 'macro', palette: 'rose', aspect: 'wide',
    alt: 'Insect macro at f/8, 100mm, September 2020',
  },

  // ── 4-xxx · Portrait ───────────────────────────────────────────────

  {
    id: '4-001', title: 'A Touch of Green',
    src: '/photos/4-001.jpg',
    date: '2020-08-09', location: 'Hangzhou, China',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 70-300mm f/4-5.6L IS USM @300mm',
    exposure: '1/250s · f/5.6 · 300mm · ISO 4000',
    category: 'Portrait',
    preset: 'portrait', palette: 'rose', aspect: 'wide',
    featured: true,
    alt: 'Telephoto portrait, Hangzhou, August 2020',
  },
  {
    id: '4-002', title: 'Omakase',
    src: '/photos/4-002.jpg',
    date: '2025-06-09', location: 'Singapore',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 70-300mm f/4-5.6L IS USM @300mm',
    exposure: '1/250s · f/5.6 · 300mm · ISO 4000',
    category: 'Portrait',
    preset: 'portrait', palette: 'rose', aspect: 'tall',
    featured: true,
    alt: 'Telephoto portrait, Singapore, June 2025',
  },

];

export const featured = photos.filter((p) => p.featured);
export const photosByCategory = (c: Category) => photos.filter((p) => p.category === c);
