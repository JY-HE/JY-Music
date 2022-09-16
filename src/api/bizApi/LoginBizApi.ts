// 用户登录api
// prettier-ignore
interface ILogin {
    phone: string
    password: string

}
class LoginBizApi {
    // 定义属性
    preUrl: string
    requestConfigs: any

    constructor() {
        this.preUrl = '/api';
        this.requestConfigs = {}
        this.initRequestConfigs();
    }

    initRequestConfigs() {
        const configs = {
            getLogin: (params: ILogin) => this._getConfig<ILogin>('/login/cellphone', 'get', params),

        };
        this.requestConfigs = configs;
    }

    // 获取所有配置
    getConfigs() {
        return this.requestConfigs || {};
    }

    // 生成请求配置
    _getConfig<T>(url: string, method = 'get', params: T, config: object = {}) {
        return {
            url: `${this.preUrl}${url}`,
            method,
            [`${method === 'get' ? 'params' : 'data'}`]: params,
            ...config
        };
    }
}

const loginBizApi = new LoginBizApi();
export default loginBizApi;
