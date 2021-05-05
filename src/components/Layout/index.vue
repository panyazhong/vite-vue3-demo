<template>
  <div>
    <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
      <sys-header></sys-header>

      <div class="content-container">
        <bread-crumb></bread-crumb>
        <router-view v-slot="{ Component }">
          <transition name="fade-transform" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </a-config-provider>
  </div>
</template>

<script lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import SysHeader from './components/SysHeader.vue';
import breadCrumb from '../breadCrumb/index.vue';
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import moment from 'moment';
import 'moment/dist/locale/zh-cn';

moment.locale('en');

export default {
  components: {
    SysHeader,
    breadCrumb,
  },
  setup() {
    const a = () => {};
    const store = useStore();

    const language = computed(() => store.getters.language);

    onMounted(a);

    return {
      enUS,
      zhCN,
      locale: language,
    };
  },
};
</script>

<style scoped lang="scss">
.content-container {
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
