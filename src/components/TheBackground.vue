<template>
  <svg class="the-background" width="100%" height="200" viewBox="0 0 320 200" preserveAspectRatio="none">
    <path d="M0,0 L320,0 320,120Q160,200 0,120" :fill="color" />
  </svg>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  color: { type: String, default: '#4F6EA9' },
});
</script>

<style lang="scss">
.the-background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
