<template>
  <a-row type="flex" justify="space-between" :gutter="16">
    <a-col :span="6" v-for="(item, index) in cards" :key="index">
      <a-card>
        <a-card-meta :title="item.title" description="112893">
          <template #avatar>
            <svg-icon :name="item.name" :color="item.color"></svg-icon>
          </template>
        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const cards = ref([
      {
        title: 'New Visits',
        color: '#ff4d4f',
        name: 'user',
      },
      {
        title: 'Messages',
        color: '#bae637',
        name: 'message',
      },
      {
        title: 'Purchases',
        color: '#40a9ff',
        name: 'rmb',
      },
      {
        title: 'Shoppings',
        color: '#73d13d',
        name: 'cart',
      },
    ]);

    return {
      cards,
    };
  },
});
</script>

<style scoped lang="scss">
.ant-card {
  cursor: pointer;
}
.ant-card-meta {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  :deep() .ant-card-meta-avatar {
    padding: 10px;
    border-radius: 10px;
  }
  .svg-icon {
    font-size: 50px;
  }
}
</style>
