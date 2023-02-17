import { createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    { 
        path: '/', 
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */ '../pages/Home.vue')
    },
    { 
        path: '/admin', 
        name: 'admin',
        component: () => import(/* webpackChunkName: "Admin" */ '../pages/Admin.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router