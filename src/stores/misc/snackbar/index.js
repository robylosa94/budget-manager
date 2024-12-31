import { defineStore, acceptHMRUpdate } from 'pinia'

export const useMiscSnackbarStore = defineStore('miscSnackbar', {
  state: () => ({
    enabled: false,
    type: null,
    title: null,
    content: null,
  }),
  actions: {
    enable(data) {
      data.enabled = true

      const { type, title, content } = data
      data.type = type
      data.title = title
      data.content = content
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMiscSnackbarStore, import.meta.hot))
}
