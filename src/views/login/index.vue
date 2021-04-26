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
            <a-input v-model:value="formState.name" placeholder="Username">
            </a-input>
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
        </a-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Logo from '@/assets/logo.png';
import { reactive, defineComponent, UnwrapRef } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
interface FormState {
  name: string;
  password: string;
}

export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      name: '',
      password: '',
    });

    const router = useRouter();
    const store = useStore();

    const login = async () => {
      store.dispatch('Login');
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
    width: 500px;
    border-radius: 10px;
    // box-shadow: 0px 0px 10px #efefef;
    // background: rgb(250, 250, 250, 0.8);
    color: #eee;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    h3 {
      color: #eee;
      margin-top: 10px;
      font-size: 26px;
    }
    img {
      width: 150px;
    }
    .form {
      width: 300px;
      margin-top: 20px;
      .ant-input {
        width: 100%;
        background-color: rgb(5, 21, 41);
        border: 1px solid #606266;
      }
      .ant-btn {
        width: 100%;
      }
    }
  }
}
</style>
