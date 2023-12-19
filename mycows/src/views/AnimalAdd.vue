<template>
    <side-bar></side-bar>
    <v-container>
        <v-row>
            <v-col cols="8" offset="2">
                <v-card class="mb-2" width="400" title="Novo Animal"
                    subtitle="Pàgina para adicionar novo animal" style="border-left: 4px solid #0277BD;"
                    elevation=0>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3" offset="2">
                <v-text-field label="Nome">
                </v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field label="Origem">
                </v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field label="Nascimento">
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3" offset="2">
                <v-text-field label="Nome">
                </v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field label="Origem">
                </v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field label="Nascimento">
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="2" offset="8">
                <v-btn prepend-icon="mdi-restart" color="red">Reset</v-btn>
            </v-col>
            <v-col cols="2">
                <v-btn prepend-icon="mdi-plus" color="light-blue-darken-3">Adicionar</v-btn>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
import SideBar from '@/components/Sidebar.vue';

export default {
    data() {
        return {
            animal: {}
        }
    },
    components: {
        SideBar
    }
}


</script>