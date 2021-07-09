<template>
  <div>
    <a-upload-dragger
      v-model:fileList="fileList"
      name="file"
      :multiple="false"
      :before-upload="beforeUpload"
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
    <a-table :dataSource="tableData" :columns="columns"></a-table>
  </div>
</template>
<script lang="ts">
import { InboxOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';

import XLSX from 'xlsx';

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

interface Json {
  [propName: string]: any;
}

export default defineComponent({
  components: {
    InboxOutlined,
  },
  setup() {
    const fileList = ref([]);
    let tableData = ref(<any>[]);
    let columns = ref(<any>[]);
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

    const beforeUpload = (info: any): boolean => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target?.result,
          wb = XLSX.read(data, {
            type: 'binary',
          });

        const json: Json[] = XLSX.utils.sheet_to_json(wb.Sheets['Sheet1']);

        tableData.value = json;
        tableData.value.forEach((item: Json, index: number) => {
          item.key = index;
        });
        columns.value = Object.keys(json[0]).map((item) => {
          return {
            title: item,
            dataIndex: item,
          };
        });
      };

      reader.readAsBinaryString(info);
      return false;
    };
    return {
      handleChange,
      beforeUpload,
      tableData,
      fileList,
      columns,
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
