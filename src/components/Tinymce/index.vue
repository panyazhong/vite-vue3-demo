<template>
  <div>
    <editor
      api-key="no-api-key"
      v-model="content"
      :init="{
        language: 'zh_CN',
        height: 500,
        menubar: true,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor code',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar1:
          'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help image',
        font_formats:
          '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif',
      }"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Editor from '@tinymce/tinymce-vue';

export default defineComponent({
  setup() {
    const content = ref(
      '<p>使用tinymce-vue</p><strong>npm install --save "@tinymce/tinymce-vue@^4"</strong>'
    );
    const setting = ref({
      height: 500,
    });

    const set = () => {
      console.log('set');
    };
    return {
      content,
      setting,
      set,
    };
  },
  components: {
    Editor,
  },
});
</script>

<style></style>
