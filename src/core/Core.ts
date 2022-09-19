import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store'
import configInit from '@/config/init';
import router from '@/router';
import bizService from '@/service'
import '@/assets/css/public.css'
import '@/utils/resize'
import { InitStore } from '@/store/initStore';

class Core {

    async startup() {

        // 创建 vue 实例
        const app = createApp(App)

        // pinia 初始化并挂载
        app.use(store)

        // 配置初始化
        await configInit()

        // 路由挂载
        app.use(router)

        // 初始化业务层
        await bizService.init()

        app.mount('#app')

    }
}

export default Core;
