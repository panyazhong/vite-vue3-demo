<template>
  <div class="panel-title">
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {},
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
  font-weight: 500;
  border-left: 4px solid #1890ff;
}
</style>
