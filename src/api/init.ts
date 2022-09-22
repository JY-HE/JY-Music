/* eslint-disable no-underscore-dangle */
// 各业务API初始化
import axios from './axios';
import loginBizApi from './bizApi/LoginBizApi';
import singerBizApi from './bizApi/SingerBizApi';
import searchBizApi from './bizApi/SearchBizApi';
import songsBizApi from './bizApi/SongsBizApi';
import { SingerRequestMethodsInterface } from '@/types/SingerBizApiInterface'
import { SearchRequestMethodsInterface } from '@/types/SearchBizApiInterface'
import { SongsRequestMethodsInterface } from '@/types/SongsBizApiInterface'
import type { AxiosRequestConfig, AxiosInstance } from "axios"


class ApiInitializer {
    _ApiModules: Array<string>
    axios: AxiosInstance
    loginBizApi: any
    singerBizApi: SingerRequestMethodsInterface | undefined
    searchBizApi: SearchRequestMethodsInterface | undefined
    songsBizApi: SongsRequestMethodsInterface | undefined

    constructor() {
        this._ApiModules = [
            'loginBizApi',
        ];
        this.axios = axios;
    }



    // 初始化，设置axios请求头，将内置的请求配置转为请求方法
    init({ token = '', config = {} }: { token: string, config: AxiosRequestConfig<any> }) {
        this.loginBizApi = this.decoratorApi(loginBizApi.requestConfigs);
        this.singerBizApi = this.decoratorApi(singerBizApi.requestConfigs);
        this.searchBizApi = this.decoratorApi(searchBizApi.requestConfigs);
        this.songsBizApi = this.decoratorApi(songsBizApi.requestConfigs);
    }

    // 初始化api，将api的config转为request
    decoratorApi(configs: any) {
        console.debug("Rd ~ file: init.ts ~ line 37 ~ ApiInitializer ~ decoratorApi ~ configs", configs)
        const configsType: string = Object.prototype.toString.call(configs);
        const methods: any = {}

        const addMethods = (obj: any) => {
            (Object.keys(obj) as Array<keyof typeof obj>).forEach((key) => {
                methods[key] = (params: any, config: AxiosRequestConfig<any>) => this.axios({ ...obj[key](params), ...config });
            });
        };

        switch (configsType) {
            case '[object Object]':
                addMethods(configs);
                break;
            case '[object Map]':
                [...configs.keys()].forEach(moduleName => addMethods(configs.get(moduleName)));
                break;
            case '[object Array]':
                configs.forEach((item: any) => addMethods(item));
                break;
            default:
                break;
        }
        return methods;
    }
}

export const apiInitializer = new ApiInitializer();
