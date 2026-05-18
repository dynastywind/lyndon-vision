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
    date: '2024-02-04', location: 'Bali, Indonesia',
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
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
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
    alt: 'Deer in Nara, Japan — December 2017',
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
  {
    id: '1-020', title: 'Farm at Kinabalu',
    src: '/photos/1-020.jpg',
    date: '2024-09-25', location: 'Kinabalu, Malaysia',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'mountain', palette: 'midnight', aspect: 'wide',
    alt: 'Farm at Kinabalu, Malaysia — September 2024',
  },
  {
    id: '1-021', title: 'Dusk at Te Anau',
    src: '/photos/1-021.jpg',
    date: '2025-10-25', location: 'Te Anau, New Zealand',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'mountain', palette: 'midnight', aspect: 'wide',
    alt: 'Dusk at Te Anau, New Zealand — October 2025',
  },
  {
    id: '1-023', title: 'Garden',
    src: '/photos/1-023.jpg',
    date: '2024-04-05', location: 'Jeju, Korea',
    camera: 'Sony A7R V',
    lens: 'FE 24-70mm f/2.8 GM II @24mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'mountain', palette: 'midnight', aspect: 'wide',
    alt: 'Garden, Jeju, Korea — April 2024',
  },
  {
    id: '1-022', title: 'Spring in Temple',
    src: '/photos/1-022.jpg',
    date: '2024-04-05', location: 'Jeju, Korea',
    camera: 'Sony A7R V',
    lens: 'FE 50mm f/1.4 GM',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'mountain', palette: 'midnight', aspect: 'wide',
    alt: 'Spring in Temple, Jeju, Korea — April 2024',
  },
  {
    id: '1-024', title: 'Good Shepherd',
    src: '/photos/1-024.jpg',
    date: '2025-10-12', location: 'Tekapo, New Zealand',
    camera: 'Sony A7R V',
    lens: 'FE 16mm F1.8 G',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'mountain', palette: 'midnight', aspect: 'tall',
    alt: 'Good Shepherd, Tekapo, New Zealand — October 2025',
  },
  {
    id: '1-025', title: 'Steamship',
    src: '/photos/1-025.jpg',
    date: '2025-10-12', location: 'Queenstown, New Zealand',
    camera: 'Sony A7R V',
    lens: 'Tamron 50-400mm f/5-6.7 @400mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'mountain', palette: 'midnight', aspect: 'wide',
    alt: 'Steamship, Queenstown, New Zealand — October 2025',
  },
  {
    id: '1-026', title: 'Sunset at Sentosa',
    src: '/photos/1-026.jpg',
    date: '2024-12-24', location: 'Singapore',
    camera: 'Leica M11P',
    lens: 'Voigtlander 35mm f/2 APO-Lanthar ASPH',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'mountain', palette: 'midnight', aspect: 'tall',
    alt: 'Sunset at the Sentosa, Singapore — December 2024',
  },
  {
    id: '1-027', title: 'Bugis',
    src: '/photos/1-027.jpg',
    date: '2025-01-04', location: 'Singapore',
    camera: 'Leica M11P',
    lens: 'Thypoch 28mm f/1.4 ASPH',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'mountain', palette: 'midnight', aspect: 'wide',
    alt: 'Bugis, Singapore — January 2025',
  },
  {
    id: '1-028', title: 'Tree Tunnel',
    src: '/photos/1-028.jpg',
    date: '2025-09-22', location: 'Inverness, USA',
    camera: 'Sony A7R V',
    lens: 'Tamron 50-400mm F4.5-6.3 Di III VC VXD @50mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'forest', palette: 'midnight', aspect: 'tall',
    alt: 'Tree Tunnel, Inverness, USA — September 2025',
  },
  {
    id: '1-029', title: 'Creek',
    src: '/photos/1-029.jpg',
    date: '2025-03-22', location: 'Yosemite, USA',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'forest', palette: 'midnight', aspect: 'tall',
    alt: 'Creek, Yosemite, USA — March 2025',
  },
  {
    id: '1-030', title: 'Watch the Sunset',
    src: '/photos/1-030.jpg',
    date: '2026-01-08', location: 'Tainan, Taiwan',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'forest', palette: 'midnight', aspect: 'wide',
    alt: 'Watch the Sunset, Tainan, Taiwan — January 2026',
  },
  {
    id: '1-031', title: 'Squirrel',
    src: '/photos/1-031.jpg',
    date: '2025-03-22', location: 'San Jose, USA',
    camera: 'Sony A7R V',
    lens: 'Tamron 50-400mm F4.5-6.3 Di III VC VXD @400mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'forest', palette: 'midnight', aspect: 'wide',
    alt: 'Squirrel, San Jose, USA — March 2025',
  },
  {
    id: '1-032', title: 'Sealion',
    src: '/photos/1-032.jpg',
    date: '2025-10-14', location: 'Dunedin, New Zealand',
    camera: 'Sony A7R V',
    lens: 'Tamron 50-400mm F4.5-6.3 Di III VC VXD @400mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'ocean', palette: 'midnight', aspect: 'wide',
    alt: 'Sealion, Dunedin, New Zealand — October 2025',
  },
  {
    id: '1-033', title: 'Isolated',
    src: '/photos/1-033.jpg',
    date: '2024-02-10', location: 'Bali, Indonesia',
    camera: 'Sony A7R V',
    lens: 'FE 24-70mm f/2.8 GM II @70mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'forest', palette: 'midnight', aspect: 'tall',
    alt: 'Isolated, Bali, Indonesia — February 2024',
  },
  {
    id: '1-034', title: 'Big Tree',
    src: '/photos/1-034.jpg',
    date: '2019-11-10', location: 'Hangzhou, China',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 24-70mm f/2.8L II USM @24mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'forest', palette: 'midnight', aspect: 'wide',
    alt: 'Big Tree, Hangzhou, China — November 2019',
  },
  {
    id: '1-035', title: 'Kelingking Cliff',
    src: '/photos/1-035.jpg',
    date: '2024-02-10', location: 'Bali, Indonesia',
    camera: 'Sony A7R V',
    lens: 'FE 24-70mm f/2.8 GM II @70mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'forest', palette: 'midnight', aspect: 'wide',
    featured: true,
    alt: 'Kelingking Cliff, Bali, Indonesia — February 2024',
  },
  {
    id: '1-036', title: 'Winter Trace',
    src: '/photos/1-036.jpg',
    date: '2021-01-10', location: 'Hangzhou, China',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 24-70mm f/2.8L II USM @24mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'forest', palette: 'midnight', aspect: 'wide',
    alt: 'Winter Trace, Hangzhou, China — January 2021',
  },
  {
    id: '1-037', title: 'Deer Watch',
    src: '/photos/1-037.jpg',
    date: '2017-11-24', location: 'Nara, Japan',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 24-70mm f/2.8L II USM @24mm',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'forest', palette: 'midnight', aspect: 'tall',
    featured: true,
    alt: 'Deer watching, Nara, Japan — November 2017',
  },
  {
    id: '1-038', title: 'One leaf heralds autumn',
    src: '/photos/1-038.jpg',
    date: '2019-12-14', location: 'Hangzhou, China',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 50mm f/1.8 STM',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'forest', palette: 'midnight', aspect: 'square',
    alt: 'One leaf heralds autumn, Hangzhou, China — December 2019',
  },
  {
    id: '1-039', title: 'Plum Blossom',
    src: '/photos/1-039.jpg',
    date: '2020-02-29', location: 'Hangzhou, China',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 50mm f/1.8 STM',
    exposure: '',   // fill in real parameters
    category: 'Nature',
    preset: 'forest', palette: 'midnight', aspect: 'wide',
    alt: 'Plum Blossom, Hangzhou, China — February 2020',
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
    preset: 'street', palette: 'midnight', aspect: 'wide',
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
    id: '2-013', title: 'Urikamome',
    src: '/photos/2-013.jpg',
    date: '2018-02-18', location: 'Tokyo, Japan',
    camera: 'Canon EOS 5D Mark IV', lens: 'EF 24-70mm f/2.8L II USM @24mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'wide',
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
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
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
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'wide',
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
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'wide',
    alt: 'Rider, Penang — March 2025',
  },
  {
    id: '2-022', title: 'Qingshuipu',
    src: '/photos/2-022.jpg',
    date: '2025-02-04', location: 'Ningbo, China',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 90mm V',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'wide',
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
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
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
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'wide',
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
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
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
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
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
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
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
    alt: 'Kennedy Town, Hong Kong — December 2024',
  },
  {
    id: '2-041', title: 'Technician',
    src: '/photos/2-041.jpg',
    date: '2024-12-28', location: 'Hong Kong',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 90mm V',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'Technician, Hong Kong — December 2024',
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
  {
    id: '2-045', title: 'Dawn at Bund',
    src: '/photos/2-045.jpg',
    date: '2024-07-28', location: 'Shanghai, China',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'wide',
    alt: 'Dawn at Bund, Shanghai, China — July 2024',
  },
  {
    id: '2-046', title: 'The Church',
    src: '/photos/2-046.jpg',
    date: '2025-04-28', location: 'Cobh, Ireland',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'The Church, Cobh, Ireland — April 2025',
  },
  {
    id: '2-047', title: 'May God Bless You',
    src: '/photos/2-047.jpg',
    date: '2025-04-28', location: 'Dublin, Ireland',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'May God Bless You, Dublin, Ireland — April 2025',
  },
  {
    id: '2-048', title: 'The University of Cambridge',
    src: '/photos/2-048.jpg',
    date: '2025-05-01', location: 'Cambridge, UK',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'wide',
    alt: 'The University of Cambridge, Cambridge, UK — May 2025',
  },
  {
    id: '2-050', title: 'Jinan Temple',
    src: '/photos/2-050.jpg',
    date: '2024-07-22', location: 'Shanghai, China',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'Jinan Temple, Shanghai, China — July 2024',
  },
  {
    id: '2-051', title: 'Tranquility',
    src: '/photos/2-051.jpg',
    date: '2024-07-22', location: 'Shanghai, China',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'Tranquility, Shanghai, China — July 2024',
  },
  {
    id: '2-052', title: 'Dusk at Bund',
    src: '/photos/2-052.jpg',
    date: '2024-07-22', location: 'Shanghai, China',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'wide',
    alt: 'Dusk at Bund, Shanghai, China — July 2024',
  },
  {
    id: '2-053', title: 'Bund at Ningbo',
    src: '/photos/2-053.jpg',
    date: '2025-01-04', location: 'Ningbo, China',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'wide',
    alt: 'Bund at Ningbo, Ningbo, China — January 2025',
  },
  {
    id: '2-054', title: 'East New City',
    src: '/photos/2-054.jpg',
    date: '2025-01-04', location: 'Ningbo, China',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'East New City, Ningbo, China — January 2025',
  },
  {
    id: '2-055', title: 'SF City View',
    src: '/photos/2-055.jpg',
    date: '2025-03-24', location: 'San Francisco, USA',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @70mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'SF City View, San Francisco, USA — March 2025',
  },
  {
    id: '2-056', title: 'Council Hall',
    src: '/photos/2-056.jpg',
    date: '2025-03-24', location: 'San Francisco, USA',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    alt: 'Council Hall, San Francisco, USA — March 2025',
  },
  {
    id: '2-057', title: 'Stanford University',
    src: '/photos/2-057.jpg',
    date: '2025-03-24', location: 'Palo Alto, USA',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'wide',
    alt: 'Stanford University, Palo Alto, USA — March 2025',
  },
  {
    id: '2-058', title: 'Twins Peak',
    src: '/photos/2-058.jpg',
    date: '2025-04-08', location: 'San Francisco, USA',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'wide',
    alt: 'Twins Peak, San Francisco, USA — April 2025',
  },
  {
    id: '2-059', title: 'SF Night View',
    src: '/photos/2-059.jpg',
    date: '2025-03-24', location: 'San Francisco, USA',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @70mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'wide',
    alt: 'SF Night View, San Francisco, USA — March 2025',
  },
  {
    id: '2-060', title: 'Golden Gate Bridge at Dusk',
    src: '/photos/2-060.jpg',
    date: '2025-04-10', location: 'San Francisco, USA',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    alt: 'Golden Gate Bridge at Dusk, San Francisco, USA — April 2025',
  },
  {
    id: '2-061', title: 'MC City View',
    src: '/photos/2-061.jpg',
    date: '2025-04-20', location: 'Manchester, UK',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @70mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'MC City View, Manchester, UK — April 2025',
  },
  {
    id: '2-062', title: 'Country View',
    src: '/photos/2-062.jpg',
    date: '2025-04-20', location: 'Disley, UK',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @70mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'Country View, Disley, UK — April 2025',
  },
  {
    id: '2-063', title: 'MC Night View',
    src: '/photos/2-063.jpg',
    date: '2025-04-20', location: 'Manchester, UK',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'MC Night View, Manchester, UK — April 2025',
  },
  {
    id: '2-064', title: 'Glory',
    src: '/photos/2-064.jpg',
    date: '2025-04-20', location: 'Liverpool, UK',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'Glory, Liverpool, UK — April 2025',
  },
  {
    id: '2-065', title: 'London Bridge',
    src: '/photos/2-065.jpg',
    date: '2025-05-04', location: 'London, UK',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @70mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    alt: 'London Bridge, London, UK — May 2025',
  },
  {
    id: '2-066', title: 'Dawn at SJ',
    src: '/photos/2-066.jpg',
    date: '2025-09-22', location: 'San Jose, USA',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'Dawn at SJ, San Jose, USA — September 2025',
  },
  {
    id: '2-067', title: 'The TOILET',
    src: '/photos/2-067.jpg',
    date: '2025-09-22', location: 'San Jose, USA',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    alt: 'The TOILET, San Jose, USA — September 2025',
  },
  {
    id: '2-068', title: 'Sierra Vista',
    src: '/photos/2-068.jpg',
    date: '2025-09-28', location: 'San Jose, USA',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'wide',
    alt: 'Sierra Vista, San Jose, USA — September 2025',
  },
  {
    id: '2-069', title: 'Traffic',
    src: '/photos/2-069.jpg',
    date: '2025-03-22', location: 'San Francisco, USA',
    camera: 'Sony A7R V',
    lens: 'Tamron 50-400mm F4.5-6.3 Di III VC VXD @400mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'Traffic, San Francisco, USA — March 2025',
  },
  {
    id: '2-070', title: 'Big Ben',
    src: '/photos/2-070.jpg',
    date: '2025-05-02', location: 'London, UK',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @70mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'Big Ben, London, UK — May 2025',
  },
  {
    id: '2-071', title: 'Knight',
    src: '/photos/2-071.jpg',
    date: '2025-05-02', location: 'London, UK',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @70mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'Knight, London, UK — May 2025',
  },
  {
    id: '2-072', title: 'Sky Tower',
    src: '/photos/2-072.jpg',
    date: '2025-10-10', location: 'Auckland, New Zealand',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @70mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'Sky Tower, Auckland, New Zealand — October 2025',
  },
  {
    id: '2-073', title: 'The Opera House',
    src: '/photos/2-073.jpg',
    date: '2025-10-20', location: 'Sydney, Australia',
    camera: 'Sony A7R V',
    lens: 'Tamron 50-400mm F4.5-6.3 Di III VC VXD @400mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    alt: 'The Opera House, Sydney, Australia — October 2025',
  },
  {
    id: '2-074', title: 'Minion',
    src: '/photos/2-074.jpg',
    date: '2024-12-24', location: 'Singapore',
    camera: 'Leica M11P',
    lens: 'Voigtlander 50mm f/2.0 APO-Lanthar ASPH',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'wide',
    alt: 'Minion, Singapore — December 2024',
  },
  {
    id: '2-075', title: 'National Gallery',
    src: '/photos/2-075.jpg',
    date: '2025-08-24', location: 'Singapore',
    camera: 'Leica M11P',
    lens: 'Voigtlander 35mm f/2.0 APO-Lanthar ASPH',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'National Gallery, Singapore — August 2025',
  },
  {
    id: '2-076', title: 'Raffles City',
    src: '/photos/2-076.jpg',
    date: '2024-05-24', location: 'Singapore',
    camera: 'Leica M11P',
    lens: 'Voigtlander 50mm f/2.0 APO-Lanthar ASPH',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'Raffles City, Singapore — May 2024',
  },
  {
    id: '2-077', title: 'The Square',
    src: '/photos/2-077.jpg',
    date: '2025-04-28', location: 'Amsterdam, Netherlands',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'The Square, Amsterdam, Netherlands — April 2025',
  },
  {
    id: '2-078', title: 'Station at the Beach',
    src: '/photos/2-078.jpg',
    date: '2026-01-04', location: 'Duoliang, Taiwan',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'tall',
    alt: 'Station at the Beach, Duoliang, Taiwan — January 2026',
  },
  {
    id: '2-079', title: 'Ferris Wheel',
    src: '/photos/2-079.jpg',
    date: '2017-10-04', location: 'Tokyo, Japan',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 24-70mm f/2.8L II USM @24mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'wide',
    alt: 'Ferris Wheel, Tokyo, Japan — October 2017',
  },
  {
    id: '2-080', title: 'Tokyo Tower',
    src: '/photos/2-080.jpg',
    date: '2017-12-04', location: 'Tokyo, Japan',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'EF 24-70mm f/2.8L II USM @24mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'Tokyo Tower, Tokyo, Japan — December 2017',
  },
  {
    id: '2-081', title: 'Marina Bay',
    src: '/photos/2-081.jpg',
    date: '2023-12-04', location: 'Singapore',
    camera: 'DJI Mavic Pro',
    lens: '28mm equiv. f/2.8',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'wide',
    alt: 'Marina Bay, Singapore — December 2023',
  },
  {
    id: '2-082', title: 'Hive at NTU',
    src: '/photos/2-082.jpg',
    date: '2024-01-04', location: 'Singapore',
    camera: 'Sony A7R V',
    lens: 'FE 16-35mm F2.8 GM II @16mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'Hive at NTU, Singapore — January 2024',
  },
  {
    id: '2-083', title: 'The Mosque',
    src: '/photos/2-083.jpg',
    date: '2024-02-04', location: 'Kuala Lumpur, Malaysia',
    camera: 'Sony A7R V',
    lens: 'Tamron 50-400mm F4.5-6.3 Di III VC VXD @50mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'The Mosque, Kuala Lumpur, Malaysia — February 2024',
  },
  {
    id: '2-084', title: 'Petraos Twin Towers',
    src: '/photos/2-084.jpg',
    date: '2024-02-04', location: 'Kuala Lumpur, Malaysia',
    camera: 'Sony A7R V',
    lens: 'FE 24-70mm f/2.8 GM II @24mm',
    exposure: '',   // fill in real parameters
    category: 'Architecture',
    preset: 'architecture', palette: 'midnight', aspect: 'tall',
    alt: 'Petraos Twin Towers, Kuala Lumpur, Malaysia — February 2024',
  },
  {
    id: '2-085', title: 'Hustle and Bustle',
    src: '/photos/2-085.jpg',
    date: '2026-01-04', location: 'Taipei, Taiwan',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '',   // fill in real parameters
    category: 'Street',
    preset: 'street', palette: 'midnight', aspect: 'wide',
    alt: 'Hustle and Bustle, Taipei — January 2026',
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
  {
    id: '3-003', title: 'Bee',
    src: '/photos/3-003.jpg',
    date: '2020-09-19', location: 'Hangzhou, China',
    camera: 'Canon EOS 5D Mark IV',
    lens: 'Laowa 100mm F2.8 CA-Dreamer Macro 2X',
    exposure: '1/200s · f/8 · 100mm · ISO 400',
    category: 'Macro',
    preset: 'macro', palette: 'rose', aspect: 'wide',
    alt: 'Insect macro at f/8, 100mm, September 2020',
  },
  {
    id: '3-004', title: 'Dew',
    src: '/photos/3-004.jpg',
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
    preset: 'portrait', palette: 'rose', aspect: 'square',
    alt: 'Telephoto portrait, Hangzhou, August 2020',
  },
  {
    id: '4-002', title: 'Omakase',
    src: '/photos/4-002.jpg',
    date: '2025-06-09', location: 'Singapore',
    camera: 'Leica M11P',
    lens: 'Voigtlander 35mm f/2.0 APO-Lanthar ASPH',
    exposure: '',
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
    preset: 'portrait', palette: 'rose', aspect: 'square',
    alt: 'Telephoto portrait, Shanghai, November 2024',
  },
  {
    id: '4-007', title: 'Casual',
    src: '/photos/4-007.jpg',
    date: '2025-10-19', location: 'Omaru, New Zealand',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '1/250s · f/5.6 · 300mm · ISO 100',
    category: 'Portrait',
    preset: 'portrait', palette: 'rose', aspect: 'tall',
    alt: 'Telephoto portrait, Omaru, October 2025',
  },
  {
    id: '4-008', title: 'The Pianist',
    src: '/photos/4-008.jpg',
    date: '2025-10-20', location: 'Queenstown, New Zealand',
    camera: 'Hasselblad X2D 100C',
    lens: 'XCD 35-75 @35mm',
    exposure: '1/250s · f/5.6 · 300mm · ISO 100',
    category: 'Portrait',
    preset: 'portrait', palette: 'rose', aspect: 'tall',
    alt: 'Telephoto portrait, Queenstown, October 2025',
  },
  {
    id: '4-009', title: 'Omakase Girl',
    src: '/photos/4-009.jpg',
    date: '2025-06-09', location: 'Singapore',
    camera: 'Leica M11P',
    lens: 'Voigtlander 35mm f/2.0 APO-Lanthar ASPH',
    exposure: '',
    category: 'Portrait',
    preset: 'portrait', palette: 'rose', aspect: 'square',
    alt: 'Telephoto portrait, Singapore, June 2025',
  },

];

export const featured = photos.filter((p) => p.featured);
export const photosByCategory = (c: Category) => photos.filter((p) => p.category === c);
