<template>
  <div class="header">
    <div class="header-left">
      <div class="logo">
        <img :src="Logo" alt="" />
      </div>
      <nav-bar></nav-bar>
    </div>

    <div>
      <span @click="testA">UserInfo</span>
      <a-button type="link" @click="login">登录</a-button>
    </div>
  </div>
</template>

<script>
import NavBar from './Navbar.vue';
import Logo from '@/assets/logo.png';

import screenful from 'screenfull';
import { useRoute, useRouter } from 'vue-router';

import { filterRoutes } from '@/store/modules/router';
import { asyncRoutes } from '@/router/index';
import { testApi } from '@/api/test';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const testA = async () => {
      console.log(filterRoutes(asyncRoutes));
      // screenful.toggle();
      // await testApi();
    };
    const login = async () => {
      router.push('/login');
    };
    return {
      Logo,
      testA,
      login,
    };
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  color: #efefef;
  background-color: rgb(0, 21, 41);
}
.header-left {
  display: flex;
  align-items: center;
}
.logo img {
  height: 60px;
}
</style>
