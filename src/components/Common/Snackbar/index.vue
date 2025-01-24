<template>
  <v-snackbar
    v-model="store.enabled"
    v-bind="$attrs"
    :color="store.backgroundColor"
  >
    <div
      :style="`color: ${store.textColor}}`"
      class="common-snackbar__container"
    >
      <div class="common-snackbar__header">
        <v-icon :color="store.textColor" class="mr-2">{{ store.icon }}</v-icon>
        {{ store.title }}
      </div>
      <div v-show="store.content" class="pl-8" v-html="store.content" />
    </div>
    <template #actions>
      <v-btn variant="plain" @click="store.disable">
        <v-icon size="large" :color="store.textColor" class="mb-5"
          >mdi-close</v-icon
        >
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
const store = useMiscSnackbarStore()

watch(
  () => store.enabled,
  (newValue) => {
    if (!newValue) {
      store.$reset()
    }
  },
)
</script>

<style lang="scss" scoped>
:deep(.v-snackbar__wrapper) {
  border-radius: 8px;

  .v-snackbar__content {
    padding: 24px 0 24px 24px;

    .common-snackbar__container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 16px;
      line-height: 24px;

      .common-snackbar__header {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        font-weight: 700;
      }
    }
  }

  .v-snackbar__actions {
    align-self: flex-start;
    padding-top: 8px;
    margin-right: 0;
  }
}
</style>
