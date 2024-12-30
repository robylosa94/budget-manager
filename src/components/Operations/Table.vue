<template>
  <v-skeleton-loader type="table-tbody" :loading="store.loading" class="my-10">
    <v-data-table
      :headers="store.headers"
      :items="store.filteredBody"
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
const store = useOperationsTableStore()

onMounted(() => {
  store.fetchOperations()
})
</script>
