import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from '@/router';
import { apiInitializer } from './api/init'

// 创建vue实例
const app = createApp(App)

// 业务api初始化，构建各个业务api
await apiInitializer.init({ token: '', config: {} });

// 挂载pinia
app.use(store)
// 挂载vue-router
app.use(router);

// 挂载实例
app.mount('#app');
