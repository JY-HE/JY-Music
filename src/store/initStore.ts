import { defineStore } from 'pinia'
import { StoreInterface } from '@/types/StoreInterface'

export const InitStore = defineStore({
    id: 'init', // id必填，且需要唯一
    state: (): StoreInterface => {
        return {
            config: null, // 配置项
            searchSongs: [],  // 搜索到的歌曲
            songListDetail: null,  // 歌单详情
            songList: [],  // 歌单中的十首歌曲
            songListAll: [],  // 歌单中的全部歌曲
            playSongUrl: '', // 当前播放歌曲的 url
            playSongInfo: null, // 当前播放歌曲的详情
            playSongLyric: null // 当前播放歌曲的歌词
        }
    },
    // 开启数据缓存
    persist: {
        enabled: true,
        // 可以指定缓存的字段和方式
        // strategies: [
        //     {
        //       storage: localStorage,
        //       paths: ['name', 'age']
        //     }
        //   ]
    },

    actions: {
        setConfig(payload: object) {
            this.config = payload
        },
        setSearchSongs(payload: Array<object>) {
            this.searchSongs = payload
        },
        // 更改config中某一配置项的值
        setConfiguration(configName: string, configuration: string = '', payload: any) {
            this.config[configName][configuration] = payload
        },
        setSongListDetail(payload: object) {
            this.songListDetail = payload
        },
        setSongList(payload: Array<object>) {
            this.songList = payload
        },
        setSongListALL(payload: Array<object>) {
            this.songListAll = payload
        },
        setPlaySongUrl(payload: string) {
            this.playSongUrl = payload
        },
        setPlaySongInfo(payload: any) {
            this.playSongInfo = payload
        },
        setPlaySongLyric(payload: any) {
            this.playSongLyric = payload
        }
    }
})