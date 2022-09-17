// 歌手相关API实例方法
import ViewModelBase from '@/views/viewModel/ViewModelBase';
import { SingerCategoryInterface } from '@/types/SingerBizApiInterface'

class SingerViewModel extends ViewModelBase {
    constructor() {
        super();
    }

    // 获取歌手分类列表
    async getSingerCategory(params: SingerCategoryInterface) {
        const result: any = await this._singerBizApi?.getSingerCategory(params);
        return result.artists;
    }
}

const singerViewModel = new SingerViewModel();
export default singerViewModel;


