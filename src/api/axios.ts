import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create({
    timeout: 1000 * 30,
});

// Request interceptors
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        console.log("Rd ~ file: axios.ts ~ line 10 ~ config", config)
        // do something
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    }
);

// Response interceptors
service.interceptors.response.use(
    async (response: AxiosResponse) => {
        console.log("Rd ~ file: axios.ts ~ line 21 ~ response", response)
        // do something
        return response.data
    },
    (error: any) => {
        // do something
        return Promise.reject(error);
    }
);

export default service;