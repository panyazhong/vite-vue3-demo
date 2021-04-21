import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '../components/Layout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('../views/dashboard/index.vue'),
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

