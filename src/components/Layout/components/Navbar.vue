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
        <a-menu-item v-if="route.meta.click" :key="route.name">
          <span>{{ route.children[0].meta.title }}</span>
        </a-menu-item>
        <a-menu-item
          v-else-if="!route.children && !route.meta.hidden"
          :key="route.name"
        >
          {{ route.meta.title }}
          <span>{{ route.meta.title }}</span>
        </a-menu-item>
        <a-sub-menu v-else-if="route.children">
          <template #title>
            <span class="submenu-title-wrapper">
              <setting-outlined />
              {{ route.meta.title }}
            </span>
          </template>
          <a-menu-item v-for="child in route.children" :key="child.name">
            <span v-if="!child.meta.hidden">{{ child.meta.title }}</span>
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

<style scoped lang="scss">
.ant-menu-horizontal {
  line-height: 57px;
  .ant-menu-submenu-selected {
    border-bottom: 3px solid #1890ff;
    color: #1890ff;
  }
}
</style>
