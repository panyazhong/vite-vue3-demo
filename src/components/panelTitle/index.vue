<template>
  <div class="panel-title">
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  setup() {
    const route = useRoute();

    return {
      title: computed(() => route.meta.title),
    };
  },
  props: {
    title: {
      default: 'Title',
    },
  },
});
</script>

<style scoped lang="scss">
.panel-title {
  padding: 3px 10px;
  font-size: 16px;
  font-weight: 550;
  margin-bottom: 20px;
  border-left: 4px solid #1890ff;
  color: rgb(70, 70, 70);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
</style>
