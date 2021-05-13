<template>
  <div>
    <div class="filter">
      <span>Filename:</span>
      <a-input v-model:value="filename" placeholder="Basic usage" />
      <a-button @click="exportTable2Excel" type="primary">导出</a-button>
    </div>
    <a-table
      :columns="columns"
      :data-source="data"
      @change="onChange"
      :row-selection="rowSelection"
      id="tableExcel"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, unref, computed } from 'vue';
import { ColumnProps } from 'ant-design-vue/es/table/interface';

import XLSX from 'xlsx';

type Key = ColumnProps['key'];

type TableDataType = {
  key: Key;
  name: string;
  age: number;
  address: string;
};

type PaginationType = {
  current: number;
  pageSize: number;
};

type FilterType = {
  name: string;
  address: string;
};

type ColumnType = {
  title: string;
  dataIndex: string;
  filters?: {
    text: string;
    value: string;
    children?: {
      text: string;
      value: string;
    }[];
  }[];
  onFilter?: (value: string, record: TableDataType) => boolean;
  sorter?: (a: TableDataType, b: TableDataType) => number;
  sortDirections?: string[];
  defaultSortOrder?: string;
  filterMultiple?: string[] | boolean;
};

const columns: ColumnType[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value: string, record: TableDataType) =>
      record.name.indexOf(value) === 0,
    sorter: (a: TableDataType, b: TableDataType) =>
      a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a: TableDataType, b: TableDataType) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value: string, record: TableDataType) =>
      record.address.indexOf(value) === 0,
    sorter: (a: TableDataType, b: TableDataType) =>
      a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
];

const data: TableDataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];
export default defineComponent({
  setup() {
    const selectedRowKeys = ref<Key[]>([]);
    const selectedRows = ref<any[]>([]);
    const filename = ref('');

    const onChange = (
      pagination: PaginationType,
      filters: FilterType[],
      sorter: ColumnType
    ) => {
      console.log('params', pagination, filters, sorter);
    };

    const onSelectChange = (changableRowKeys: Key[]) => {
      selectedRowKeys.value = changableRowKeys;
      selectedRows.value = data.filter((item): boolean =>
        selectedRowKeys.value.includes(item['key'])
      );
    };

    const rowSelection = computed(() => {
      return {
        selectedRowKeys: unref(selectedRowKeys),
        onChange: onSelectChange,
        hideDefaultSelections: true,
        selections: [
          {
            key: 'all-data',
            text: 'Select All Data',
            onSelect: () => {
              selectedRowKeys.value = data.map((item) => item.key);
              selectedRows.value = data.filter((item): boolean =>
                selectedRowKeys.value.includes(item['key'])
              );
            },
          },
          {
            key: 'odd',
            text: 'Select Odd Row',
            onSelect: (changableRowKeys: Key[]) => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (index % 2 !== 0) {
                  return false;
                }
                return true;
              });
              selectedRowKeys.value = newSelectedRowKeys;
              selectedRows.value = data.filter((item): boolean =>
                selectedRowKeys.value.includes(item['key'])
              );
            },
          },
          {
            key: 'even',
            text: 'Select Even Row',
            onSelect: (changableRowKeys: Key[]) => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (index % 2 !== 0) {
                  return true;
                }
                return false;
              });
              selectedRowKeys.value = newSelectedRowKeys;
              selectedRows.value = data.filter((item): boolean =>
                selectedRowKeys.value.includes(item['key'])
              );
            },
          },
        ],
      };
    });

    const exportTable2Excel = () => {
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(selectedRows.value);

      XLSX.utils.book_append_sheet(wb, ws);

      XLSX.writeFile(wb, `${filename.value ? filename.value : 'demo'}.xlsx`);
    };

    return {
      data,
      rowSelection,
      selectedRows,
      selectedRowKeys,
      filename,
      columns,
      onChange,
      exportTable2Excel,
    };
  },
});
</script>
<style scoped lang="scss">
.filter {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  span {
    font-weight: bold;
    margin-right: 20px;
  }
  .ant-input {
    width: 220px;
  }
}
</style>
