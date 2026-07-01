import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // For GitHub Pages deploy at https://Tishan-001.github.io set:
  //   site: 'https://Tishan-001.github.io',
  // If deploying to a project repo (e.g. /portfolio), also add:
  //   base: '/portfolio',
  site: 'https://tishan-001.github.io',
  integrations: [tailwind()],
});
