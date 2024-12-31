export default defineNuxtPlugin((nuxtApp) => {
  const snackbar = (data) => {
    const storeSnackbar = useMiscSnackbarStore()
    storeSnackbar.enable(data)
  }

  const global = {
    snackbar,
  }
  nuxtApp.provide('global', global)
})
