// 视图数据层基类
import bizService from '@/service/index'
import { RequestMethodsInterface } from '@/types/SingerBizApiInterface'
class ViewModelBase {
    _loginBizApi: any
    _singerBizApi: RequestMethodsInterface | undefined

    constructor() {
        // 业务请求类
        this._loginBizApi = bizService.loginBizApi;
        this._singerBizApi = bizService.singerBizApi;
    }
}

export default ViewModelBase;
