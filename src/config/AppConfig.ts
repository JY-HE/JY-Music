// 全局配置
class AppConfig {
    config: any

    async init() {
        try {
            this.config = await this.request('/config.json');
        } catch (err) {
            console.error('AppConfig ~ init ~ err', err);
        }
    }

    request(url: string) {
        return fetch(url, {
            method: 'get',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            },
        })
            .then(res => res.json())
            .then(data => {
                return data;
            })
            .catch(err => {
                console.error(`AppConfig fetch failed:`, err);
                return null;
            });
    }
}
const appConfig = new AppConfig()

export default appConfig;
