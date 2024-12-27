// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-12-27',
  devtools: { enabled: true },
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],

  build: {
    transpile: ['vuetify'], // Assicura che Vuetify venga transpile
  },

  vite: {
    define: {
      'process.env.DEBUG': false, // Necessario per Vuetify
    },
  },
})
