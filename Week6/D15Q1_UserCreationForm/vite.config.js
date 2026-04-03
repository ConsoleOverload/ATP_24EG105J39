import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
 server: {
    host: '0.0.0.0',                 // ✅ allow external devices
    port: 5173,
    strictPort: true,
    allowedHosts: ['.ngrok-free.dev'] // ✅ allow ALL ngrok links
  }
  
})
