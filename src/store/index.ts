import { createStore } from 'vuex';
import router from './modules/router';
import getters from './getters';
import user from './modules/user';
import locale from './modules/locale';

export default createStore({
  mutations: {},
  actions: {},
  modules: {
    router,
    user,
    locale,
  },
  getters,
});
