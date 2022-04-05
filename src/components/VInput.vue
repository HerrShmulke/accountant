<template>
  <input
    v-model="model"
    class="v-input"
    v-bind="$attrs"
  >
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
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
.v-input {
  border: 1px solid map-get($--theme, 'grey', '100');
  background-color: map-get($--theme, 'white');
  color: inherit;
  padding: map-get($--spacers, 2) map-get($--spacers, 4);
  outline: none;
  border-radius: 8px;
  font-family: inherit;
  width: 100%;

  &::placeholder {
    color: map-get($--theme, 'grey', '300');
  }
}
</style>
