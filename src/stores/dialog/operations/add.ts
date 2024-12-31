import { defineStore, acceptHMRUpdate } from 'pinia'

export const useDialogOperationsAddStore = defineStore('dialogOperationsAdd', {
  state: () => ({
    show: false,
  }),
  actions: {
    open() {
      this.show = true
    },
    close() {
      this.show = false
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useDialogOperationsAddStore, import.meta.hot),
  )
}
