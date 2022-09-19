// 歌手相关API接口配置
import type { AxiosResponse, AxiosRequestConfig } from 'axios'

// 获取歌手分类列表参数接口
export interface SingerCategoryInterface {
    type: number
    area: number
    initial: string
}

// 请求配置对象接口
export interface SingerRequestConfigsInterface {
    // 获取歌手分类列表配置
    getSingerCategory: (params: SingerCategoryInterface) => AxiosRequestConfig
}

// 请求实例方法接口
export interface SingerRequestMethodsInterface {
    // 获取歌手分类列表方法
    getSingerCategory: (params: SingerCategoryInterface) => Promise<AxiosResponse>
}