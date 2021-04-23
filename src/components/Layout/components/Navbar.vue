<template>
  <div>
    <a-menu v-model="current" mode="horizontal" theme="dark">
      <div v-for="route in routes" :key="route.name">
        <a-menu-item v-if="!route.children.length" :key="route.name">
          {{ route.name }}
        </a-menu-item>
        <a-sub-menu v-else>
          <template #title>
            <span class="submenu-title-wrapper">
              <setting-outlined />
              {{ route.name }}
            </span>
          </template>
          <a-menu-item v-for="child in route.children" :key="child.name">
            {{ child.name }}
          </a-menu-item>
        </a-sub-menu>
      </div>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed, toRefs, reactive } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup: () => {
    const current = ref(['mail']);

    const store = useStore();

    const routes = computed(() => store.getters.routes);

    return { current, routes };
  },
});
</script>

<style></style>
