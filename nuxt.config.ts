// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: ['@nuxt/ui'],
  ui: {
    fonts: false
  },
  css: ['~/assets/css/main.css']
});
