<template>
  <div class="">
    excel

    <a-button @click="exportExcel">导出</a-button>
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

    const exportExcel = () => {
      var excel = XLSX.utils.json_to_sheet(data.value,  {header: ["name", "age"], skipHeader: true})

      let workbook = {
        SheetNames: ['demo'],
        Sheets: {
          'demo.xlsx': excel
        }
      }

      let wopts = {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary'
      };

      console.log(workbook)

      XLSX.writeFile(workbook, wopts)
    }
    return {
      data,
      exportExcel
    }
  }
})
</script>

<style scoped lang="scss"></style>
