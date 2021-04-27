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

      <a-dropdown :placement="placement">
        <GlobalOutlined />
        <template #overlay>
          <a-menu>
            <a-menu-item v-for="language in languages" :key="language.value">
              {{ language.label }}
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import NavBar from './Navbar.vue';
import Logo from '@/assets/logo.png';
import { FullscreenOutlined, GlobalOutlined } from '@ant-design/icons-vue';

import screenful from 'screenfull';
import { useRouter } from 'vue-router';

const languages = [
  {
    label: '简体中文',
    value: 'zh',
  },
  {
    label: 'english',
    value: 'en',
  },
];

export default {
  setup() {
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
      placement: 'bottomRight',
      languages,
    };
  },
  components: {
    NavBar,
    FullscreenOutlined,
    GlobalOutlined,
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
  padding: 0px 20px;
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
