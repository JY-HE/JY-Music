// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import App from './App.vue'
// import '@/assets/css/public.css'
// import '@/utils/resize'
// import configInit from '@/config/init';
// // import store from './store'
// import router from '@/router';
// import bizService from '@/service'

// 配置初始化，获取本地配置
// configInit()

// 初始化业务层
// bizService.init()

// const pinia = createPinia()

// 创建 vue 实例
// const app = createApp(App)

// 挂载 pinia
// app.use(pinia)



// app.use(router).mount('#app')

import Core from '@/core/Core';

const core = new Core();
core.startup();

