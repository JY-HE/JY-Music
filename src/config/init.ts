// 配置初始化

import AppConfig from './AppConfig';
import theme from '@/utils/theme';
import { InitStore } from '@/store/initStore';

const init = async () => {
    const appConfig = new AppConfig();
    await appConfig.init();
    const { config } = appConfig;

    // 设置默认主题样式
    theme.setDefaultTheme(config?.defaultTheme)

    const initStore = InitStore();

    // 将 config 存入 pinia
    initStore.setConfig(config);
}

export default init;
