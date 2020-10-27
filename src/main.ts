import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './mock/index';

import '/@modules/vant/lib/index.css'
import Vant from 'vant';


createApp(App).use(Vant).use(router).use(store).mount('#app');
