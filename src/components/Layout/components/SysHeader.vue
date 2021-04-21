<template>
  <div class="header">
    <div class="header-left">
      <div class="logo">
        <img :src="Logo" alt="" />
      </div>
      <nav-bar></nav-bar>
    </div>

    <div @click="testA">UserInfo</div>
  </div>
</template>

<script>
import NavBar from './Navbar.vue';
import Logo from '@/assets/logo.png';

import screenful from 'screenfull';

import { testApi } from '@/api/test';
export default {
  setup() {
    const testA = async () => {
      screenful.toggle();
      await testApi();
    };
    return {
      Logo,
      testA,
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
