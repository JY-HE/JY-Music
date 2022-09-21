// 视图数据层基类
import bizService from '@/service/index'
import { SingerRequestMethodsInterface } from '@/types/SingerBizApiInterface'
import { SearchRequestMethodsInterface } from '@/types/SearchBizApiInterface'
class ViewModelBase {
    _loginBizApi: any
    _singerBizApi: SingerRequestMethodsInterface | undefined
    _searchBizApi: SearchRequestMethodsInterface | undefined

    constructor() {
        // 业务请求类
        this._loginBizApi = bizService.loginBizApi;
        this._singerBizApi = bizService.singerBizApi;
        this._searchBizApi = bizService.searchBizApi;
    }
}

export default ViewModelBase;
