import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Routes from './routes';


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/index',
    },
    ...Routes
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;