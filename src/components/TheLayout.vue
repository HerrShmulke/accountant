<template>
  <component :is="currentLayout">
    <slot />
  </component>
</template>

<script setup>
import { defineProps, computed } from 'vue';

// Components
import DefaultLayout from '@/layouts/Default.vue';

const props = defineProps({
  name: { type: String, required: true },
});

const LAYOUT_MAP = {
  default: DefaultLayout,
};

const currentLayout = computed(() => {
  return LAYOUT_MAP[props.name];
});
</script>
