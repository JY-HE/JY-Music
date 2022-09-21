// 搜索相关api配置
import { SearchInterface, SongUrlInterface, SearchRequestConfigsInterface } from '@/types/SearchBizApiInterface'

class SearchBizApi {
    // 定义属性
    preUrl: string
    requestConfigs: SearchRequestConfigsInterface | undefined

    constructor() {
        // this.preUrl = '/api';
        this.preUrl = '';
        this.initRequestConfigs();
    }

    initRequestConfigs() {
        const configs: SearchRequestConfigsInterface = {
            // 关键词搜索
            keywordSearch: (params: SearchInterface) => this._getConfig('/cloudsearch', 'get', params),
            // 获取歌曲url播放地址
            getSongUrl: (params: SongUrlInterface) => this._getConfig('/song/url', 'get', params),
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

const searchBizApi = new SearchBizApi();
export default searchBizApi;
