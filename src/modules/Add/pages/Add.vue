<template>
  <Teleport to="#title">Добавить</Teleport>

  <VCard>
    <VAutocomplete v-model="name" placeholder="Назначение траты" :options="expenses" />

    <VInput v-model="amount" placeholder="Сумма" class="mt-2" />

    <FileInput class="mt-4" @change="onChangeFile" />

    <VButton class="mt-4" @click="add">Добавить</VButton>
  </VCard>
</template>

<script setup>
import { ref } from 'vue';

// Hooks
import { addExpenseHook } from '../hooks';

// Services
import { addExpense, getAllNamesExpenses } from '@/services/balance';

// Components
import VAutocomplete from '@/components/VAutocomplete.vue';
import VInput from '@/components/VInput.vue';
import FileInput from '@/components/FileInput.vue';
import VButton from '@/components/VButton.vue';

const name = ref('');
const amount = ref('');
const image = ref('');
const expenses = ref([]);

getAllNamesExpenses().then((expensesResponse) => {
  expenses.value = Array.from(expensesResponse);
});

function onChangeFile(file) {
  image.value = file;
}

function add() {
  addExpense({
    amount: Number(amount.value),
    name: name.value,
    image: image.value,
  }).then(() => {
    addExpenseHook();
  });
}
</script>
