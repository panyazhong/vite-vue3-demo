<template>
  <div>
    <a-breadcrumb separator=">">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item v-for="route in routes" :key="route.path">
        <a>{{ route.meta.title }}</a>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();

    const routes = computed(() => route.matched);
    return {
      routes,
    };
  },
});
</script>

<style></style>
