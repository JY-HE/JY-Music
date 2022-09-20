import { defineStore } from 'pinia'

export const InitStore = defineStore({
    id: 'init', // id必填，且需要唯一
    state: () => {
        return {
            config: ref<any>(null), // 配置项
            searchSongs: ref<Array<object>>([])  // 搜索到的歌曲
        }
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
        }
    }
})