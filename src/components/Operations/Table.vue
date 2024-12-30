<template>
  <v-skeleton-loader type="table-tbody" :loading="loading" class="my-10">
    <v-data-table
      :headers="headers"
      :items="filteredBody"
      item-value="id"
      class="elevation-1"
    >
      <template #item.type="{ item }">
        <v-icon
          :icon="
            item.type === 'in'
              ? 'mdi-bank-transfer-in'
              : 'mdi-bank-transfer-out'
          "
          :size="'x-large'"
          :color="item.type === 'in' ? 'green' : 'red'"
        />
      </template>
      <template #item.label="{ item }">
        <v-chip>{{ item.label }}</v-chip>
      </template>
    </v-data-table>
  </v-skeleton-loader>
</template>

<script setup lang="ts">
const client = useSupabaseClient()
const body = ref([])
const loading = ref(true)

onMounted(() => {
  fetchOperations()
})

const fetchOperations = async () => {
  const { data, error } = await client.from('operations').select('*')

  loading.value = false

  if (error) {
    console.error('Error fetching operations:', error.message)
    body.value = []
  } else {
    body.value = data || []
  }
}

const headers = computed(() => {
  return [
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
  ]
})

const filteredBody = computed(() =>
  body.value.map(({ created_at, description, amount, type, label }) => ({
    created_at: formatDateLongNumeric(created_at),
    description,
    amount: toEuro(amount),
    type,
    label,
  })),
)
</script>
