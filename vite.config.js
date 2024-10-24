import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/whmc-website", //repo name for gh-pages
  plugins: [react()],
});
