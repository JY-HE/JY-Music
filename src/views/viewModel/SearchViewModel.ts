// 搜索相关API实例方法
import ViewModelBase from '@/views/viewModel/ViewModelBase';
import { SearchInterface } from '@/types/SearchBizApiInterface'

class SearchViewModel extends ViewModelBase {
    constructor() {
        super();
        console.log("Rd ~ file: SearchViewModel.ts ~ line 14 ~ SearchViewModel ~ keywordSearch ~ this._searchBizApi", this._searchBizApi)

    }

    // 关键词搜索
    async keywordSearch(params: SearchInterface) {
        const result: any = await this._searchBizApi?.keywordSearch(params);
        console.log("Rd ~ file: SearchViewModel.ts ~ line 14 ~ SearchViewModel ~ keywordSearch ~ result", result)
        return result;
    }
}

const searchViewModel = new SearchViewModel();
export default searchViewModel;


