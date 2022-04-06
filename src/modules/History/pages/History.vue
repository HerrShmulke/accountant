<template>
  <Teleport to="#title">
    <div class="d-flex justify-between">
      <div>История за {{ periodText }}</div>

      <HistoryFilter v-model="filter" />
    </div>
  </Teleport>

  <VCardList>
    <HistoryItem
      v-for="item in historyItems"
      :key="item.id"
      :name="item.name"
      :price="item.amount"
      :image="item.image"
      @remove="removeItem(item.id)"
    />
  </VCardList>
</template>

<script setup>
import { computed, watch, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

// Services
import { getAllExpenses } from '@/services/balance';

// Components
import HistoryFilter from '../components/HistoryFilter.vue';
import HistoryItem from '../components/HistoryItem.vue';

const $router = useRouter();
const $route = useRoute();

const filter = ref($route.query.filter || 'month');

watch(
  () => filter.value,
  (value) => {
    const query = $route.query;

    $router.replace({ query: { ...query, filter: value } });
  }
);

const filterText = {
  month: 'месяц',
  day: 'день',
  all: 'все время',
};

const periodText = computed(() => {
  return filterText[filter.value];
});

let historyItems = ref([]);

getAllExpenses({ limit: 12, offset: 0 }).then((expenses) => {
  historyItems.value = expenses.map((expense) => ({
    ...expense,
    amount: expense.amount.toLocaleString('ru'),
  }));
});

function removeItem(itemId) {
  historyItems.value = historyItems.value.filter((historyItem) => historyItem.id !== itemId);
}
</script>
