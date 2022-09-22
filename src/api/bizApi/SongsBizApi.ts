// 歌单、歌曲相关api配置
import { recPlaylistInterface, playlistDetailInterface, playlistAllInterface, SongsRequestConfigsInterface } from '@/types/SongsBizApiInterface'

class SongsBizApi {
    // 定义属性
    preUrl: string
    requestConfigs: SongsRequestConfigsInterface | undefined

    constructor() {
        // this.preUrl = '/api';
        this.preUrl = '';
        this.initRequestConfigs();
    }

    initRequestConfigs() {
        const configs: SongsRequestConfigsInterface = {
            // 获取推荐歌单
            getRecPlaylist: (params: recPlaylistInterface) => this._getConfig('/personalized', 'get', params),
            // 获取歌单详情
            getPlaylistDetail: (params: playlistDetailInterface) => this._getConfig('/playlist/detail', 'get', params),
            // 获取歌单所有歌曲
            getPlaylistAll: (params: playlistAllInterface) => this._getConfig('/playlist/track/all', 'get', params),
        };
        this.requestConfigs = configs;
    }

    // 获取所有配置
    getConfigs() {
        return this.requestConfigs || {};
    }

    // 生成请求配置
    _getConfig(url: string, method: string = 'get', params: object = {}, config: object = {}) {
        return {
            url: `${this.preUrl}${url}`,
            method,
            [`${method === 'get' ? 'params' : 'data'}`]: params,
            ...config
        };
    }
}

const songsBizApi = new SongsBizApi();
export default songsBizApi;
