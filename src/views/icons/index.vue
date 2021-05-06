<template>
  <div class="">
    <a-tabs type="card" v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="自定义图标">
        <div class="icon-con">
          <p v-for="icon in icons" :key="icon" class="icon">
            <svg-icon :name="icon"></svg-icon>
            <span>{{ icon }}</span>
          </p>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import readFileNames from '@/utils/readFileNames';
// import readFileNames from '../../utils/readFileName';
// const names = require.context('../../icons/svg', false, /\.svg$/);
export default defineComponent({
  setup() {
    let icons: any = ref([]);
    let activeKey = ref();

    onMounted(() => {
      icons.value = readFileNames();
    });

    return {
      activeKey,
      icons,
    };
  },
});
</script>

<style scoped lang="scss">
.ant-tabs-card {
  background-color: #fff;
  border: 1px solid rgb(223, 225, 230);
  ::v-deep .ant-tabs-content {
    padding: 0px 10px 10px;
  }
  ::v-deep .ant-tabs-bar {
    background-color: rgb(245, 247, 250);
  }
  .icon-con {
    display: flex;
    flex-direction: row;
    align-items: center;
    .icon {
      display: flex;
      flex-direction: column;
      width: 100px;
      align-items: center;
      .svg-icon {
        font-size: 30px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
