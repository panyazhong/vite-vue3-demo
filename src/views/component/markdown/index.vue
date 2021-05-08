<template>
  <div>
    <markdown-self></markdown-self>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import markdownSelf from '@/components/Markdown/index.vue';

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    markdownSelf,
  },
});
</script>

<style></style>
