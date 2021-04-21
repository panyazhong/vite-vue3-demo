import { RouteRecordRaw } from 'vue-router';
import Layout from '@/components/Layout/index.vue';

const hiddenRoutes: Array<RouteRecordRaw> = [
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

export default hiddenRoutes;
