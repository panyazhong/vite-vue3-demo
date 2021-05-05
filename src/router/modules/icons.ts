import { RouteRecordRaw } from 'vue-router';
import Layout from '@/components/Layout/index.vue';

const iconsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/icon',
    name: 'Icon',
    component: Layout,
    redirect: '/icon/icons',
    meta: {
      roles: ['admin', 'user'],
      title: '图标',
    },
    children: [
      {
        path: 'icons',
        name: 'Icons',
        meta: {
          roles: ['admin', 'user'],
          title: '自定义图标',
        },
        component: () => import('@/views/icons/index.vue'),
      },
    ],
  },
];

export default iconsRoutes;
