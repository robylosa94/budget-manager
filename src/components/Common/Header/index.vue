<template>
  <header>
    <v-container max-width="1024" class="d-flex align-center">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/settings">Settings</NuxtLink>
      <v-btn
        density="comfortable"
        :icon="
          themeValue === 'light'
            ? 'mdi-weather-night'
            : 'mdi-white-balance-sunny'
        "
        class="ml-auto"
        @click="toggleTheme"
      />
    </v-container>
  </header>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { computed } from 'vue'

const theme = useTheme()
const themeValue = computed(() => theme.global.name.value)
const toggleTheme = () => {
  theme.global.name.value = themeValue.value === 'light' ? 'dark' : 'light'
}
</script>
