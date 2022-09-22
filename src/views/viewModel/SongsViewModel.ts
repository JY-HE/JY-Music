// 歌单、歌曲相关API实例方法
import ViewModelBase from '@/views/viewModel/ViewModelBase';
import { SingerCategoryInterface } from '@/types/SingerBizApiInterface'
import { recPlaylistInterface } from '@/types/SongsBizApiInterface'

class SongsViewModel extends ViewModelBase {
    constructor() {
        super();
    }

    // 获取推荐歌单
    async getRecPlaylist(params: recPlaylistInterface) {
        const result: any = await this._songsBizApi?.getRecPlaylist(params);
        return result.result;
    }
}

const songsViewModel = new SongsViewModel();
export default songsViewModel;


