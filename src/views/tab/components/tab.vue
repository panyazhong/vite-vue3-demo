<template>
  <div>
    <div>
      大小：
      <a-radio-group v-model:value="size" style="margin-bottom: 16px">
        <a-radio-button value="small">Small</a-radio-button>
        <a-radio-button value="default">Default</a-radio-button>
        <a-radio-button value="large">Large</a-radio-button>
      </a-radio-group>
    </div>

    <div>
      方向：
      <a-radio-group v-model:value="mode" style="margin-bottom: 16px">
        <a-radio-button value="top">Horizontal</a-radio-button>
        <a-radio-button value="left">Vertical</a-radio-button>
      </a-radio-group>
    </div>

    <div>
      位置：
      <a-radio-group v-model:value="mode" style="margin-bottom: 16px">
        <a-radio-button value="top">top</a-radio-button>
        <a-radio-button value="bottom">bottom</a-radio-button>
        <a-radio-button value="left">left</a-radio-button>
        <a-radio-button value="right">right</a-radio-button>
      </a-radio-group>
    </div>

    <a-tabs
      type="editable-card"
      v-model:activeKey="activeKey"
      :size="size"
      :tab-position="mode"
    >
      <a-tab-pane key="1" tab="description">
        <description-com></description-com>
      </a-tab-pane>
      <a-tab-pane key="2" tab="dountDown">
        <count-down></count-down>
      </a-tab-pane>
      <a-tab-pane key="3" tab="timeLine">
        <time-line></time-line>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import descriptionCom from './description.vue';
import countDown from './countdown.vue';
import timeLine from './timeLine.vue';

export default defineComponent({
  setup() {
    return {
      activeKey: ref('1'),
      size: ref('small'),
      mode: ref('top'),
    };
  },
  components: {
    descriptionCom,
    countDown,
    timeLine,
  },
});
</script>

<style lang="scss" scoped>
.ant-tabs-card {
  border: 1px solid rgb(240, 240, 240);
  ::v-deep .ant-tabs-content {
    padding: 0px 20px 20px !important;
  }
}
</style>
