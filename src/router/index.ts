import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '../components/Layout/index.vue';
import hiddenRoutes from './hide';
import echartsRoutes from './modules/echarts';

const constantRoutes: Array<RouteRecordRaw> = [
  ...hiddenRoutes,
  {
    path: '/',
    name: 'Home',
    component: Layout,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: {
          title: '概览',
        },
        component: () => import('../views/dashboard/index.vue'),
      },
    ],
  },
];

const asyncRoutes: Array<RouteRecordRaw> = [...echartsRoutes];

export default createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});
