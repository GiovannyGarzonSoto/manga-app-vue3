import { createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    { 
        path: '/', 
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */ '../pages/Home.vue')
    },
    // { 
    //     path: '/admin', 
    //     name: 'admin',
    //     component: () => import(/* webpackChunkName: "Admin" */ '../pages/Admin.vue')
    // },
    // { 
    //     path: '/manga-list', 
    //     name: 'manga-list',
    //     component: () => import(/* webpackChunkName: "MangaList" */ '../pages/MangaList.vue')
    // },
    { 
        path: '/search-results', 
        name: 'search-results',
        component: () => import(/* webpackChunkName: "SearchResults" */ '../pages/SearchResults.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router