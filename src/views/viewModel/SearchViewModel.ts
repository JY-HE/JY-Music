// 搜索相关API实例方法
import ViewModelBase from '@/views/viewModel/ViewModelBase';
import { SearchInterface, SongUrlInterface } from '@/types/SearchBizApiInterface'

class SearchViewModel extends ViewModelBase {
    constructor() {
        super();

    }

    // 关键词搜索
    async keywordSearch(params: SearchInterface) {
        const result: any = await this._searchBizApi?.keywordSearch(params);
        return result?.result?.songs;
    }

    // 获取音乐url
    async getSongUrl(params: SongUrlInterface) {
        const result: any = await this._searchBizApi?.getSongUrl(params);
        return result?.data?.[0].url;
    }

    // 热搜列表
    async getSongHot() {
        const result: any = await this._searchBizApi?.getSongHot();
        return result?.result?.hots;
    }
}

const searchViewModel = new SearchViewModel();
export default searchViewModel;


