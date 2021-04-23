import { createStore } from 'vuex';
import router from './modules/router';
import getters from './getters';
import user from './modules/user';

export default createStore({
  mutations: {},
  actions: {},
  modules: {
    router,
    user,
  },
  getters,
});
