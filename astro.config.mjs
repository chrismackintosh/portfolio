// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Your GitHub *profile* URL, no trailing slash
  site: "https://chrismackintosh.github.io",
  // Your *repo* name, with a leading slash
  base: "/chrismackintosh-portfolio",
  vite: { plugins: [tailwindcss()] },
  integrations: [mdx(), sitemap()],
});
