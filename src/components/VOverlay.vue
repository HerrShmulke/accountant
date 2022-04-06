<template>
  <Teleport to="body">
    <FocusTrap :active="modelValue" :initial-focus="() => $refs.overlay.focus()">
      <div>
        <div
          v-if="modelValue"
          ref="overlay"
          class="v-overlay"
          role="button"
          tabindex="0"
          aria-label="Закрыть модальное окно"
          v-bind="$attrs"
          @click="close"
        >
          <div :class="contentClasses" @click.stop="">
            <slot />
          </div>
        </div>
      </div>
    </FocusTrap>
  </Teleport>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { defineProps, defineEmits, watch } from 'vue';
import { hideScroll, showScroll } from '@/utils/scroll';
import { FocusTrap } from 'focus-trap-vue';

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  contentClasses: { type: [String, Object, Array], default: '' },
});

const emit = defineEmits(['update:modelValue']);

watch(
  () => props.modelValue,
  (value) => {
    if (value) {
      hideScroll();
      return;
    }

    showScroll();
  },
  {
    immediate: true,
  }
);

function close() {
  emit('update:modelValue', false);
}
</script>

<style lang="scss">
.v-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(map-get($--theme, 'grey', '900'), 0.5);
}
</style>
