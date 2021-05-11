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
        component: () => import('@/views/excel/index.vue'),
      },
    ],
  },
];

export default excelRoutes;
