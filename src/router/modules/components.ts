import { RouteRecordRaw } from 'vue-router';
import Layout from '@/components/Layout/index.vue';

const componentsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/components',
    component: Layout,
    name: 'Components',
    redirect: '/components/json-editor',
    meta: {
      title: '组件',
      roles: ['admin', 'user'],
    },
    children: [
      {
        path: 'json-editor',
        name: 'JsonEditor',
        meta: {
          title: 'json编辑器',
          roles: ['admin', 'user'],
        },
        component: () => import('@/views/component/jsonEditor/index.vue'),
      },
    ],
  },
];

export default componentsRoutes;
