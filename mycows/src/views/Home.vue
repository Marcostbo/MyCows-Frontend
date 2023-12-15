<template>
    <side-bar></side-bar>
    <v-container>
        <v-row>
            <v-col cols="4" offset="2">
                <v-card class="mb-2" width="400" title="Dashboard"
                    style="border-left: 4px solid #0277BD;"
                    elevation=0>
                </v-card>
                My Home Page <br>
                Usuário logado é {{ loggedUser }}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import { getUser } from '../services/authentication.js';
import SideBar from '@/components/Sidebar.vue';

export default {
    data() {
        return {
            loggedUser: {}
        }
    },
    components: {
        SideBar
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