<template>
  <TheLayout :name="layoutName">
    <RouterView />
  </TheLayout>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import TheLayout from './components/TheLayout.vue';

const route = useRoute();

const layoutName = computed(() => {
  return route.meta.layout || 'default';
});
</script>
