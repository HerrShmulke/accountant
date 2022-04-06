<template>
  <Transition name="fade">
    <slot />
  </Transition>
</template>

<script>
export default {
  name: 'FadeTransition',
};
</script>

<style lang="scss">
.fade {
  &-enter-active,
  &-leave-active {
    transition: all 0.15s linear;
  }

  &-leave-to,
  &-enter-from {
    opacity: 0;
  }
}
</style>
