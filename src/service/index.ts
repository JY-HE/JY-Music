import { apiInitializer } from '@/api/init';
import { SingerRequestMethodsInterface } from '@/types/SingerBizApiInterface'
import { SearchRequestMethodsInterface } from '@/types/SearchBizApiInterface'
import { SongsRequestMethodsInterface } from '@/types/SongsBizApiInterface'

interface BizApiService {
    init: () => (void)
    setBizModule: () => (void)
    loginBizApi: any
    singerBizApi: SingerRequestMethodsInterface | undefined
    searchBizApi: SearchRequestMethodsInterface | undefined
    songsBizApi: SongsRequestMethodsInterface | undefined
}

class BizService implements BizApiService {
    loginBizApi: any
    singerBizApi: SingerRequestMethodsInterface | undefined
    searchBizApi: SearchRequestMethodsInterface | undefined
    songsBizApi: SongsRequestMethodsInterface | undefined

    /**
    * 初始化服务层
    * @param {string} token 用户token
    * @param {Object} config config.json配置
    */
    init() {
        // 业务api初始化，构建各个业务api
        apiInitializer.init({ token: '', config: {} });

        // 业务库biz模块挂载
        this.setBizModule()
    }

    // biz模块设置
    setBizModule() {
        // 登录相关
        this.loginBizApi = apiInitializer.loginBizApi;
        // 歌手相关
        this.singerBizApi = apiInitializer.singerBizApi;
        // 搜索相关
        this.searchBizApi = apiInitializer.searchBizApi;
        // 歌单、歌曲相关
        this.songsBizApi = apiInitializer.songsBizApi;
    }
}

const bizService = new BizService();

export default bizService;