import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import store from './store/index';
import './permission';

// import '@/icons';
import svgIcon from './components/SvgIcon/index.vue';

//markdown
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

VMdEditor.use(githubTheme);

const app = createApp(App);

app
  .component('svg-icon', svgIcon)
  .use(router)
  .use(Antd)
  .use(store)
  .use(VMdEditor)
  .mount('#app');
