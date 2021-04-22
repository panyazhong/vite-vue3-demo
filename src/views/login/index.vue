<template>
  <div class="login-container">
    <div class="login-form">
      <img :src="Logo" alt="" />
      <div>
        <h3>登录</h3>
        <a-form
          :form="formState"
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
          @submit="login"
          layout="vertical"
          class="form"
        >
          <a-form-item label="">
            <a-input v-model:value="formState.name" placeholder="Username" />
          </a-form-item>
          <a-form-item label="">
            <a-input
              v-model:value="formState.password"
              placeholder="Password"
              type="password"
            />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="login">Submit</a-button>
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
  </div>
</template>

<script lang="ts">
import Logo from '@/assets/logo.png';
import { reactive, defineComponent, UnwrapRef } from 'vue';
import { useRouter } from 'vue-router';
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
      password: '',
    });

    const router = useRouter();

    const login = async () => {
      router.push('/dashboard');
    };
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
  .login-form {
    width: 400px;
    background: #efefef;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 150px;
    }
    .form {
      width: 200px;
      margin-top: 20px;
      .ant-input {
        width: 100%;
      }
      .ant-btn {
        width: 100%;
      }
    }
  }
}
</style>
