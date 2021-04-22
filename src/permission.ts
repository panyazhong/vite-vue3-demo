import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import router from './router';
import { message } from 'ant-design-vue';
import { getToken } from './utils/cookie';

router.beforeEach((to, from, next) => {
  nprogress.start();

  const token = getToken();

  if (!token) {
    next(`/login`);
    nprogress.done();
    return;
  }

  if (to.name === 'Login') {
    message.warning('请勿重复登录');
    // return;
  }

  next();
});

router.afterEach((to, from) => {
  nprogress.done();
});
