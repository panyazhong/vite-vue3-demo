<template>
  <div>
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

<style></style>
