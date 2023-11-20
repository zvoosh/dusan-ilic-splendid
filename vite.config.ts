// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/zvoosh.github.io/",
  resolve: {
    alias: {
      '@components': './src/components', // Corrected alias path
    },
  },
});