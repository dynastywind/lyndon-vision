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
  'Street',
  'Nature',
  'Architecture',
  'Portrait',
  'Macro',
];

export const photos: Photo[] = [

  // ── 1-xxx · Nature ─────────────────────────────────────────────────

  {
    id: '1-001', title: 'Yosemite',
    src: '/photos/1-001.jpg',
    date: '2025-03-28', location: 'Yosemite, USA',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '1/6900s · f/2.8 · ISO 64',
    category: 'Nature',
    preset: 'mountain', palette: 'sage', aspect: 'wide',
    featured: true,
    alt: 'Yosemite, USA — March 2025',
  },
  {
    id: '1-002', title: 'Kelingking Beach',
    src: '/photos/1-002.jpg',
    date: '2024-02-04', location: 'Kelingking, Indonesia',
    camera: 'Sony A7R V', lens: 'FE 16-35mm F2.8 GM II',
    exposure: '1/1000s · f/8 · 16mm · ISO 100',
    category: 'Nature',
    preset: 'ocean', palette: 'sage', aspect: 'tall',
    featured: true,
    alt: 'Kelingking Beach, Indonesia — February 2024',
  },
  {
    id: '1-003', title: 'Star Track',
    src: '/photos/1-003.jpg',
    date: '2025-10-04', location: 'Dunedin, New Zealand',
    camera: 'Sony A7R V', lens: 'FE 16mm F1.8 G',
    exposure: '',   // star-trail stack — fill in real parameters
    category: 'Nature',
    preset: 'landscape', palette: 'midnight', aspect: 'wide',
    alt: 'Star trail above Dunedin, New Zealand — October 2025',
  },
  {
    id: '1-004', title: 'Kings',
    src: '/photos/1-004.jpg',
    date: '2025-03-28', location: 'Kings Canyon, USA',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 20-35E @20mm',
    exposure: '1/6900s · f/2.8 · ISO 64',
    category: 'Nature',
    preset: 'forest', palette: 'sage', aspect: 'tall',
    featured: true,
    alt: 'Kings Canyon, USA — March 2025',
  },
  {
    id: '1-005', title: 'Lighthouse',
    src: '/photos/1-005.jpg',
    date: '2025-03-28', location: 'California 1, USA',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '1/6900s · f/2.8 · ISO 64',
    category: 'Nature',
    preset: 'ocean', palette: 'sage', aspect: 'tall',
    alt: 'Lighthouse on California Highway 1 — March 2025',
  },
  {
    id: '1-006', title: 'Horse and Sakura',
    src: '/photos/1-006.jpg',
    date: '2024-03-28', location: 'Jeju, Korea',
    camera: 'Sony A7R V',
    lens: 'FE 24-70mm f/2.8 GM II @70mm',
    exposure: '1/6900s · f/2.8 · ISO 64',
    category: 'Nature',
    preset: 'landscape', palette: 'sage', aspect: 'wide',
    alt: 'Horses with cherry blossoms, Jeju, Korea — March 2024',
  },
  {
    id: '1-007', title: 'Milky Way',
    src: '/photos/1-007.jpg',
    date: '2025-10-28', location: 'Te Anau, New Zealand',
    camera: 'Sony A7R V',
    lens: 'FE 16mm f/1.8 G',
    exposure: '', 
    category: 'Nature',
    preset: 'landscape', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'Milky Way over Te Anau, New Zealand — October 2025',
  },
  {
    id: '1-008', title: 'The Hobbit',
    src: '/photos/1-008.jpg',
    date: '2025-10-28', location: 'Hobbiton, New Zealand',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    alt: 'Hobbiton, New Zealand — October 2025',
  },
  {
    id: '1-009', title: 'Spring',
    src: '/photos/1-009.jpg',
    date: '2021-03-28', location: 'Hangzhou, China',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 24-70mm f/2.8L II USM @24mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    featured: true,
    alt: 'Spring in Hangzhou, China — March 2021',
  },
  {
    id: '1-010', title: 'Winter at West Lake',
    src: '/photos/1-010.jpg',
    date: '2018-12-15', location: 'Hangzhou, China',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 24-70mm f/2.8L II USM @70mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'landscape', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'Winter at West Lake, Hangzhou, China — December 2018',
  },
  {
    id: '1-011', title: 'Sakura',
    src: '/photos/1-011.jpg',
    date: '2017-02-18', location: 'Tokyo, Japan',
    camera: 'Canon EOS 700D',
    lens: 'EF 50mm f/1.8 STM',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'landscape', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'Sakura in Nara, Japan — February 2017',
  },
  {
    id: '1-012', title: 'Deer',
    src: '/photos/1-012.jpg',
    date: '2017-12-18', location: 'Nara, Japan',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 24-70mm f/2.8L II USM @70mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'landscape', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'Deer in Nara, Japan — December 2017',
  },
  {
    id: '1-013', title: 'Maple',
    src: '/photos/1-013.jpg',
    date: '2017-06-17', location: 'Tokyo, Japan',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 24-70mm f/2.8L II USM @70mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'forest', palette: 'midnight', aspect: 'wide',
    alt: 'Maple in Tokyo, Japan — June 2017',
  },
  {
    id: '1-014', title: 'Ruriko Temple',
    src: '/photos/1-014.jpg',
    date: '2017-12-09', location: 'Kyoto, Japan',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 24-70mm f/2.8L II USM @70mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'forest', palette: 'midnight', aspect: 'wide',
    alt: 'Ruriko Temple, Kyoto, Japan — December 2017',
  },
  {
    id: '1-015', title: 'Sanqing',
    src: '/photos/1-015.jpg',
    date: '2019-07-14', location: 'Shangrao, Jiangxi, China',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 24-70mm f/2.8L II USM @24mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'forest', palette: 'midnight', aspect: 'tall',
    alt: 'Sanqing, Shangrao, China — July 2019',
  },
  {
    id: '1-016', title: 'Bromo Volcano',
    src: '/photos/1-016.jpg',
    date: '2023-09-24', location: 'Bromo, Indonesia',
    camera: 'Sony A7R V',
    lens: 'FE 24-70mm f/2.8 GM II @24mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'mountain', palette: 'midnight', aspect: 'wide',
    alt: 'Bromo Volcano, Indonesia — September 2023',
  },
  {
    id: '1-017', title: 'Doubtful Sound',
    src: '/photos/1-017.jpg',
    date: '2025-10-24', location: 'Doubtful Sound, New Zealand',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'mountain', palette: 'midnight', aspect: 'wide',
    alt: 'Doubtful Sound, New Zealand — October 2025',
  },
  {
    id: '1-018', title: 'Monkey',
    src: '/photos/1-018.jpg',
    date: '2024-02-24', location: 'Lombok, Indonesia',
    camera: 'Sony A7R V',
    lens: 'Tamron 50-400mm f/5-6.7 @400mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'mountain', palette: 'midnight', aspect: 'tall',
    alt: 'Monkey, Lombok, Indonesia — February 2024',
  },
  {
    id: '1-019', title: 'Mountain Kinabalu',
    src: '/photos/1-019.jpg',
    date: '2024-09-25', location: 'Kinabalu, Malaysia',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 20-35E @35mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'mountain', palette: 'midnight', aspect: 'wide',
    alt: 'Mountain Kinabalu, Malaysia — September 2024',
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
    featured: true,
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
    featured: true,
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
    camera: 'Hasselblad X2D 100C', lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'Westminster, London — May 2025',
  },
  {
    id: '2-007', title: 'Cathedral',
    src: '/photos/2-007.jpg',
    date: '2025-04-24', location: 'Liverpool, UK',
    camera: 'Hasselblad X2D 100C', lens: 'XCD 20-35E @20mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'Cathedral, Liverpool — April 2025',
  },
  {
    id: '2-008', title: 'Man Mo Temple',
    src: '/photos/2-008.jpg',
    date: '2025-12-24', location: 'Hong Kong',
    camera: 'Hasselblad X2D 100C', lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'square',
    alt: 'Man Mo Temple, Hong Kong — December 2025',
  },
  {
    id: '2-009', title: 'Victoria Harbour',
    src: '/photos/2-009.jpg',
    date: '2025-12-24', location: 'Hong Kong',
    camera: 'Hasselblad X2D 100C', lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'Victoria Harbour, Hong Kong — December 2025',
  },
  {
    id: '2-010', title: 'Central',
    src: '/photos/2-010.jpg',
    date: '2025-12-24', location: 'Hong Kong',
    camera: 'Hasselblad X2D 100C', lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'Central, Hong Kong — December 2025',
  },
  {
    id: '2-011', title: 'MaoJiaBu',
    src: '/photos/2-011.jpg',
    date: '2021-01-24', location: 'Hangzhou, China',
    camera: 'Canon EOS 5D Mark IV', lens: 'EF 24-70mm f/2.8L II USM @24mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    featured: true,
    alt: 'MaoJiaBu, Hangzhou — January 2021',
  },
  {
    id: '2-012', title: 'West Lake',
    src: '/photos/2-012.jpg',
    date: '2019-12-29', location: 'Hangzhou, China',
    camera: 'DJI Mavic 2 Pro', lens: '28mm equiv. f/2.8',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'forest', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'West Lake, Hangzhou — December 2019',
  },
  {
    id: '2-013', title: 'Urikamome',
    src: '/photos/2-013.jpg',
    date: '2018-02-18', location: 'Tokyo, Japan',
    camera: 'Canon EOS 5D Mark IV', lens: 'EF 24-70mm f/2.8L II USM @24mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    alt: 'Urikamome, Tokyo — February 2018',
  },
  {
    id: '2-014', title: 'ChenghuangGe',
    src: '/photos/2-014.jpg',
    date: '2019-06-15', location: 'Hangzhou, China',
    camera: 'DJI Mavic 2 Pro',  // Hasselblad L1D-20c sensor
    lens: '28mm equiv. f/2.8',
    exposure: '1/80s · f/5.6 · ISO 100',
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'ChenghuangGe, Hangzhou — June 2019',
  },
  {
    id: '2-015', title: 'Nanpu Bridge',
    src: '/photos/2-015.jpg',
    date: '2022-10-28', location: 'Shanghai, China',
    camera: 'DJI Mavic 2 Pro',  // Hasselblad L1D-20c sensor
    lens: '28mm equiv. f/2.8',
    exposure: '1/80s · f/5.6 · ISO 100',
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'Nanpu Bridge, Shanghai — October 2022',
  },
  {
    id: '2-016', title: 'Tokyo Tower',
    src: '/photos/2-016.jpg',
    date: '2017-12-23', location: 'Tokyo, Japan',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 24-70mm f/2.8L II USM @70mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'Tokyo Tower, Tokyo — December 2017',
  },
  {
    id: '2-017', title: 'Conjunction',
    src: '/photos/2-017.jpg',
    date: '2018-02-16', location: 'Tokyo, Japan',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 24-70mm f/2.8L II USM @24mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    featured: true,
    alt: 'Conjunction, Tokyo — February 2018',
  },
  {
    id: '2-018', title: 'Kinkaku-ji',
    src: '/photos/2-018.jpg',
    date: '2017-12-15', location: 'Kyoto, Japan',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 24-70mm f/2.8L II USM @24mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'Kinkaku-ji, Kyoto — December 2017',
  },
  {
    id: '2-019', title: 'Circular Quay',
    src: '/photos/2-019.jpg',
    date: '2025-10-15', location: 'Sydney, Australia',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'Circular Quay, Sydney — October 2025',
  },
  {
    id: '2-020', title: 'Istana Park',
    src: '/photos/2-020.jpg',
    date: '2025-08-15', location: 'Singapore',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'Istana Park, Singapore — August 2025',
  },
  {
    id: '2-021', title: 'Rider',
    src: '/photos/2-021.jpg',
    date: '2025-03-01', location: 'Penang, Malaysia',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    alt: 'Rider, Penang — March 2025',
  },
  {
    id: '2-022', title: 'Qingshuipu',
    src: '/photos/2-022.jpg',
    date: '2025-02-04', location: 'Ningbo, China',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 90mm V',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    alt: 'Qingshuipu, Ningbo — February 2025',
  },
  {
    id: '2-023', title: 'The Red House',
    src: '/photos/2-023.jpg',
    date: '2025-10-15', location: 'Glenorch, New Zealand',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'The Red House, Glenorch — October 2025',
  },
  {
    id: '2-024', title: 'Golden Gate Bridge',
    src: '/photos/2-024.jpg',
    date: '2025-04-01', location: 'San Francisco, USA',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    featured: true,
    alt: 'Golden Gate Bridge, San Francisco — April 2025',
  },
  {
    id: '2-025', title: 'HKU',
    src: '/photos/2-025.jpg',
    date: '2024-11-15', location: 'Hong Kong',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'HKU, Hong Kong — November 2024',
  },
  {
    id: '2-026', title: '101',
    src: '/photos/2-026.jpg',
    date: '2026-01-12', location: 'Taipei, Taiwan',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    featured: true,
    alt: '101, Taipei — January 2026',
  },
  {
    id: '2-027', title: 'Central Market',
    src: '/photos/2-027.jpg',
    date: '2024-11-15', location: 'Hong Kong',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'Central Market, Hong Kong — November 2024',
  },
  {
    id: '2-028', title: 'North Point',
    src: '/photos/2-028.jpg',
    date: '2024-11-15', location: 'Hong Kong',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 20-35E @20mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    alt: 'North Point, Hong Kong — November 2024',
  },
  {
    id: '2-029', title: 'Canal',
    src: '/photos/2-029.jpg',
    date: '2025-04-25', location: 'Haarlem, Netherlands',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'Canal, Haarlem — April 2025',
  },
  {
    id: '2-030', title: 'Corner Tower',
    src: '/photos/2-030.jpg',
    date: '2023-10-12', location: 'Beijing, China',
    camera: 'Sony A7R V',
    lens: 'FE 24-70mm f/2.8 GM II @24mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'Corner Tower, Beijing — October 2023',
  },
  {
    id: '2-031', title: 'Dingding',
    src: '/photos/2-031.jpg',
    date: '2024-12-15', location: 'Hong Kong',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'Dingding, Hong Kong — December 2024',
  },
  {
    id: '2-032', title: 'Rainbow over Mosque',
    src: '/photos/2-032.jpg',
    date: '2024-02-15', location: 'Kuala Lumpur, Malaysia',
    camera: 'Sony A7R V',
    lens: 'FE 16-35mm F2.8 GM II @16mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    alt: 'Rainbow over Mosque, Kuala Lumpur — February 2024',
  },
  {
    id: '2-033', title: 'Marina Bay Sands',
    src: '/photos/2-033.jpg',
    date: '2023-02-01', location: 'Singapore',
    camera: 'Sony A7R V',
    lens: 'Tamron 50-400mm F4.5-6.3 Di III VC VXD @400mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'Marina Bay Sands, Singapore — February 2023',
  },
  {
    id: '2-034', title: 'Haji Lane',
    src: '/photos/2-034.jpg',
    date: '2024-12-15', location: 'Singapore',
    camera: 'Leica M11P',
    lens: 'Voigtlander 35mm f/2.0 APO-Lanthar ASPH',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    featured: true,
    alt: 'Haji Lane, Singapore — December 2024',
  },
  {
    id: '2-035', title: 'Sunset at Shenzhen',
    src: '/photos/2-035.jpg',
    date: '2024-12-15', location: 'Shenzhen, China',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'Sunset at Shenzhen, China — December 2024',
  },
  {
    id: '2-036', title: 'Tuas Link',
    src: '/photos/2-036.jpg',
    date: '2025-01-15', location: 'Singapore',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 16-35E @16mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'Tuas Link, Singapore — January 2025',
  },
  {
    id: '2-037', title: 'Badminton Court',
    src: '/photos/2-037.jpg',
    date: '2025-01-15', location: 'Singapore',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 16-35E @16mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'Badminton Court, Singapore — January 2025',
  },
  {
    id: '2-038', title: 'Lyme Park',
    src: '/photos/2-038.jpg',
    date: '2025-04-15', location: 'Disley, UK',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    alt: 'Lyme Park, Disley, UK — April 2025',
  },
  {
    id: '2-039', title: 'Trinity College',
    src: '/photos/2-039.jpg',
    date: '2025-04-28', location: 'Dublin, Ireland',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    featured: true,
    alt: 'Trinity College, Dublin, Ireland — April 2025',
  },
  {
    id: '2-040', title: 'Kennedy Town',
    src: '/photos/2-040.jpg',
    date: '2024-12-28', location: 'Hong Kong',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 90mm V',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    featured: true,
    alt: 'Kennedy Town, Hong Kong — December 2024',
  },
  {
    id: '2-041', title: 'Central',
    src: '/photos/2-041.jpg',
    date: '2024-12-28', location: 'Hong Kong',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 90mm V',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'Central, Hong Kong — December 2024',
  },
  {
    id: '2-042', title: 'Night Market',
    src: '/photos/2-042.jpg',
    date: '2024-12-28', location: 'Hong Kong',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @55mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'Night Market, Hong Kong — December 2024',
  },
  {
    id: '2-043', title: 'Prayer',
    src: '/photos/2-043.jpg',
    date: '2024-12-28', location: 'Hong Kong',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'Prayer, Hong Kong — December 2024',
  },
  {
    id: '2-044', title: 'Wanchai',
    src: '/photos/2-044.jpg',
    date: '2024-12-28', location: 'Hong Kong',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 90mm V',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'Wanchai, Hong Kong — December 2024',
  },

  // ── 3-xxx · Macro ──────────────────────────────────────────────────

  {
    id: '3-001', title: 'Butterfly',
    src: '/photos/3-001.jpg',
    date: '2020-10-11', location: 'Hangzhou, China',
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
    alt: 'Telephoto portrait, Hangzhou, August 2020',
  },
  {
    id: '4-002', title: 'Omakase',
    src: '/photos/4-002.jpg',
    date: '2025-06-09', location: 'Singapore',
    camera: 'Leica M11P',
    lens: 'Voigtlander 35mm f/2.0 APO-Lanthar ASPH',
    exposure: '1/250s · f/5.6 · 300mm · ISO 4000',
    category: 'Portrait',
    preset: 'portrait', palette: 'rose', aspect: 'square',
    alt: 'Telephoto portrait, Singapore, June 2025',
  },
  {
    id: '4-003', title: 'Omoide Yokocho',
    src: '/photos/4-003.jpg',
    date: '2018-02-09', location: 'Tokyo, Japan',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 70-300mm f/4-5.6L IS USM @300mm',
    exposure: '1/250s · f/5.6 · 300mm · ISO 4000',
    category: 'Portrait',
    preset: 'portrait', palette: 'rose', aspect: 'square',
    featured: true,
    alt: 'Telephoto portrait, Singapore, February 2018',
  },
  {
    id: '4-004', title: 'Barista',
    src: '/photos/4-004.jpg',
    date: '2018-02-17', location: 'Tokyo, Japan',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 70-300mm f/4-5.6L IS USM @300mm',
    exposure: '1/250s · f/5.6 · 300mm · ISO 4000',
    category: 'Portrait',
    preset: 'portrait', palette: 'rose', aspect: 'square',
    featured: true,
    alt: 'Telephoto portrait, Singapore, February 2018',
  },
  {
    id: '4-005', title: 'Nova',
    src: '/photos/4-005.jpg',
    date: '2025-04-24', location: 'Haarlem, Netherlands',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 90mm V',
    exposure: '1/250s · f/5.6 · 300mm · ISO 100',
    category: 'Portrait',
    preset: 'portrait', palette: 'rose', aspect: 'square',
    featured: true,
    alt: 'Telephoto portrait, Haarlem, April 2025',
  },
  {
    id: '4-006', title: 'Morning at Bund',
    src: '/photos/4-006.jpg',
    date: '2024-11-17', location: 'Shanghai, China',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '1/250s · f/5.6 · 300mm · ISO 100',
    category: 'Portrait',
    preset: 'portrait', palette: 'rose', aspect: 'wide',
    alt: 'Telephoto portrait, Shanghai, November 2024',
  },

];

export const featured = photos.filter((p) => p.featured);
export const photosByCategory = (c: Category) => photos.filter((p) => p.category === c);
