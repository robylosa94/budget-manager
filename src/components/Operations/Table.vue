<template>
  <v-data-table :headers="header" :items="body" />
</template>

<script>
import { ref, onMounted } from 'vue'
const { $supabase } = useNuxtApp()

export default {
  setup() {
    const headers = ref([
      { text: 'ID', align: 'start', key: 'id' },
      { text: 'Description', align: 'start', key: 'description' },
      { text: 'Amount', align: 'end', key: 'amount' },
      { text: 'Type', align: 'start', key: 'type' },
      { text: 'Label', align: 'start', key: 'label' },
    ])
    const body = ref([])

    const fetchOperations = async () => {
      try {
        const { data, error } = await $supabase.from('operations').select('*') // Get all columns from operations table

        if (error) {
          console.error('Error fetching operations:', error.message)
        } else {
          operations.value = data
        }
      } catch (err) {
        console.error('Unexpected error:', err.message)
      }
    }

    onMounted(fetchOperations)

    return {
      headers,
      body,
    }
  },
}
</script>
