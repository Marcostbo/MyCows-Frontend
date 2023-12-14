<template>
    <side-bar></side-bar>
    <v-container>
        <v-row>
            <v-col cols="8" offset="2">
                <h2>Lista de Animais</h2>
                <h5>Pàgina para listar, buscar e editar o gado</h5>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4" offset="2">
                <v-text-field
                variant="solo"
                v-model="animalName" 
                label="Nome"
                filled 
                rounded
                append-inner-icon="mdi-magnify">
                </v-text-field>
            </v-col>
            <v-col cols="2">
                <v-btn color="info">
                    Buscar
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="8" offset="2">
                <v-data-table :items="animalList" :headers="tableHeaders">
                    <template v-slot:item.edit="{ item }">
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
            animalName: '',
            tableHeaders: [
                {title: 'Nome', value: 'name', sortable: true},
                {title: 'Nascimento', value: 'birth_date', sortable: true},
                {title: 'Sexo', value: 'animal_sex', sortable: true},
                {title: 'Tipo', value: 'animal_type', sortable: true},
                {title: 'Origem', value: 'origin', sortable: true},
                {title: 'Editar', value: 'edit', sortable: false},
            ]
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