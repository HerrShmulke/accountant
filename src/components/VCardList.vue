<template>
  <div class="v-card-list">
    <slot />
  </div>
</template>

<style lang="scss">
.v-card-list {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: map-get($--spacers, 5);
}
</style>
