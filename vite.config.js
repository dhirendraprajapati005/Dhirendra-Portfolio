import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react({
      babel: {
        babelrc: false,
        configFile: false,
        plugins: [], // ⚠ avoid legacy transforms
        presets: [], // optionally remove extra presets
      }
    }),
    tailwindcss()
  ],
  build: {
    target: 'es2020', // ✅ Only modern browsers
    assetsInlineLimit: 0, // Optional: Prevent large images from being inlined
    sourcemap: false,     // Optional: Remove source maps for production
    chunkSizeWarningLimit: 500, // Optional: suppress warning if chunks are big
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable' // ✅ Efficient cache
    }
  }
});
