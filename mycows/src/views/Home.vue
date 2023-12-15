<template>
    <side-bar></side-bar>
    <v-container>
        <v-row>
            <v-col cols="4" offset="2">
                <v-card class="mb-2" width="400" title="Dashboard" style="border-left: 4px solid #0277BD;" elevation=0>
                </v-card>

                <dashboard v-if="dashboardData" :dataSex="dashboardData.animals_by_sex"
                    :dataType="dashboardData.animals_by_type">
                </dashboard>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import { getUser } from '../services/authentication.js';
import { dashboard } from '@/services/animal.js';
import SideBar from '@/components/Sidebar.vue';
import Dashboard from '@/components/Dashboard.vue';

export default {
    data() {
        return {
            loggedUser: {},
            dashboardData: {}
        }
    },
    components: {
        SideBar,
        Dashboard
    },
    created: async function () {
        const token = localStorage.getItem('Token');
        try {
            this.loggedUser = await getUser(token);
        } catch (error) {
            this.loggedUser = {};
        };
        try {
            this.dashboardData = await dashboard(token);
            this.dashboardData.animals_by_sex = this.dashboardData.animals_by_sex.map(item => {
                if (item.type === 'Female') {
                    item.type = 'Fêmea';
                } else if (item.type === 'Male') {
                    item.type = 'Macho';
                }
                return item;
            });
            this.dashboardData.animals_by_type = this.dashboardData.animals_by_type.map(item => {
                if (item.type === 'Bull') {
                    item.type = 'Boi';
                } else if (item.type === 'Calf') {
                    item.type = 'Bezerro';
                } else if (item.type === 'Cow') {
                    item.type = 'Vaca';
                } else if (item.type === 'Cattle') {
                    item.type = 'Novilha';
                }
                return item;
            });
        } catch (error) {
            this.dashboardData = {};
        }
    }
}
</script>