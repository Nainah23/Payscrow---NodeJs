import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  root: '.',
  build: {
    outDir: 'dist', // Ensure the output directory is "dist"
    emptyOutDir: true, // Automatically empty the output directory before building
  },
});
