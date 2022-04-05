<template>
  <ImageViewer
    v-if="image"
    v-model="viewerIsOpen"
    :src="image"
    :name="name"
  />

  <VCard
    class="history-item"
    v-bind="$attrs"
  >
    <div class="history-item__content">
      <h2 class="text-body-1 mb-1">
        {{ name }}
      </h2>
      <div class="text-h2 font-weight-medium text-color-primary-600">
        {{ price }}₽
      </div>
    </div>

    <div class="history-item__actions">
      <VButton
        v-if="image"
        icon
        aria-label="Открыть изображение"
        @click="openViewer"
      >
        <VIcon
          width="16"
          height="16"
          name="image"
        />
      </VButton>

      <VButton
        icon
        aria-label="Удалить"
        @click="remove"
      >
        <VIcon
          width="16"
          height="16"
          name="cross"
        />
      </VButton>
    </div>
  </VCard>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import VIcon from '@/components/VIcon.vue';
import VButton from '@/components/VButton.vue';
import ImageViewer from '@/components/ImageViewer.vue';

let viewerIsOpen = ref(false);

const props = defineProps({
  name: { type: String, required: true },
  price: { type: [String, Number], required: true },
  image: { type: String, default: null },
});

const emit = defineEmits(['remove']);

function openViewer() {
  viewerIsOpen.value = true;
}

function remove() {
  emit('remove');
}
</script>

<style lang="scss">
.history-item {
  display: flex;
  justify-content: space-between;

  &__actions {
    display: grid;
    justify-content: flex-end;
    flex-grow: 1;
    grid-template-columns: repeat(auto-fit, 26px);
    column-gap: 8px;
  }
}
</style>
