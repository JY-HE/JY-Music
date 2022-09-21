// import { createApp } from 'vue'
// import store from '@/store'
// import configInit from '@/config/init';
// import router from '@/router';
// import bizService from '@/service'
// import '@/assets/css/public.css'
// import '@/utils/resize'

// // 初始化业务层
// bizService.init()

// // 懒加载
// const App = import('@/App.vue')

// // 创建 vue 实例
// const app = createApp(App)

// // 挂载 pinia
// app.use(store)

// // 配置初始化，获取本地配置
// configInit()

// app.use(router).mount('#app')

import Core from '@/core/Core';

const core = new Core();
core.startup();

