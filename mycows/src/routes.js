import {createRouter, createWebHashHistory} from 'vue-router';

import Home from './views/Home.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import AnimalList from './views/AnimalList.vue';
import AnimalAdd from './views/AnimalAdd.vue';

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
            path: '/cadastro',
            component: Register
        },
        {
            path: '/lista-de-animais',
            component: AnimalList
        },
        {
            path: '/novo-animal',
            component: AnimalAdd
        }
    ]
});

export default router;