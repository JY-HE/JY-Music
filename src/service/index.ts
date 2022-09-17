import { apiInitializer } from '@/api/init';
import { RequestMethodsInterface } from '@/types/SingerBizApiInterface'

interface BizApiService {
    init: () => (void)
    setBizModule: () => (void)
    loginBizApi: any
    singerBizApi: RequestMethodsInterface | undefined
}

class BizService implements BizApiService {
    loginBizApi: any
    singerBizApi: RequestMethodsInterface | undefined

    /**
    * 初始化服务层
    * @param {string} token 用户token
    * @param {Object} config config.json配置
    */
    async init() {
        // 业务api初始化，构建各个业务api
        await apiInitializer.init({ token: '', config: {} });

        // 业务库biz模块挂载
        this.setBizModule()
    }

    // biz模块设置
    setBizModule() {
        // 登录相关
        this.loginBizApi = apiInitializer.loginBizApi;
        // 歌手相关
        this.singerBizApi = apiInitializer.singerBizApi;
    }
}

const bizService = new BizService();

export default bizService;