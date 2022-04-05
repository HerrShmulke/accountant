<template>
  <div class="default-layout">
    <TheBackground />
    <div class="default-layout__container">
      <h1
        id="title"
        class="default-layout__title mb-8 text-h4"
      />
      <RouterView />
    </div>

    <TheNavigation />
  </div>
</template>

<script setup>
// Components
import TheBackground from '@/components/TheBackground.vue';
import TheNavigation from '@/components/TheNavigation.vue';
</script>

<style lang="scss">
.default-layout {
  &__container {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 120px;
    min-height: 100vh;
  }

  &__title {
    color: map-get($--theme, 'grey', '50');
    letter-spacing: 0.06em;
  }
}
</style>
