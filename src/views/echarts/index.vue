<template>
  <div class="">
    <panel-title></panel-title>

    <div class="chart-box">
      <line-charts></line-charts>
    </div>
  </div>
</template>

<script lang="ts">
import panelTitle from '@/components/panelTitle/index.vue';
import LineCharts from '@/components/Echarts/LineCharts.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {},
  components: {
    LineCharts,
    panelTitle,
  },
});
</script>

<style scoped lang="scss">
.chart-box {
}
</style>
