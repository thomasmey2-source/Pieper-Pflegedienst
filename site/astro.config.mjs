import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pflegedienstpieper.de',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    // sitemap(), // reaktivieren sobald mehrere Routen existieren — crasht bei nur 1 Seite
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
