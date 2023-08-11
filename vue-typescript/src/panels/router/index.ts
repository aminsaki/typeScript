import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '@/panels/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/panel/home',
        name: 'panel',
        component: HomeView
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
