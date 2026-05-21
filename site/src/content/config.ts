import { defineCollection, z } from 'astro:content';

const leistungen = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    pflegekasse: z.object({
      sgb: z.enum([
        'SGB V',
        'SGB XI',
        'Entlastungsbetrag',
        'Verhinderungspflege',
        'Privat',
        'Gemischt',
      ]),
      note: z.string().optional(),
    }),
    included: z.array(z.string()),
    forWhom: z.string(),
    iconPath: z.string(),
    order: z.number(),
    publishedAt: z.date(),
    seoTitle: z.string().optional(),
    seoDescription: z.string(),
  }),
});

export const collections = {
  leistungen,
};
