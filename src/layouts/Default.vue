<template>
  <div class="default-layout">
    <TheBackground />
    <div class="default-layout__container">
      <h1 class="default-layout__title mb-8">{{ currentTitle }}</h1>
      <RouterView />
    </div>

    <TheNavigation />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// Components
import TheBackground from '@/components/TheBackground.vue';
import TheNavigation from '@/components/TheNavigation.vue';

const route = useRoute();
const currentTitle = computed(() => {
  return route.params.title || '';
});
</script>

<style lang="scss">
.default-layout {
  &__container {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 120px;
  }

  &__title {
    color: map-get($--theme, 'grey', '50');
    letter-spacing: 0.06em;
  }
}
</style>
