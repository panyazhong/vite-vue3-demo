const getters = {
  // user
  token: (state: any) => state.user.token,

  // routes
  routes: (state: any) => state.router.routes,

  // locale
  language: (state: any) => state.locale.language,
};

export default getters;
