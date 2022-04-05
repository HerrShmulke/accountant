<template>
  <VOverlay
    v-model="model"
    class="d-flex align-center justify-center image-viewer"
    content-classes="d-flex align-center flex-column"
  >
    <div class="mb-4 font-weight-medium text-h4 text-color-white">
      {{ name }}
    </div>
    <img class="image-viewer__image" :src="src" alt="" />
  </VOverlay>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
import VOverlay from '@/components/VOverlay.vue';

const props = defineProps({
  src: { type: String, required: true },
  name: { type: String, required: true },
  modelValue: { type: Boolean, default: false },
});

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit('update:modelValue', value);
  },
});
</script>

<style lang="scss">
.image-viewer {
  &__image {
    width: calc(100% - map-get($--spacers, 8));
    border-radius: 20px;
    object-fit: cover;
  }
}
</style>
