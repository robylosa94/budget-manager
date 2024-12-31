import { defineStore, acceptHMRUpdate } from 'pinia'

export const useOperationsTableStore = defineStore('operationsTable', {
  state: () => ({
    loading: true,
    headers: [
      {
        title: 'Inserito il',
        value: 'created_at',
        sortable: true,
      } as const,
      {
        title: 'Descrizione',
        value: 'description',
      } as const,
      {
        title: 'Uscita',
        value: 'out',
        align: 'end',
      } as const,
      {
        title: 'Entrata',
        value: 'in',
        align: 'end',
      } as const,
    ],
    body: [] as Array<any>,
  }),
  actions: {
    async getOperations() {
      const client = useSupabaseClient()
      const { data, error } = await client
        .from('operations')
        .select('*')
        .order('created_at', { ascending: false })

      this.loading = false

      if (error) {
        console.error('Error fetching operations:', error.message)
        this.body = []
      } else {
        this.body = data || []
      }
    },
  },
  getters: {
    filteredBody: (state) =>
      state.body.map(
        ({ created_at, description, amount, type, label, recurring }) => ({
          created_at: formatDateLongNumeric(created_at),
          description,
          amount: formatToEuro(amount),
          type,
          label,
          recurring,
        }),
      ),
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useOperationsTableStore, import.meta.hot),
  )
}
