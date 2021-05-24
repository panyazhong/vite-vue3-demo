<template>
  <div>
    <panel-title></panel-title>

    <mix-charts class="mix-charts"></mix-charts>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import panelTitle from '@/components/panelTitle/index.vue';
import mixCharts from '@/components/Echarts/MixCharts.vue';

export default defineComponent({
  setup() {},
  components: {
    panelTitle,
    mixCharts,
  },
});
</script>

<style scoped lang="scss">
.mix-charts {
}
</style>
