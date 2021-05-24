<template>
  <a-card hoverable>
    <template #cover>
      <div></div>
      <!-- <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      /> -->
    </template>

    <a-card-meta title="Europe Street beat">
      <template #description>
        Vue3.0
        <a-progress :percent="60" status="active" />
        TypeScript
        <a-progress :percent="60" status="active" />
      </template>
    </a-card-meta>
  </a-card>
</template>

<script>
import logo from '@/assets/avatar.jpg';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      logo,
    };
  },
});
</script>

<style lang="scss" scoped>
.ant-card-cover {
  background-image: url('../../../');
}
</style>
