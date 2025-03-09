import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173, // Use the PORT environment variable or default to 3000
    host: "0.0.0.0", // Allow external access
  },
  preview: {
    allowedHosts: ['meghs-portfolio.onrender.com'],
  }
});
