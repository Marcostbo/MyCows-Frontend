<template>
    <v-navigation-drawer color="info">
        <v-list>
            <v-list-item prepend-icon="mdi-account-cowboy-hat" :title="loggedUser.name"
                :subtitle="loggedUser.email">
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-cow" title="Meu Gado" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-file-chart-outline" title="Relatórios" value="starred"></v-list-item>
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
    }
}
</script>