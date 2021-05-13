<template>
  <div>
    <a-upload-dragger
      v-model:fileList="fileList"
      name="file"
      :multiple="false"
      :before-upload="() => false"
      @change="handleChange"
    >
      <p class="ant-upload-drag-icon">
        <inbox-outlined></inbox-outlined>
      </p>
      <p class="ant-upload-text">Click or drag file to this area to upload</p>
      <p class="ant-upload-hint">Support for a single or bulk upload</p>
      <p class="ant-upload-hint">Tips: only suppry xlsx</p>
    </a-upload-dragger>

    <a-divider dashed />
    <a-table></a-table>
  </div>
</template>
<script lang="ts">
import { InboxOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
}

interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}

export default defineComponent({
  components: {
    InboxOutlined,
  },
  setup() {
    const fileList = ref([]);
    const handleChange = (info: FileInfo) => {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    };
    return {
      handleChange,
      fileList,
    };
  },
});
</script>

<style lang="scss" scoped>
:deep() .ant-upload {
  width: 400px;
  margin: 0 auto;
}
</style>
