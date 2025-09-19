import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.string(),
    client: z.string().optional(),
    role: z.array(z.string()),
    duration: z.string().optional(),
    tags: z.array(z.string()).optional(),
    outcomes: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { work, posts };
