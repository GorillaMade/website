import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const showcase = defineCollection({
  loader: glob({
    base: "./src/content/showcases",
    pattern: "**/*.{md,mdx}",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      description: z.string(),

      client: z.string(),
      url: z.string().optional(),
      year: z.string(),
      category: z.string(),

      logo: image().optional(),
      cover: image().optional(),
      services: z.array(z.string()),

      quote: z.string().optional(),
      quoteAuthor: z.string().optional(),
      quoteAuthorFunction: z.string().optional(),

      featured: z.boolean().default(false),
    }),
});

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.{md,mdx}",
  }),
  schema: ({ image }) =>
    z.object({
      cover: z.union([image(), z.string().url()]).optional(),
      title: z.string(),
      date: z.coerce.date(),
      description: z.string(),
      category: z.string(),
      author: z.object({
        name: z.string(),
        avatar: z.string().default("/static/image/author.avif"),
      }),
    }),
});

export const collections = { showcase, blog };
