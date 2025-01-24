import { defineStore, acceptHMRUpdate } from 'pinia'

export const useMixinsCommonStore = defineStore('mixinsCommonSnackbar', {
  state: () => ({}),
  actions: {
    updateMultipleStoreKey({ store, data }: { store: any; data: object }) {
      Object.assign(store, data)
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMixinsCommonStore, import.meta.hot))
}
