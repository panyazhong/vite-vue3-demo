<template>
  <div>
    <a-menu
      v-model:selectedKeys="current"
      mode="horizontal"
      theme="dark"
      @click="routeLink"
      style="display: flex"
    >
      <div v-for="route in routes" :key="route.name">
        <a-menu-item
          v-if="!route.children && !route.meta.hidden"
          :key="route.name"
        >
          <span>{{ route.name }}</span>
        </a-menu-item>
        <a-sub-menu v-if="route.children">
          <template #title>
            <span class="submenu-title-wrapper">
              <setting-outlined />
              {{ route.name }}
            </span>
          </template>
          <a-menu-item v-for="child in route.children" :key="child.name">
            <span v-if="!child.meta.hidden">{{ child.name }}</span>
          </a-menu-item>
        </a-sub-menu>
      </div>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed, toRefs, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  setup: () => {
    let current = ref(<any>[]);

    const store = useStore();

    const routes = computed(() => store.getters.routes);

    const route = useRoute(),
      router = useRouter(),
      { name } = route;

    current.value = [name];
    
    const routeLink = (val: any) => {
      const { key } = val;
      router.push({
        name: key,
      });
    };

    return { current, routes, routeLink };
  },
});
</script>

<style></style>
