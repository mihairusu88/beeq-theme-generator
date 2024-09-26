import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all BEEQ tags as custom elements
          isCustomElement: (tag) => tag.includes('bq-'),
        },
      },
    }),
    vueJsx(),
    /**
     * Make sure the icon SVG files get served under the URL:
     * http(s)://<base_url>/svg/
     */
    viteStaticCopy({
      targets: [
        {
          src: './node_modules/@beeq/core/dist/beeq/svg/*',
          dest: '',
        },
        {
          src: './src/assets/*',
          dest: 'assets',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
