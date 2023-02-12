import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/pokedex-app/",
  plugins: [react()],
  root: "src",
  server: {
    port: $PORT || 8000,
  },
});
