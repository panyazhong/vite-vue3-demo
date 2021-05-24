<template>
  <div>
    <panel-title></panel-title>

    <base-info></base-info>

    <div class="chart">
      <line-charts></line-charts>
    </div>

    <div class="chart">
      <mix-charts></mix-charts>
    </div>

    <a-row :gutter="20" class="aRow">
      <a-col :span="10">col-10</a-col>
      <a-col :span="10">col-10</a-col>
      <a-col :span="4">
        <project-info></project-info>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import panelTitle from '@/components/panelTitle/index.vue';
import LineCharts from '@/components/Echarts/LineCharts.vue';
import mixCharts from '@/components/Echarts/MixCharts.vue';

import baseInfo from './components/baseInfo.vue';
import projectInfo from './components/projectInfo.vue';
export default defineComponent({
  setup() {},
  components: {
    panelTitle,
    baseInfo,
    LineCharts,
    mixCharts,
    projectInfo,
  },
});
</script>

<style lang="scss" scoped>
.chart {
  padding: 10px;
  background-color: #fff;
  margin-top: 20px;
}
.aRow {
  margin-top: 20px;
}
</style>
