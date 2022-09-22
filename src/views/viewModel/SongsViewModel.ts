// 歌单、歌曲相关API实例方法
import ViewModelBase from '@/views/viewModel/ViewModelBase';
import { recPlaylistInterface, playlistDetailInterface, playlistAllInterface } from '@/types/SongsBizApiInterface'

class SongsViewModel extends ViewModelBase {
    constructor() {
        super();
    }

    // 获取推荐歌单
    async getRecPlaylist(params: recPlaylistInterface) {
        const result: any = await this._songsBizApi?.getRecPlaylist(params);
        return result.result;
    }

    // 获取歌单详情
    async getPlaylistDetail(params: playlistDetailInterface) {
        const result: any = await this._songsBizApi?.getPlaylistDetail(params);
        return result.playlist;
    }

    // 获取歌单所有歌曲
    async getPlaylistAll(params: playlistAllInterface) {
        const result: any = await this._songsBizApi?.getPlaylistAll(params);
        return result.songs;
    }
}

const songsViewModel = new SongsViewModel();
export default songsViewModel;


