<template>
  <div class="">
    <panel-title title="Line-charts"></panel-title>

    <line-charts></line-charts>
  </div>
</template>

<script lang="ts">
import panelTitle from '@/components/panelTitle/index.vue';
import LineCharts from './components/line_charts.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {},
  components: {
    LineCharts,
    panelTitle,
  },
});
</script>

<style scoped lang="scss"></style>
