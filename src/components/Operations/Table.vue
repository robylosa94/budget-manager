<template>
  <v-skeleton-loader type="table-tbody" :loading="loading" class="my-10">
    <v-data-table
      :headers="headers"
      :items="filteredBody"
      :sortable="false"
      item-value="id"
      class="elevation-1"
    >
      <template #['item.type']="{ item }">
        <v-icon v-if="item.type === 'in'" icon="mdi-bank-transfer-in" size="x-large" color="green" />
        <v-icon v-else icon="mdi-bank-transfer-out" size="x-large" color="red" />
      </template>
      <template #['item.label']="{ item }">
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
    { title: 'Inserito il', value: 'created_at' },
    { title: 'Descrizione', value: 'description' },
    { title: 'Importo', value: 'amount' },
    { title: 'Etichetta', value: 'label' },
    { title: '', value: 'type' },
  ]
})

const filteredBody = computed(() =>
  body.value.map(({ created_at, description, amount, type, label }) => ({
    created_at,
    description,
    amount,
    type,
    label,
  })),
)
</script>
