import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from './store/index';
import './permission';

// import '@/icons';
import svgIcon from './components/SvgIcon/index.vue';

const app = createApp(App);

app
  .component('svg-icon', svgIcon)
  .use(router)
  .use(Antd)
  .use(store)
  .mount('#app');
