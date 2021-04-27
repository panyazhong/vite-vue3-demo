import { RouteRecordRaw } from 'vue-router';
import Layout from '@/components/Layout/index.vue';

const clipboardRoutes: Array<RouteRecordRaw> = [
  {
    path: '/clipboard',
    name: 'Clipboard',
    component: Layout,
    redirect: '/clipboard/default_clipboard',
    meta: {
      roles: ['admin', 'user'],
      title: 'Clipboard',
    },
    children: [
      {
        path: 'default_clipboard',
        name: 'DefaultClipboard',
        meta: {
          roles: ['admin', 'user'],
          title: 'Clipboard组件',
        },
        component: () => import('@/views/clipboard/index.vue'),
      },
    ],
  },
];

export default clipboardRoutes;
