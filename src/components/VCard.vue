<template>
  <div class="v-card">
    <slot />
  </div>
</template>

<style lang="scss">
.v-card {
  background-color: map-get($--theme, 'white');
  border-radius: 19px;
  padding: map-get($--spacers, 4);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
}
</style>
