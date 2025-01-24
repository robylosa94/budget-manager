import { defineStore, acceptHMRUpdate } from 'pinia'
import { useMixinsCommonStore } from '~/stores/mixins/common'

interface SnackbarType {
  enabled: boolean
  type: string | null
  title: string | null
  content?: string | null
}

export const useMiscSnackbarStore = defineStore('miscSnackbar', {
  state: (): SnackbarType => ({
    enabled: false,
    type: null,
    title: null,
    content: null,
  }),
  actions: {
    enable(data: SnackbarType) {
      this.enabled = true
      const mixinsCommonStore = useMixinsCommonStore()
      mixinsCommonStore.updateMultipleStoreKey({ store: this.$state, data })
    },
    disable() {
      this.$reset()
    },
  },
  getters: {
    backgroundColor() {
      switch (this.type) {
        case 'error':
          return '#F1C2CA'
        case 'success':
          return '#A3DFA4'
        case 'warning':
          return '#FFF2D9'
        case 'info':
          return '#D4DFF5'
        default:
          return ''
      }
    },
    textColor() {
      switch (this.type) {
        case 'error':
          return '#260207'
        case 'success':
          return '#041A04'
        case 'warning':
          return '#48340D'
        case 'info':
          return '#081329'
        default:
          return ''
      }
    },
    icon() {
      switch (this.type) {
        case 'error':
          return 'mdi-alert-circle-outline'
        case 'success':
          return 'mdi-check-circle-outline'
        case 'warning':
          return 'mdi-alert-outline'
        case 'info':
          return 'mdi-information-outline'
        default:
          return ''
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMiscSnackbarStore, import.meta.hot))
}
