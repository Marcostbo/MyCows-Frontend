<template>
    <side-bar></side-bar>
    <v-container>
        <v-row>
            <v-col cols="8" offset="2">
                <v-card
                    class="mb-2"
                    width="400"
                    title="Lista de Animais"
                    subtitle="Pàgina para listar, buscar e editar o gado"
                    style="border-left: 4px solid #0277BD;"
                    elevation=0>
                </v-card>
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
                <v-btn class="mt-3" color="light-blue-darken-3" @click="searchAnimal">
                    Buscar
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="8" offset="2">
                <v-data-table :items="animalShow" :headers="tableHeaders" elevation=4>
                    <template v-slot:item.edit="{ item }">
                        <v-icon @click="editAnimal(item)">mdi-pencil</v-icon>
                        <v-icon @click="editAnimal(item)">mdi-delete</v-icon>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="8" offset="2">
                <v-btn density="comfortable" outlined color="light-blue-darken-3" @click="resetAnimalList">
                    Resetar
                </v-btn>
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
            animalShow: [],
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
        this.animalShow = this.animalList;
    },
    methods: {
        editAnimal(item) {
            console.log('Editing animal:', item);
        },
        searchAnimal() {
            console.log(this.animalList);
            this.animalShow = this.animalList.filter(animal => animal.name === this.animalName);
        },
        resetAnimalList() {
            this.animalName = '';
            this.animalShow = this.animalList;
        }
    },
}
</script>