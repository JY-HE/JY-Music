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
        // console.log("Rd ~ file: ViewModelBase.ts ~ line 14 ~ ViewModelBase ~ constructor ~ this._singerBizApi", this._singerBizApi)
        this._searchBizApi = bizService.searchBizApi;
        console.log("Rd ~ file: ViewModelBase.ts ~ line 16 ~ ViewModelBase ~ constructor ~ this._searchBizApi", this._searchBizApi)
        console.trace("Rd ~ file: ViewModelBase.ts ~ line 15 ~ ViewModelBase ~ constructor ~ this._searchBizApi")
    }
}

export default ViewModelBase;
