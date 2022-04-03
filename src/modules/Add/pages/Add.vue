<template>
  <VCard>
    <VAutocomplete placeholder="Назначение траты" :options="['foo', 'bar', 'baz']" />
    <VInput placeholder="Сумма" class="mt-2" />
    <FileInput class="mt-4" />
    <VButton class="mt-4">Добавить</VButton>
  </VCard>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import VAutocomplete from '@/components/VAutocomplete.vue';
import VInput from '@/components/VInput.vue';
import FileInput from '@/components/FileInput.vue';
import VButton from '@/components/VButton.vue';
import { TITLE } from '../constants/common';

const router = useRouter();
const route = useRoute();

if (!route.params.title) {
  router.replace({ params: { title: TITLE } });
}
</script>
