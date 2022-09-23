// config-defaultTheme 接口
export interface DefaultThemeInterface {
    "theme-color": string,
    "theme-background-color": string,
    "font-base-color": string,
}


// config 配置整体接口
export interface ConfigInterface {
    title: string,
    defaultTheme: DefaultThemeInterface
}