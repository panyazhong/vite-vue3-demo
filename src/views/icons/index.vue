<template>
  <div class="">{{ names }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// const names = require.context('../../icons/svg', false, /\.svg$/);
export default defineComponent({
  setup() {
    const names = ref(1);
    return {
      names,
    };
  },
});
</script>

<style scoped lang="scss"></style>
