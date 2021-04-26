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
      title: '图表',
    },
    children: [
      {
        path: 'line_charts',
        name: 'LineCharts',
        meta: {
          roles: ['admin', 'user'],
          title: '柱状图',
        },
        component: () => import('@/views/echarts/index.vue'),
      },
      {
        path: 'mix_charts',
        name: 'MixCharts',
        meta: {
          roles: ['user', 'admin'],
          title: '混合图表',
        },
        component: () => import('@/views/mixEcharts/index.vue'),
      },
    ],
  },
];

export default echartsRoutes;
