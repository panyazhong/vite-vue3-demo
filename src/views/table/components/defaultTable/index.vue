<template>
  <div>
    <panel-title></panel-title>

    <default-table></default-table>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import panelTitle from '@/components/panelTitle/index.vue';
import defaultTable from './table.vue';

export default defineComponent({
  setup() {},
  components: {
    panelTitle,
    defaultTable,
  },
});
</script>

<style></style>
