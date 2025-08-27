import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@sections": path.resolve(__dirname, "src/components/sections"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@animations": path.resolve(__dirname, "src/animations"),
      "@parallax": path.resolve(__dirname, "src/components/parallax"),
      "@common": path.resolve(__dirname, "src/components/common"),
    },
  },
});
