<template>
  <div>
    <panel-title></panel-title>

    <base-info></base-info>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import panelTitle from '@/components/panelTitle/index.vue';
import baseInfo from './components/baseInfo.vue';
export default defineComponent({
  setup() {},
  components: {
    panelTitle,
    baseInfo,
  },
});
</script>

<style></style>
