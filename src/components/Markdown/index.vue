<template>
  <div>
    <v-md-editor v-model="text" height="400px"></v-md-editor>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const text = ref(
      '## markdown \n[v-md-markdown](https://ckang1229.gitee.io/vue-markdown-editor/zh/#%E4%BB%8B%E7%BB%8D)'
    );

    return {
      text,
    };
  },
});
</script>

<style></style>
