// 业务API基类
import { apiInitializer } from '@/api/init';
import { RequestMethodsInterface } from '@/types/SingerBizApiInterface'


interface BizApiService {
    _loginBizApi: any
    _singerBizApi: RequestMethodsInterface | undefined
}

class ViewModelBase implements BizApiService {
    _loginBizApi: any
    _singerBizApi: RequestMethodsInterface | undefined

    constructor() {
        // 业务请求类
        this._loginBizApi = apiInitializer.loginBizApi;
        this._singerBizApi = apiInitializer.singerBizApi;
    }
}

export default ViewModelBase;
