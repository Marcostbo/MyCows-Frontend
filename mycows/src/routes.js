import {createRouter, createWebHashHistory} from 'vue-router';

import Home from './views/Home.vue';
import Login from './views/Login.vue';
import AnimalList from './views/AnimalList.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/lista-de-animais',
            component: AnimalList
        }
    ]
});

export default router;