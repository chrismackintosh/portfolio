// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const indexable = process.env.PUBLIC_INDEXABLE !== "false";

export default defineConfig({
  // Your GitHub *profile* URL, no trailing slash
  site: "https://chrismackintosh.github.io",
  // Your *repo* name, with a leading slash
  base: "/portfolio",
  vite: { plugins: [tailwindcss()] },
  integrations: [mdx(), ...(indexable ? [sitemap()] : [])],
});
