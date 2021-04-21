import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import store from './store/index';

createApp(App).use(router).use(Antd).use(store).mount('#app');
