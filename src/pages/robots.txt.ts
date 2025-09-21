import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const indexable = import.meta.env.PUBLIC_INDEXABLE !== "false";

  const lines = [
    "User-agent: *",
    indexable ? "Allow: /" : "Disallow: /",
    indexable
      ? `Sitemap: ${new URL("/sitemap-index.xml", import.meta.env.SITE ?? "/").toString()}`
      : "",
  ].filter(Boolean);

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
