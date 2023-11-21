// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// add the beginning of your app entry
// import 'vite/modulepreload-polyfill'

export default defineConfig({
  plugins: [react()],
  base: "/dusan-ilic-splendid/",
  // resolve: {
  //   alias: {
  //     '@components': './src/components', // Corrected alias path
  //   },
  // },
  // build: {
  //   // generate .vite/manifest.json in outDir
  //   manifest: true,
  //   rollupOptions: {
  //     // overwrite default .html entry
  //     input: 'src/main.tsx',
  //   },
  // },
});