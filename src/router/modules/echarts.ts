import { RouteRecordRaw } from 'vue-router';
import Layout from '@/components/Layout/index.vue';

const echartsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/echarts',
    name: 'Echarts',
    component: Layout,
    redirect: '/echarts/line_charts',
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
        component: () => import('@/views/echarts/index.vue'),
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
