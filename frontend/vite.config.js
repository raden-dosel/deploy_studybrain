import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://studybrain-backend.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
