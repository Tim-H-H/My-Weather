import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    // All requests to `/api` will be proxied to the OpenWeather API
    '/api': {
      target: 'https://api.openweathermap.org',  // Target API URL
      changeOrigin: true,  // Changes the origin of the host header to the target
      secure: true,  // Set to false if using http (not recommended for production)
      rewrite: (path) => path.replace(/^\/api/, '')  // Remove /api prefix before forwarding
    }
  }
});
