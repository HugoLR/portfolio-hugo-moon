// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

import tailwindcss from '@tailwindcss/vite';
import { i18nConfig } from '@/i18n/config';

// https://astro.build/config
export default defineConfig({
  ...i18nConfig,
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  }
});