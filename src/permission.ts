import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import router from './router';
import store from './store';
import { message } from 'ant-design-vue';
import { getToken } from './utils/cookie';

router.beforeEach(async (to, from, next) => {
  nprogress.start();

  const token = getToken();

  const { routes } = store.getters;

  // if (!token) {
  //   next(`/login`);
  //   nprogress.done();
  //   return;
  // }

  if (routes) {
    next();
    return;
  }

  // 重新获取路由， 并且重新将路由新增addRoute
  const currentRoutes = await store.dispatch('GenerateRoutes');

  currentRoutes.forEach((route: any) => {
    router.addRoute(route);
  });
  next({ ...to, replace: true });

  if (to.name === 'Login') {
    message.warning('请勿重复登录');
    // return;
  }

  next();
});

router.afterEach((to, from) => {
  nprogress.done();
});
