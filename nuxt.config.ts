// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/image', '@nuxt/content', '@vueuse/nuxt'],

  devtools: { enabled: false },
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
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-dark',
            dark: 'vitesse-dark',
            // sepia: 'monokai',
          },
        },
      },
    },
    // watch: {
    //   enabled: true,
    //   port: 4000,
    //   showURL: true,
    // },
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
