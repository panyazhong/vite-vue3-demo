import axios from 'axios';
import ERROR_MESSAGE from './error_define';
import { message } from 'ant-design-vue';

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    const { data } = response,
      { code, msg } = data;
    if (code === 0) {
      return Promise.resolve(data);
    }

    if (msg) {
      message.error(msg);
    }

    return Promise.reject(msg);
  },
  (error) => {
    const { status } = error.response;
    message.error(ERROR_MESSAGE[status]);
    return Promise.reject(error);
  }
);

export default instance;
