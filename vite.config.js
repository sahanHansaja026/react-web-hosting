// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-web-hosting/', // 👈 use the exact repo name here!
  plugins: [react()],
})
