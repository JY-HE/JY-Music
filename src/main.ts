import { createApp } from 'vue'
import '@/assets/css/public.css'
import '@/utils/resize'
import App from './App.vue'
import store from './store'
import router from '@/router';
import bizService from '@/service'
// 创建vue实例
const app = createApp(App)

// 初始化业务层
bizService.init()

// 添加到全局中
// app.config.globalProperties.$setThemeStyle = setThemeStyle

app.use(store).use(router).mount('#app')

