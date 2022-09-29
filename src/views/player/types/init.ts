
// Player.vue state 变量接口
export interface PlayerState {
    allSongs: any
    songUrl: string
    songState: boolean
    duration: any
    currentTime: number | undefined
    loop: boolean
    songIndex: number
}

// SongInfo.vue state 变量接口
export interface songInfoState {
    songName: string,
    users: any,
    songAlbum: string,
    picUrl: string,
    lyrics: string,
}