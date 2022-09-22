// 歌单、歌曲相关API接口配置
import type { AxiosResponse, AxiosRequestConfig } from 'axios'

// 获取推荐歌单参数接口
export interface recPlaylistInterface {
    limit?: number  // 取出数量 , 默认为 30
}

// 获取歌单详情接口
export interface playlistDetailInterface {
    id: string  // 歌单id
    s?: number  // 歌单最近的 s 个收藏者,默认为 8
}

// 获取歌单所有歌曲接口
export interface playlistAllInterface {
    id: string  // 歌单id
    limit?: number  // 限制获取歌曲的数量，默认值为当前歌单的歌曲数量
    offset?: number // 默认值为0
}

// 请求配置对象接口
export interface SongsRequestConfigsInterface {
    // 获取推荐歌单配置
    getRecPlaylist: (params: recPlaylistInterface) => AxiosRequestConfig
    // 获取歌单详情配置
    getPlaylistDetail: (params: playlistDetailInterface) => AxiosRequestConfig
    // 获取歌单所有歌曲配置
    getPlaylistAll: (params: playlistAllInterface) => AxiosRequestConfig
}

// 请求实例方法接口
export interface SongsRequestMethodsInterface {
    // 获取推荐歌单方法
    getRecPlaylist: (params: recPlaylistInterface) => Promise<AxiosResponse>
    // 获取歌单详情方法
    getPlaylistDetail: (params: playlistDetailInterface) => Promise<AxiosResponse>
    // 获取歌单所有歌曲方法
    getPlaylistAll: (params: playlistAllInterface) => Promise<AxiosResponse>

}