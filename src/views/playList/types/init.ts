import { LocationQueryValue } from "vue-router"

// PlayList.vue state 变量接口
export interface PlayListState {
    songListId: string | LocationQueryValue[]
    songListDetail: any
    allSongs: Array<object>
}