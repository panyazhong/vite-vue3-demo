import { RouteRecordRaw } from 'vue-router';
import Layout from '@/components/Layout/index.vue';

const echartsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/echarts',
    name: 'Echarts',
    component: Layout,
    meta: {
      roles: ['admin', 'user'],
    },
    children: [
      {
        path: 'line_charts',
        name: 'LineCharts',
        meta: {
          roles: ['admin', 'user'],
        },
        component: () => import('@/components/HelloWorld.vue'),
      },
      {
        path: 'edit_charts',
        name: 'EditCharts',
        meta: {
          roles: ['user', 'admin'],
        },
        component: () => import('@/components/HelloWorld.vue'),
      },
    ],
  },
];

export default echartsRoutes;
