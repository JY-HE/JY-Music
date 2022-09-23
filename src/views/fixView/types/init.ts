// SearchBox.vue state 变量接口
export interface SearchBoxState {
    hotSongs: Array<any>,
    searchSongs: Array<any>,
    showSongsBox: Boolean,
    songUrl: string,
    loading: Boolean,
}