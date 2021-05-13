import { RouteRecordRaw } from 'vue-router';
import Layout from '@/components/Layout/index.vue';

const excelRoutes: Array<RouteRecordRaw> = [
  {
    path: '/excel',
    name: 'Excel',
    component: Layout,
    redirect: '/excel/export_excel',
    meta: {
      roles: ['admin', 'user'],
      title: 'Excel',
    },
    children: [
      {
        path: 'export_excel',
        name: 'ExportExcel',
        meta: {
          roles: ['admin', 'user'],
          title: '导出Excel',
        },
        component: () => import('@/views/excel/defaultExcel/index.vue'),
      },
      {
        path: 'export_table_excel',
        name: 'ExportTableExcel',
        meta: {
          roles: ['admin', 'user'],
          title: '导出表格Excel',
        },
        component: () => import('@/views/excel/tableExcel/index.vue'),
      },
      {
        path: 'export_selected_to_excel',
        name: 'ExportSelected2Excel',
        meta: {
          roles: ['admin', 'user'],
          title: '导出选中数据',
        },
        component: () => import('@/views/excel/selectedExcel/index.vue'),
      },
      {
        path: 'import_excel',
        name: 'ImportExcel',
        meta: {
          roles: ['admin', 'user'],
          title: '导入Excel',
        },
        component: () => import('@/views/excel/importExcel/index.vue'),
      },
    ],
  },
];

export default excelRoutes;
