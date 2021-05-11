import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';
import Layout from '../components/Layout/index.vue';
import hiddenRoutes from './hide';
import echartsRoutes from './modules/echarts';
import tableRoutes from './modules/table';
import tabRoutes from './modules/tab';
import clipboardRoutes from './modules/clipboard';
import iconsRoutes from './modules/icons';
import componentsRoutes from './modules/components';
import excelRoutes from './modules/excel';

export const constantRoutes: Array<RouteRecordRaw> = [
  ...hiddenRoutes,
  {
    path: '/',
    name: 'Home',
    component: Layout,
    meta: {
      title: '概览',
      roles: ['admin'],
      click: false,
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: {
          title: '概览页',
          roles: ['admin'],
        },
        component: () => import('../views/dashboard/index.vue'),
      },
    ],
  },
];

export const asyncRoutes: Array<RouteRecordRaw> = [
  ...echartsRoutes,
  ...tableRoutes,
  ...tabRoutes,
  ...clipboardRoutes,
  ...iconsRoutes,
  ...componentsRoutes,
  ...excelRoutes,
  // {
  //   path: '*',
  //   redirect: '/404',
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  // scrollBehavior: (to: any, from: any, savedOptions: any) => {
  //   y: 0;
  // },
  routes: constantRoutes,
});

export default router;
