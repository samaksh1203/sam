import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sam/', // ✅ ensures all assets load from /wed/
  build: {
    outDir: 'dist'
  }
})
