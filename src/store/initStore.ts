import { defineStore } from 'pinia'

export const InitStore = defineStore({
    id: 'init', // id必填，且需要唯一
    state: () => {
        return {
            config: {},
        }
    },
    actions: {
        setConfig(payload: object) {
            this.config = payload
        }
    }
})