import { RouteRecordRaw } from 'vue-router';
import Login from '@/views/login/index.vue';

const hiddenRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录',
      roles: ['admin', 'user'],
      hidden: true,
    },
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404',
      roles: ['admin'],
      hidden: true,
    },
    component: () => import('../components/HelloWorld.vue'),
  },
];

export default hiddenRoutes;
