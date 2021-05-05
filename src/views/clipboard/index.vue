<template>
  <div>
    <panel-title></panel-title>

    <clip-board></clip-board>

    <!-- <a-time-picker /> -->
  </div>
</template>

<script>
import panelTitle from '@/components/panelTitle/index.vue';
import clipBoard from './components/clipBoard.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    panelTitle,
    clipBoard,
  },
});
</script>

<style></style>
