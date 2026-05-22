import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/vds-color-v2/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
