import { RouteRecordRaw } from 'vue-router';
import Layout from '@/components/Layout/index.vue';

const echartsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/echarts',
    name: 'Echarts',
    component: Layout,
    children: [
      {
        path: 'line_charts',
        name: 'LineCharts',
        component: () => import('@/components/HelloWorld.vue'),
      },
    ],
  },
];

export default echartsRoutes;
