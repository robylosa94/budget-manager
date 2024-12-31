<template>
  <div class="d-flex justify-space-between">
    <h2>Le operazioni di questo mese</h2>
    <v-btn
      variant="outlined"
      prepend-icon="mdi-plus"
      @click="dialogAddStore.open"
      >Nuova operazione</v-btn
    >
  </div>
  <operations-dialog-add />
</template>

<script setup lang="ts">
const dialogAddStore = useDialogOperationsAddStore()
</script>
