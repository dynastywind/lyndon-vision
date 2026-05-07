import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lyndon-vision.example.com',
  // Base path — change to '/repo-name' if deploying to GitHub Pages under a project
  base: '/',
  build: {
    assets: 'assets',
  },
});
