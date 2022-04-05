<template>
  <button
    class="history-filter font-weight-medium"
    @click="onClick"
  >
    {{ nextFilter }}
  </button>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const filters = [
  { text: 'м', value: 'month' },
  { text: 'д', value: 'day' },
  { text: 'в', value: 'all' },
];

const props = defineProps({
  modelValue: { type: String, default: 'month' },
});

const emit = defineEmits(['update:modelValue']);

function getNextFilter() {
  const currentIndex = filters.findIndex((filter) => filter.value === props.modelValue);

  return filters[(currentIndex + 1) % filters.length];
}

const nextFilter = computed(() => {
  return getNextFilter().text;
});

function onClick() {
  emit('update:modelValue', getNextFilter().value);
}
</script>

<style lang="scss">
.history-filter {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  min-width: 26px;
  background-color: map-get($--theme, 'white');
  border-radius: 50%;
  color: map-get($--theme, 'primary', '600');
  font-size: 16px;
  line-height: 100%;
  padding: 0;
  margin: 0;
  border: none;
}
</style>
