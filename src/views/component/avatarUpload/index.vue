<template>
  <div>
    <a-alert type="info">
      <template #description>
        <span>
          upload使用
          <a style="color: rgb(255, 143, 143)"> antd </a>
          的Upload组件，进行了简单的封装
        </span>
      </template>
    </a-alert>
    <a-upload
      v-model:file-list="fileList"
      name="avatar"
      list-type="picture-card"
      class="avatar-uploader"
      :show-upload-list="false"
      :before-upload="beforeUpload"
      @change="handleChange"
    >
      <a-avatar :src="imageUrl" v-if="imageUrl" :size="128"></a-avatar>
      <div v-else>
        <loading-outlined v-if="loading"></loading-outlined>
        <plus-outlined v-else></plus-outlined>
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
  </div>
</template>
<script lang="ts">
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';

import avatar from '@/assets/avatar.jpg';

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
  type?: string;
  size: number;
  originFileObj: any;
}

interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}

function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
}
export default defineComponent({
  components: {
    LoadingOutlined,
    PlusOutlined,
  },
  setup() {
    const fileList = ref([]);
    const loading = ref<boolean>(false);
    const imageUrl = ref<string>(avatar);

    const handleChange = (info: FileInfo) => {
      if (info.file.status === 'uploading') {
        loading.value = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (base64Url: string) => {
          imageUrl.value = base64Url;
          loading.value = false;
        });
      }
      if (info.file.status === 'error') {
        loading.value = false;
        message.error('upload error');
      }
    };

    const beforeUpload = (file: FileItem) => {
      const isJpgOrPng =
        file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    };

    return {
      fileList,
      loading,
      imageUrl,
      handleChange,
      beforeUpload,
      avatar,
    };
  },
});
</script>
<style scoped>
:deep() .avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-top: 20px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
.ant-avatar-image {
  transition: all 0.5s;
  transform-origin: right;
}
.ant-upload:hover .ant-avatar-image {
  transform: rotate(-90deg);
}
</style>
