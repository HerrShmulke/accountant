<template>
  <label class="file-input" tabindex="0" @keyup.space="openFileInput">
    <input ref="input" class="file-input__field" type="file" accept="image/*" capture @change="onChange" />
    <img v-if="currentFileUrl" class="file-input__image" :src="currentFileUrl" alt="" />
    <span v-else>Добавить фото</span>
  </label>
</template>

<script setup>
import { ref, defineEmits, watch } from 'vue';
const reader = new FileReader();

let currentFileUrl = ref('');

const emit = defineEmits(['change']);
/** @type {import('vue').Ref<HTMLInputElement>} */
const input = ref(null);

watch(
  () => currentFileUrl.value,
  (value) => {
    emit('change', value);
  }
);

reader.addEventListener('loadend', () => {
  currentFileUrl.value = reader.result;
});

function onChange(event) {
  reader.readAsDataURL(event.target.files[0]);
  event.target.value = '';
}

function openFileInput() {
  input.value.click();
}
</script>

<style lang="scss">
.file-input {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px dashed map-get($--theme, 'grey', '300');
  border-radius: 8px;
  width: 100%;
  height: 100px;
  color: map-get($--theme, 'grey', '500');
  overflow: hidden;
  padding: map-get($--spacers, 1);

  &__field {
    display: none;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
}
</style>
