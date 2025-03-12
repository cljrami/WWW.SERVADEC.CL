// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

import partytown from '@astrojs/partytown';

import metaTags from 'astro-meta-tags';

import pageInsight from 'astro-page-insight';

// https://astro.build/config
export default defineConfig({
outDir: './public_html',
site: 'https://www.servadec.cl',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap(), robotsTxt(), partytown(), metaTags(), pageInsight()]
});