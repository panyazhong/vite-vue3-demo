import { RouteRecordRaw } from 'vue-router';
import Layout from '@/components/Layout/index.vue';

const tabRoutes: Array<RouteRecordRaw> = [
  {
    path: '/tab',
    name: 'Tab',
    component: Layout,
    redirect: '/tab/default_tab',
    meta: {
      roles: ['admin', 'user'],
      title: '标签',
    },
    children: [
      {
        path: 'default_tab',
        name: 'DefaultTab',
        meta: {
          roles: ['admin', 'user'],
          title: '标签页',
        },
        component: () => import('@/views/tab/index.vue'),
      },
    ],
  },
];

export default tabRoutes;
