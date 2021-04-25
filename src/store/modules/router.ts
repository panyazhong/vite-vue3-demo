import { RouteRecordRaw } from 'vue-router';
import { asyncRoutes, constantRoutes } from '../../router/index';

import router from '../../router';

function hasPermission(temp: any, role: string) {
  return temp.meta.roles.includes(role);
}

export function filterRoutes(routes: any) {
  const res: any[] = [];

  routes.forEach((route: any) => {
    const temp = { ...route };

    if (!!temp.children) {
      temp.children = filterRoutes(route.children);
    }

    if (hasPermission(temp, 'admin')) {
      res.push(temp);
    }
  });

  return res;
}

const routes = {
  state: {
    routes: null,
  },
  mutations: {
    SET_ROUTES: (state: any, routes: any) => {
      state.routes = routes;
    },
  },
  actions: {
    GenerateRoutes({ commit }: { commit: any }) {
      return new Promise(async (resolve, reject) => {
        let routes = [
          ...filterRoutes(asyncRoutes),
          ...filterRoutes(constantRoutes),
        ];

        resolve(routes);
        commit('SET_ROUTES', routes);
      });
    },
  },
};

export default routes;
