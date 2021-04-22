import { RouteRecordRaw } from 'vue-router';
import Login from '@/views/login/index.vue';

const hiddenRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

export default hiddenRoutes;
