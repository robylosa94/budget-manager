import { defineStore, acceptHMRUpdate } from 'pinia'

interface OperationType {
  type: string | null
  description: string | null
  amount: number | null
  label: string | null
  recurring?: boolean | null
}

export const useOperationsAddStore = defineStore('operationsAdd', {
  state: () => ({
    loading: false,
    type: null,
    description: null,
    amount: null,
    label: null,
    recurring: false,
  }),
  actions: {
    async addOperation() {
      try {
        const client = useSupabaseClient()
        this.loading = true

        const { error } = await client
          .from('operations')
          .insert(this.payload)
          .select()

        return { err: error }
      } catch (err: any) {
        console.error('Error adding operation:', err.message)
      } finally {
        this.loading = false
      }
    },
  },
  getters: {
    payload: (state) => {
      const { type, description, amount, label, recurring }: OperationType =
        state
      return {
        type,
        description,
        amount,
        label,
        recurring,
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useOperationsAddStore, import.meta.hot),
  )
}
