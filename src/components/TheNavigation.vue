<template>
  <nav class="the-navigation">
    <RouterLink
      v-for="route in navigationRoutes"
      :key="route.name"
      class="the-navigation__link"
      active-class="the-navigation__link--active"
      :to="route.to"
    >
      <VIcon
        :name="route.iconName"
        class="mb-1"
      />
      <div>{{ route.text }}</div>
    </RouterLink>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import VIcon from '@/components/VIcon.vue';

const router = useRouter();

const navigationRoutes = computed(() => {
  const routes = router.getRoutes();

  return routes
    .filter((route) => {
      if (route.meta.navigation) {
        return true;
      }

      return false;
    })
    .map((route) => ({
      to: { name: route.name, params: route.meta.navigation.params },
      iconName: route.meta.navigation.iconName,
      text: route.meta.navigation.text,
    }));
});
</script>

<style lang="scss">
.the-navigation {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding-top: map-get($--spacers, 3);
  padding-bottom: map-get($--spacers, 3);
  padding-left: map-get($--spacers, 5);
  padding-right: map-get($--spacers, 5);
  background-color: map-get($--theme, 'white');
  border-top: 1px solid map-get($--theme, 'grey', '100');
  justify-content: space-around;

  &__link {
    color: map-get($--theme, 'grey', '400');
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    &--active {
      color: map-get($--theme, 'grey', '700');
    }
  }
}
</style>
