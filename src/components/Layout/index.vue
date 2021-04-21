<template>
  <div>
    <sys-header></sys-header>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import SysHeader from './components/SysHeader.vue';
export default {
  components: {
    SysHeader,
  },
  setup() {},
};
</script>

<style scoped>
.content-container {
  margin-top: 60px;
}
</style>
