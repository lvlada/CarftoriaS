import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    proxy: {
      '/api/craftmans': {
        target: 'http://63.178.38.11:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/craftmans/, '/CraftoriaS/api/craftmans')
      }
    }
  }
});
