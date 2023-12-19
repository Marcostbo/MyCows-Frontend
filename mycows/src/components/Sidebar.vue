<template>
    <v-navigation-drawer color="light-blue-darken-3">
        <v-list>
            <v-list-item prepend-icon="mdi-account-cowboy-hat" :title="loggedUser.name" :subtitle="loggedUser.email">
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-analytics" title="Home" value="home" @click="routerPage('home')"></v-list-item>
            <v-list-group value="cow">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" prepend-icon="mdi-cow" title="Gado"></v-list-item>
                </template>
                <v-list-item prepend-icon="mdi-format-list-bulleted" title="Lista de Animais" value="cow" @click="routerPage('lista-de-animais')"></v-list-item>
                <v-list-item prepend-icon="mdi-plus" title="Novo Animal" value="cow" @click="routerPage('novo-animal')"></v-list-item>
            </v-list-group>

            <v-list-group value="vaccination">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" prepend-icon="mdi-needle" title="Vacinação"></v-list-item>
                </template>
                <v-list-item prepend-icon="mdi-format-list-bulleted" title="Lista de Vacinas" value="vaccinelist"></v-list-item>
                <v-list-item prepend-icon="mdi-plus" title="Inserir Vacinação" value="newvaccine"></v-list-item>
            </v-list-group>

            <v-list-group value="report">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" prepend-icon="mdi-file-chart-outline" title="Relatórios"></v-list-item>
                </template>
                <v-list-item prepend-icon="mdi-ticket-confirmation" title="IMA" value="ima"></v-list-item>
                <v-list-item prepend-icon="mdi-needle-off" title="Vacinas" value="vaccine"></v-list-item>
                <v-list-item prepend-icon="mdi-poll" title="Financeiro" value="vaccine"></v-list-item>
            </v-list-group>

            <v-divider></v-divider>

            <v-list-item prepend-icon="mdi-cog" title="Configurações" value="config"></v-list-item>
            <v-list-item prepend-icon="mdi-logout" title="Logout" value="logoff" @click="routerPage('login')"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
  
<script>
import { getUser } from '../services/authentication.js';

export default {
    data() {
        return {
            loggedUser: {}
        }
    },
    created: async function () {
        try {
            const token = localStorage.getItem('Token');
            this.loggedUser = await getUser(token);
        } catch (error) {
            this.loggedUser = {};
        }
    },
    methods: {
        routerPage(pageName) {
            this.$router.push(pageName);
        },
        logoff() {
            localStorage.removeItem('Token');
            routerPage('login');
        }
    }
}
</script>