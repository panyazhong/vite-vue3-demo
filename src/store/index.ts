import { createStore } from 'vuex';
import routes from './modules/routes';
import user from './modules/user';

export default createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {},
  actions: {},
  modules: {
    routes,
    user,
  },
  getters: {
    count(state: any) {
      return state.count;
    },
  },
});
