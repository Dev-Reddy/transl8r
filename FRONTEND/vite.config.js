import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
  server: {
    host: true, // This enables binding to all network interfaces (0.0.0.0)
    port: 5173, // Optional, to specify the port explicitly
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:5000", // Your Express backend
    //     changeOrigin: true,
    //   },
    // },
  },
});
