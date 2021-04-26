<template>
  <div class="header">
    <div class="header-left">
      <div class="logo">
        <img :src="Logo" alt="" />
      </div>
      <nav-bar></nav-bar>
    </div>

    <div class="header-right">
      <span class="icon" @click="fullscreen"><FullscreenOutlined /></span>
      <span @click="testA">UserInfo</span>
      <a-button type="link" @click="login">登录</a-button>
    </div>
  </div>
</template>

<script>
import NavBar from './Navbar.vue';
import Logo from '@/assets/logo.png';
import { FullscreenOutlined } from '@ant-design/icons-vue';

import screenful from 'screenfull';
import { useRoute, useRouter } from 'vue-router';

import { filterRoutes } from '@/store/modules/router';
import { asyncRoutes } from '@/router/index';
import { testApi } from '@/api/test';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const fullscreen = async () => {
      screenful.toggle();
    };
    const login = async () => {
      router.push('/login');
    };
    return {
      Logo,
      fullscreen,
      login,
    };
  },
  components: {
    NavBar,
    FullscreenOutlined,
  },
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  color: #efefef;
  background-color: rgb(0, 21, 41);
  .header-right {
    display: flex;
    align-items: center;
    .icon {
      margin-right: 10px;
      font-weight: bold;
      font-size: 24px;
      cursor: pointer;
    }
  }
}
.header-left {
  display: flex;
  align-items: center;
}
.logo img {
  height: 60px;
}
</style>
