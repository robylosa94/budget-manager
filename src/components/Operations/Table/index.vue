<template>
  <operations-table-header />
  <v-skeleton-loader type="table-tbody" :loading="store.loading" class="my-10">
    <v-data-table
      :headers="store.headers"
      :items="store.filteredBody"
      item-value="id"
    >
      <template #item.description="{ item }">
        <v-chip class="mr-2">{{ item.label }}</v-chip>
        <span>{{ item.description }}</span>
      </template>
      <template #item.out="{ item }">
        <div v-if="item.type === 'out'">
          <v-icon
            v-if="item.recurring"
            icon="mdi-sync"
            size="small"
            class="mr-2 opacity-70"
          />
          <strong class="text-red">{{ item.amount }} €</strong>
        </div>
      </template>
      <template #item.in="{ item }">
        <div v-if="item.type === 'in'">
          <v-icon
            v-if="item.recurring"
            icon="mdi-sync"
            size="small"
            class="mr-2"
          />
          <strong class="text-green">{{ item.amount }} €</strong>
        </div>
      </template>
    </v-data-table>
  </v-skeleton-loader>
</template>

<script setup lang="ts">
const store = useOperationsTableStore()

onMounted(() => {
  store.getOperations()
})
</script>
