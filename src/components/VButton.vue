<template>
  <button class="v-button" type="button" v-bind="$attrs">
    <div class="v-button__content">
      <slot />
    </div>
  </button>
</template>

<style lang="scss">
.v-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: map-get($--spacers, 3) map-get($--spacers, 4);
  background-color: map-get($--theme, 'primary', '600');
  width: 100%;
  color: map-get($--theme, 'grey', '50');
  border: none;
  border-radius: 8px;
}
</style>
