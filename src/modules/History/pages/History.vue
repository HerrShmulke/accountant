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
      :price="item.price"
      :image="item.image"
      @remove="removeItem(item.id)"
    />
  </VCardList>
</template>

<script setup>
import { computed, watch, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import HistoryFilter from '../components/HistoryFilter.vue';
import HistoryItem from '../components/HistoryItem.vue';

const $router = useRouter();
const $route = useRoute();

const filter = $ref($route.query.filter || 'month');

watch(
  () => filter,
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
  return filterText[filter];
});

let historyItems = ref([
  {
    id: 1,
    name: 'Конфеты',
    price: '200',
    image: 'https://blog.vverh.digital/wp-content/uploads/2020/07/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-1.png',
  },
  {
    id: 2,
    name: 'Конфеты 2',
    price: 300,
    image: 'https://blog.vverh.digital/wp-content/uploads/2020/07/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-1.png',
  },
  {
    id: 3,
    name: 'Конфеты 4',
    price: 600,
  },
]);

function removeItem(itemId) {
  historyItems.value = historyItems.value.filter((historyItem) => historyItem.id !== itemId);
}
</script>
