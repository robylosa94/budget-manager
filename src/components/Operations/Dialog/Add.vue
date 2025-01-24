<template>
  <v-dialog v-model="storeDialog.show" max-width="600">
    <v-card title="Nuova operazione">
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-select
              v-model="store.type"
              :items="['out', 'in']"
              label="Tipo*"
              required
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="store.description"
              label="Descrizione*"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="store.amount"
              type="number"
              label="Importo*"
              required
              suffix="€"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-autocomplete
              v-model="store.label"
              :items="['stipendio', 'casa', 'benzina', 'varie']"
              label="Etichetta*"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-switch
              v-model="store.recurring"
              color="primary"
              label="Ricorrente"
            />
          </v-col>
        </v-row>
        <small class="text-caption text-medium-emphasis"
          >*campo obbligatorio</small
        >
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />
        <v-btn text="Annulla" variant="plain" @click="storeDialog.close" />
        <v-btn
          text="Salva"
          variant="tonal"
          :loading="store.loading"
          @click="add"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const { $snackbar } = useNuxtApp()
const store = useOperationsAddStore()
const storeDialog = useDialogOperationsAddStore()
const storeTable = useOperationsTableStore()

watch(
  () => storeDialog.show,
  (newValue) => {
    if (newValue) {
      store.$reset()
    }
  },
)

const add = async () => {
  const result = await store.addOperation()

  if (result?.err) return onError()

  onSuccess()
}

const onSuccess = async () => {
  storeDialog.close()
  await storeTable.getOperations()
}

const onError = () => {
  $snackbar({
    type: 'error',
    title: 'Attenzione!',
    content:
      "Si è verificato un errore durante il salvataggio dell'operazione.",
  })
}
</script>
