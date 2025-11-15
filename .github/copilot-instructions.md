# AI Agent Instructions for chrismackintosh-portfolio

This document provides essential context for AI agents working with this codebase.

## Project Overview

This is an Astro-based portfolio website with content management using MDX. The site serves as a personal portfolio showcasing work examples and blog posts.

## Key Architecture Components

### Content Management
- Content is managed through MDX files in `src/content/{work,posts}/`
- Content schemas are defined in `src/content/config.ts`
- Work items schema includes: title, subtitle, date, client, role, duration, tags, outcomes
- Posts schema includes: title, date, description, tags

### Routing Structure
- Work items: `/work/[slug]`
- Blog posts: `/writing/[slug]`
- Each content type has its own index page

## Development Workflow

### Common Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run format   # Format code with Prettier
```

### Key Configuration
- Site is configured for GitHub Pages deployment (`astro.config.mjs`)
- Base path is set to "/portfolio"
- Uses Tailwind CSS for styling
- Supports MDX content with frontmatter

## Project-Specific Patterns

### Content Creation
1. New work items go in `src/content/work/` as MDX files
2. New blog posts go in `src/content/posts/` as MDX files
3. All content must follow the schema defined in `src/content/config.ts`

### Assets and Images
- Public assets go in `/public/`
- Per-content images follow the pattern: `/public/images/{work,posts}/[slug]/`

### Component Guidelines
- Page layouts use `src/layouts/Base.astro`
- All paths must use the `withBase()` utility from `src/utils/withBase.ts`

## Integration Points
- TailwindCSS for styling
- MDX for content
- Framer Motion for animations
- Sitemap generation (configurable via env vars)

## Deployment
- Built for GitHub Pages
- Indexing can be controlled via `PUBLIC_INDEXABLE` environment variable