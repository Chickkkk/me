import { defineCollection, defineContentConfig, z } from '@nuxt/content'
// https://github.com/WiseLibs/better-sqlite3/issues/1331
export default defineContentConfig({
  collections: {
    // content: defineCollection({
    //   type: 'page',
    //   source: '**/*.md',
    // }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date(),
        qk: z.string(),
      }),
    }),
    // docs: defineCollection({
    //   type: 'page',
    //   source: {
    //     repository: 'https://github.com/nuxt/content',
    //     include: 'docs/content/**',
    //   },
    // }),
  },
})
