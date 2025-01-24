const snackbar = (props) => {
  const store = useMiscSnackbarStore()
  store.enable(props)
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      snackbar,
    },
  }
})
