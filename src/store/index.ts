import { createStore } from 'vuex';
import routes from './modules/routes';

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
  },
  getters: {
    count(state: any) {
      return state.count;
    },
  },
});
