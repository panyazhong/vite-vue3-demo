import { setToken } from '@/utils/cookie';

const user = {
  state: {},
  mutations: {},
  actions: {
    Login() {
      const token = 'asdasd231cadsads';
      setToken(token);
    },
  },
};

export default user;
