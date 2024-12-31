// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-12-27',
  ssr: false,
  devtools: { enabled: true },
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],
  build: {
    transpile: ['vuetify'], // Ensures that Vuetify is transpiled
  },
  vite: {
    define: {
      'process.env.DEBUG': false, // Necessary for Vuetify
    },
  },
  plugins: ['~/plugins/global'],
  modules: ['@pinia/nuxt', '@nuxtjs/supabase'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
  },
})
