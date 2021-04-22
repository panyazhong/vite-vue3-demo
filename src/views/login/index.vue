<template>
  <div class="login-container">
    <div class="login-form">
      <img :src="Logo" alt="" />
      <a-form
        :form="formState"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        @submit="login"
      >
        <a-form-item label="Name">
          <a-input v-model:value="from.name" />
        </a-form-item>
        <!-- <a-form-item label="Gender">
          <a-select
            v-decorator="[
              'gender',
              {
                rules: [
                  { required: true, message: 'Please select your gender!' },
                ],
              },
            ]"
            placeholder="Select a option and change input text above"
            @change="handleSelectChange"
          >
            <a-select-option value="male"> male </a-select-option>
            <a-select-option value="female"> female </a-select-option>
          </a-select>
        </a-form-item> -->
        <!-- <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit"> Submit </a-button>
        </a-form-item> -->
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import Logo from '@/assets/logo.png';
import { reactive, defineComponent, UnwrapRef } from 'vue';
interface FormState {
  name: string;
  region: string | undefined;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}

export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      name: '',
      region: undefined,
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    });

    const login = () => {};
    return {
      Logo,
      formState,
      login,
    };
  },
});
</script>

<style scoped lang="scss">
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0, 21, 41);
}
</style>
