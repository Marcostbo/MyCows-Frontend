<template>
    <side-bar></side-bar>
    <v-container>
        <v-row>
            <v-col cols="8" offset="2">
                <h2>Lista de Animais</h2>
                <h5>Pàgina para listar, buscar e editar o gado</h5>
                <v-data-table :items="animalList">
                    <template v-slot:item.actions="{ item }">
                        <v-icon @click="editAnimal(item)">mdi-pencil</v-icon>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import SideBar from '@/components/Sidebar.vue';
import { listAnimals } from '../services/animal.js'

export default {
    data() {
        return {
            animalList: [],
            tableHeaders: [
                {text: 'Nome', value: 'name'},]
        }
    },
    components: {
        SideBar,
    },
    created: async function () {
        const token = localStorage.getItem('Token');
        this.animalList = await listAnimals(token);
    },
    methods: {
        editAnimal(item) {
            console.log('Editing animal:', item);
        },
    },
}
</script>