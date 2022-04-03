<template>
  <Teleport to="#title">Добавить</Teleport>

  <VCard>
    <VAutocomplete placeholder="Назначение траты" :options="['foo', 'bar', 'baz']" />
    <VInput placeholder="Сумма" class="mt-2" />
    <FileInput class="mt-4" />
    <VButton class="mt-4">Добавить</VButton>
  </VCard>
</template>

<script setup>
import VAutocomplete from '@/components/VAutocomplete.vue';
import VInput from '@/components/VInput.vue';
import FileInput from '@/components/FileInput.vue';
import VButton from '@/components/VButton.vue';
</script>
