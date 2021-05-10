<template>
  <div class="clipboard">
    <a-input
      enter-button="clipboard"
      id="bar"
      v-focus
      v-model:value="clipValue"
      placeholder="http://www.uinout.cn"
      style="width: 220px"
    ></a-input>
    <a-button
      data-clipboard-target="#bar"
      @click="search(clipValue, $event)"
      type="primary"
    >
      clipBoard
    </a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import handleClipboard from '@/utils/clipboard';

export default defineComponent({
  setup() {
    const clipValue = ref<string>('http://www.uinout.cn');

    let search = (val: any, e: any) => {
      handleClipboard(clipValue.value, e);
    };

    return {
      clipValue,
      search,
    };
  },
});
</script>

<style scoped lang="scss">
.clipboard {
  display: flex;
}
</style>
