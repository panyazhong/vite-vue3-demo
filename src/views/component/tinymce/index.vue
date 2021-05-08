<template>
  <div>
    <tinymce-self></tinymce-self>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import tinymceSelf from '@/components/Tinymce/index.vue';

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    tinymceSelf,
  },
});
</script>

<style></style>
