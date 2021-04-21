<template>
  <h1>{{ msg }}</h1>

  <button @click="set">count is: {{ count }}</button>
  <a-button @click="set" type="primary"> 点我加{{ count }} </a-button>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, watch, computed } from 'vue';
import { mapGetters } from 'vuex';
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    let count: any = ref(0);
    const set = () => {
      count.value++;
    };

    watch(count, (newV, oldV) => {
      console.log(`newV: ${newV}`);
    });
    onMounted(set);

    return { count, set };
  },
});
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
