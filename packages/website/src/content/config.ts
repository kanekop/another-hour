import { defineCollection, z } from 'astro:content';

const stories = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
    lang: z.enum(['ja', 'en'])
  })
});

const concepts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    lang: z.enum(['ja', 'en'])
  })
});

export const collections = { stories, concepts }; 