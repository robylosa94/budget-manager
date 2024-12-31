import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles' // Importa gli stili globali di Vuetify
import { ref } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  const isDarkMode = ref(true)

  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: isDarkMode.value ? 'dark' : 'light',
      themes: {
        light: {
          colors: {
            primary: '#98FB98',
            secondary: '#FFDAB9',
            // azure: '#ADD8E6',
            // ciano: '#E0FFFF',
            // yellow: '#FFFFE0',
          },
        },
        dark: {
          colors: {
            primary: '#004C00',
            secondary: '#995C33',
            // azure: '#003366',
            // ciano: '#006666',
            // yellow: '#666600',
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)

  nuxtApp.provide('toggleTheme', () => {
    isDarkMode.value = !isDarkMode.value
    vuetify.theme.defaultTheme = isDarkMode.value ? 'dark' : 'light'
  })
})
