// 搜索相关API实例方法
import ViewModelBase from '@/views/viewModel/ViewModelBase';
import { SearchInterface } from '@/types/SearchBizApiInterface'

class SearchViewModel extends ViewModelBase {
    constructor() {
        super();
    }

    // 关键词搜索
    async keywordSearch(params: SearchInterface) {
        const result: any = await this._searchBizApi?.keywordSearch(params);
        return result;
    }
}

const searchViewModel = new SearchViewModel();
export default searchViewModel;


