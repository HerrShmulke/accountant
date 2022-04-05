<template>
  <!-- eslint-disable vue/no-v-html -->
  <svg
    class="v-icon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    v-html="icon"
  />
</template>

<script setup>
import { computed, defineProps } from 'vue';
import icons from '@/constants/icons';

const props = defineProps({
  name: { type: String, required: true },
});

const icon = computed(() => {
  return icons[props.name];
});
</script>
