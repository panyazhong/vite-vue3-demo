<template>
  <div>
    <sys-header></sys-header>

    <div class="content-container">
      <bread-crumb></bread-crumb>
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import SysHeader from './components/SysHeader.vue';
import breadCrumb from '../breadCrumb/index.vue';

export default {
  components: {
    SysHeader,
    breadCrumb,
  },
  setup() {
    const a = () => {};
    onMounted(a);
  },
};
</script>

<style scoped lang="scss">
.content-container {
  margin-top: 60px;
  padding: 20px;
  ::v-deep .ant-breadcrumb {
    margin-bottom: 20px;
  }
}
/*fade-transform*/
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
