import { defineStore } from 'pinia'

export const InitStore = defineStore({
    id: 'init', // id必填，且需要唯一
    state: () => {
        return {
            config: ref<any>(null), // 配置项
            searchSongs: ref<Array<object>>([]),  // 搜索到的歌曲
            songListDetail: ref<object>({}),  // 歌单详情
            songList: ref<Array<object>>([])  // 歌单中的歌曲
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
        }
    }
})