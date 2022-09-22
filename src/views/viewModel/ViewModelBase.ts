// 视图数据层基类
import bizService from '@/service/index'
import { SingerRequestMethodsInterface } from '@/types/SingerBizApiInterface'
import { SearchRequestMethodsInterface } from '@/types/SearchBizApiInterface'
import { SongsRequestMethodsInterface } from '@/types/SongsBizApiInterface'
class ViewModelBase {
    _loginBizApi: any
    _singerBizApi: SingerRequestMethodsInterface | undefined
    _searchBizApi: SearchRequestMethodsInterface | undefined
    _songsBizApi: SongsRequestMethodsInterface | undefined

    constructor() {
        // 业务请求类
        this._loginBizApi = bizService.loginBizApi;
        this._singerBizApi = bizService.singerBizApi;
        this._searchBizApi = bizService.searchBizApi;
        this._songsBizApi = bizService.songsBizApi;
    }
}

export default ViewModelBase;
