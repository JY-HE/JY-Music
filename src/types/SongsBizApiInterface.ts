// 歌单、歌曲相关API接口配置
import type { AxiosResponse, AxiosRequestConfig } from 'axios'

// 获取推荐歌单参数接口
export interface recPlaylistInterface {
    limit?: number
}

// 请求配置对象接口
export interface SongsRequestConfigsInterface {
    // 获取推荐歌单配置
    getRecPlaylist: (params: recPlaylistInterface) => AxiosRequestConfig
}

// 请求实例方法接口
export interface SongsRequestMethodsInterface {
    // 获取推荐歌单方法
    getRecPlaylist: (params: recPlaylistInterface) => Promise<AxiosResponse>

}