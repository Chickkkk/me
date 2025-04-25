// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/image'],

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ui: {
    fonts: false,
    theme: {
      colors: [
        'primary',
        'secondary',
        'warning',
        'error',
        'neutral',
      ],
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN',
        class: 'h-full',
      },
      bodyAttrs: {
        // class: 'antialiased bg-amber-300 dark:bg-black min-h-screen',
      },
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      standalone: false,
    },
  },
  icon: {
    customCollections: [{
      prefix: 'qk',
      dir: './assets/icons',
    }],
  },
})
