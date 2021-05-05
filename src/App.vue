<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from '@/components/Layout/index.vue';

export default defineComponent({
  name: 'App',
  components: {
    Layout,
  },
});
</script>

<style lang="scss">
#app {
  background: #f0f2f5;
  min-height: calc(100vh);
  padding-top: 60px;
}
.is-locale-active {
  background-color: #1890ff;
  span {
    color: #fff;
  }
}
</style>
