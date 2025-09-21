# 📂 Project Board — chrismackintosh-portfolio

A lightweight Kanban for tracking the portfolio build.

---

## ✅ Done

- Scaffolded Astro project (`npm create astro@latest`)
- Installed Tailwind v4, MDX, Sitemap, Typography, Lenis, Framer Motion, Iconify
- Prettier + Tailwind plugin setup (auto-sorts classes)
- Added Inter variable font (base-safe)
- Created content collections (`work`, `posts`) with schema
- Added dynamic routes with `getStaticPaths`
- GitHub Pages deploy workflow passing
- Fonts + CSS fixed for base URL
- Removed `grain.png` background (was causing base path issue)
- Audit all internal links (`/work/`, `/posts/`, `/`) → switch to base-aware links

---

## 🚧 In Progress

---

## 📋 To Do

### Design Tokens

- [ ] Define colors, typography, spacing, motion in Figma
- [ ] Extend `tailwind.config.mjs` with tokens

### Components

- [ ] `WorkCard.astro`
- [ ] `Stat.astro`
- [ ] `Hero.astro`
- [ ] `BlogLayout.astro`
- [ ] Navigation + Footer

### Layouts

- [ ] `Work.astro` → Hero + Problem/Approach/Outcome + Gallery
- [ ] `Post.astro` → Typography-styled content
- [ ] `index.astro` → Featured Work + Featured Posts

### SEO & Metadata

- [ ] Add Open Graph tags (title, description, image)
- [ ] Add structured data (JSON-LD)
- [ ] Add favicon + manifest
- [ ] Add robots.txt
- [ ] Confirm sitemap integration

### Deployment

- [ ] Decide staging vs production:
  - GitHub Pages (keep base config)
  - OR move to Vercel/Netlify for custom domain + previews
- [ ] Point DNS for `chrismackintosh.work`

---

⚡ Workflow reminder: **Design in Figma → Define tokens → Wire tokens into Tailwind → Build components/layouts → Author MDX content → Deploy.**
