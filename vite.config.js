import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    open: false,
    allowedHosts: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
    watch: {
      usePolling: true, // Prevents Windows EBUSY file-lock watcher crash
      interval: 1000,
    }
  }
});
