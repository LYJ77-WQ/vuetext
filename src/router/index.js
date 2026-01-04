import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '../views/home.vue'
import New from '../views/new.vue'
import Geleizujian from '../views'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/new',
        name: 'New',
        component: New,
    },
    {
        path: '/geleizujian',
        name: 'Geleizujian',
        component: Geleizujian,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router