<template>
  <div>
    <panel-title></panel-title>

    <tab-com></tab-com>
  </div>
</template>

<script>
import panelTitle from '@/components/panelTitle/index.vue';
import tabCom from './components/tab.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {},
  components: {
    panelTitle,
    tabCom,
  },
});
</script>

<style></style>
