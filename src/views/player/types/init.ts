
// Player.vue state 变量接口
export interface PlayerState {
    allSongs: any
    songUrl: string
    songState: Boolean
    duration: any
    currentTime: Number | undefined
    loop: Boolean
}

// SongInfo.vue state 变量接口
export interface songInfoState {
    songName: string,
    users: any,
    songAlbum: string,
    picUrl: string,
    lyrics: string,
}