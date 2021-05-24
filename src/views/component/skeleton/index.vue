<template>
  <div class="skeleton">
    <a-skeleton avatar active :paragraph="{ rows: 4 }" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
.skeleton {
  background: #fff;
  padding: 20px;
}
</style>
