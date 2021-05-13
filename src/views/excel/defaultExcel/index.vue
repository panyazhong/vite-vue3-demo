<template>
  <div class="">
    <div class="filter">
      <span>Filename:</span>
      <a-input v-model:value="filename" placeholder="Basic usage" />
      <a-button @click="exportExcel" type="primary">导出</a-button>
    </div>
  </div>
</template>

<script type="ts">
import {defineComponent, ref} from 'vue'
import XLSX from 'xlsx'
export default defineComponent({
  setup() {
    const data = ref([
      {
        name: 'dapan',
        age: 20
      }, {
        name: 'zhuzhu',
        age: 18
      }
    ])

    let filename = ref('')

    const source = {
      name: '姓名',
      age: '年龄'
    }

    const exportExcel = () => {
      let wb = XLSX.utils.book_new()
      let ws = XLSX.utils.json_to_sheet(data.value,  {header: ["name", "age"]})

      let headers = Object.keys(ws).filter(item => item != '!ref' && item.split('')[1] == 1)

      headers.forEach(header => {
        ws[header].v = source[ws[header].v]
      })

      XLSX.utils.book_append_sheet(wb, ws, 'file')

      XLSX.writeFile(wb, `${filename.value ? filename.value : 'demo'}.xlsx`);
    }
    return {
      data,
      filename,
      exportExcel
    }
  }
})
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
    margin-right: 20px;
  }
  .ant-input {
    width: 220px;
  }
}
</style>
