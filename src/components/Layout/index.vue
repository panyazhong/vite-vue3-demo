<template>
  <div>
    <sys-header></sys-header>
    <transition name="fade-transform" mode="out-in">
      <router-view class="content-container"></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import SysHeader from './components/SysHeader.vue';
export default {
  components: {
    SysHeader,
  },
  setup() {
    const a = () => {};
    onMounted(a);
  },
};
</script>

<style scoped>
.content-container {
  margin-top: 60px;
  padding: 20px;
}
/*fade-transform*/
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
