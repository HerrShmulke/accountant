<template>
  <div class="v-autocomplete">
    <VInput v-model="search" v-bind="$attrs" @focus="onFocus" @blur="onBlur" />

    <FadeTransition>
      <ul v-if="dropDownIsOpen" class="v-autocomplete__menu" role="listbox" tabindex="-1">
        <template v-if="hasOptions">
          <li
            v-for="(option, index) in filteredOptions"
            :key="index"
            role="option"
            tabindex="-1"
            class="v-autocomplete__option"
            @click="select(option)"
          >
            {{ getOptionText(option) }}
          </li>
        </template>
        <li v-else class="v-autocomplete__no-option">
          {{ noOptionText }}
        </li>
      </ul>
    </FadeTransition>
  </div>
</template>

<script setup>
import { defineProps, watch, defineEmits, computed, ref } from 'vue';
import VInput from '@/components/VInput.vue';
import FadeTransition from '@/components/transitions/Fade.vue';

const props = defineProps({
  options: { type: Array, required: true },
  getOptionText: { type: Function, default: (option) => option },
  disableFilter: { type: Boolean, default: false },
  noOptionText: { type: String, default: 'Совпадений не найдено' },
  modelValue: { type: [String, Number, Object], default: '' },
});

const emit = defineEmits(['update:modelValue']);

let search = ref(props.modelValue || '');

watch(
  () => search.value,
  (value) => {
    emit('update:modelValue', value);
  }
);

watch(
  () => props.modelValue,
  (value) => {
    search.value = value;
  }
);

function filterBy(label, search) {
  return (label || '').toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1;
}

function filter(options, search) {
  return options.filter((option) => {
    let label = props.getOptionText(option);

    if (typeof label === 'number') {
      label = label.toString();
    }

    return filterBy(label, search);
  });
}

const filteredOptions = computed(() => {
  return search.value && !props.disableFilter ? filter(props.options, search.value) : props.options;
});

const hasOptions = computed(() => {
  return filteredOptions.value.length > 0;
});

let dropDownIsOpen = ref(false);

function onFocus() {
  dropDownIsOpen.value = true;
}

function onBlur() {
  dropDownIsOpen.value = false;
}

function select(option) {
  search.value = option;
}
</script>

<style lang="scss">
.v-autocomplete {
  position: relative;

  &__menu {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: map-get($--spacers, 2);
    position: absolute;
    top: calc(100% + map-get($--spacers, 1));
    width: 100%;
    padding: map-get($--spacers, 2) map-get($--spacers, 3);
    background-color: map-get($--theme, 'white');
    list-style: none;
    margin: 0;
    border-radius: 8px;
    border: 1px solid map-get($--theme, 'grey', '100');
    max-height: 90px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
  }

  &__no-option {
    text-align: center;
  }
}
</style>
