import * as path from 'path'
import { defineConfig } from 'vite'
import vitePWA from 'vite-pwa'
import react from '@vitejs/plugin-react-swc'
import svgr from '@honkhonk/vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), vitePWA(), (svgr as any).default()],

  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/styles/core' as *;\n`,
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },

  server: {
    host: 'localhost',
    port: 3000,
  },
})
