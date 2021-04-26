import { RouteRecordRaw } from 'vue-router';
import Layout from '@/components/Layout/index.vue';

const tableRoutes: Array<RouteRecordRaw> = [
  {
    path: '/table',
    name: 'Table',
    component: Layout,
    redirect: '/table/default_table',
    meta: {
      roles: ['admin', 'user'],
      title: '表格',
    },
    children: [
      {
        path: 'default_table',
        name: 'DefaultTable',
        meta: {
          roles: ['admin', 'user'],
          title: '默认表格',
        },
        component: () =>
          import('@/views/table/components/defaultTable/index.vue'),
      },
    ],
  },
];

export default tableRoutes;
