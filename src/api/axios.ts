import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create({
    timeout: 1000 * 30,
});

// Request interceptors
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
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
        // do something
        return response.data
    },
    (error: any) => {
        // do something
        return Promise.reject(error);
    }
);

export default service;