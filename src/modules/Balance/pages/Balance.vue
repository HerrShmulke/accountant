<template>
  <Teleport to="#title">Баланс</Teleport>

  <VCardList>
    <VCard>
      <h2 class="text-body-1 mb-1">Потрачено</h2>
      <div class="text-h2 font-weight-medium" :style="{ color: spentColor }">{{ spent }}₽</div>
    </VCard>

    <VCard>
      <h2 class="text-body-1 mb-1">Рекомендуемая трата в день</h2>
      <div class="text-h2 text-color-primary-600 font-weight-medium">{{ recommendedSpending }}₽</div>
    </VCard>

    <VCard>
      <h2 class="text-body-1 mb-1">Сумма</h2>
      <div class="text-h2 text-color-primary-600 font-weight-medium">{{ amount }}₽</div>
    </VCard>

    <VCard>
      <h2 class="text-body-1 mb-1">В копилке</h2>
      <div class="text-h2 text-color-primary-600 font-weight-medium">{{ moneybox }}₽</div>
    </VCard>

    <VCard>
      <h2 class="text-body-1 mb-1">Всего потрачено за половину</h2>
      <div class="text-h2 text-color-primary-600 font-weight-medium">{{ spentInHalf }}₽</div>
    </VCard>

    <VCard>
      <h2 class="text-body-1 mb-1">Сумма на половину месяца</h2>
      <div class="text-h2 text-color-primary-600 font-weight-medium">{{ amountForHalfMonth }}₽</div>
    </VCard>

    <VCard>
      <h2 class="text-body-1 mb-1">Сумма запланированных трат</h2>
      <div class="text-h2 text-color-primary-600 font-weight-medium">{{ plannedExpenditures }}₽</div>
    </VCard>
  </VCardList>
</template>

<script setup>
import { computed, ref } from 'vue';

// Services
import { getBalance } from '@/services/balance';

getBalance().then((balance) => {
  amount.value = balance;
});

const spent = ref(0);
const recommendedSpending = ref(1120);
const amount = ref(0);
const moneybox = ref(0);
const spentInHalf = ref(0);
const amountForHalfMonth = ref(0);
const plannedExpenditures = ref(0);

const spentColor = computed(() => {
  const x = (spent.value * 100) / recommendedSpending.value;
  const step = 1.46;

  const value = x * step + 214;

  return `hsl(${value}, 53%, 59%, 1)`;
});
</script>
