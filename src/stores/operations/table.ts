import { defineStore } from 'pinia'

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
        title: 'Etichetta',
        value: 'label',
      } as const,
      {
        title: 'Importo',
        value: 'amount',
        align: 'end',
      } as const,
      {
        title: '',
        value: 'type',
        align: 'center',
      } as const,
    ],
    body: [] as Array<any>,
  }),
  actions: {
    async fetchOperations() {
      const client = useSupabaseClient()
      const { data, error } = await client.from('operations').select('*')

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
      state.body.map(({ created_at, description, amount, type, label }) => ({
        created_at: formatDateLongNumeric(created_at),
        description,
        amount: toEuro(amount),
        type,
        label,
      })),
  },
})
