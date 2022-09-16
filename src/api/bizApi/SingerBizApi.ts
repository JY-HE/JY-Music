// 歌手相关api配置
import { SingerCategoryInterface, RequestConfigsInterface } from '@/types/SingerBizApiInterface'

class SingerBizApi {
    // 定义属性
    preUrl: string
    requestConfigs: RequestConfigsInterface | undefined

    constructor() {
        this.preUrl = '/api';
        this.initRequestConfigs();
    }

    initRequestConfigs() {
        const configs: RequestConfigsInterface = {
            // 获取歌手分类列表
            getSingerCategory: (params: SingerCategoryInterface) => this._getConfig('/artist/list/', 'get', params),

        };
        this.requestConfigs = configs;
    }

    // 获取所有配置
    getConfigs() {
        return this.requestConfigs || {};
    }

    // 生成请求配置
    _getConfig(url: string, method: string = 'get', params: object, config: object = {}) {
        return {
            url: `${this.preUrl}${url}`,
            method,
            [`${method === 'get' ? 'params' : 'data'}`]: params,
            ...config
        };
    }
}

const singerBizApi = new SingerBizApi();
export default singerBizApi;
