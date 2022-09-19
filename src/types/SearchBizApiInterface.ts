// 搜索相关API接口配置
import type { AxiosResponse, AxiosRequestConfig } from 'axios'

// 关键词搜索参数接口
export interface SearchInterface {
    keywords: string
}

// 请求配置对象接口
export interface SearchRequestConfigsInterface {
    // 关键词搜索配置
    keywordSearch: (params: SearchInterface) => AxiosRequestConfig
}

// 请求实例方法接口
export interface SearchRequestMethodsInterface {
    // 关键词搜索方法
    keywordSearch: (params: SearchInterface) => Promise<AxiosResponse>
}