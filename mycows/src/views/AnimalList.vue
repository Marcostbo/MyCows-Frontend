<template>
    <side-bar></side-bar>
    <v-container>
        <v-row>
            <v-col cols="8" offset="2">
                <v-card class="mb-2" width="400" title="Lista de Animais"
                    subtitle="Pàgina para listar, buscar e editar o gado" style="border-left: 4px solid #0277BD;"
                    elevation=0>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4" offset="2">
                <v-text-field variant="solo" v-model="animalName" label="Nome" filled rounded
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
                    <template v-slot:item.detail="{ item }">
                        <v-icon @click="showDetailAnimalDialog(item)">mdi-plus-box-multiple-outline</v-icon>
                    </template>
                    <template v-slot:item.edit="{ item }">
                        <v-icon @click="showEditAnimalDialog(item)">mdi-pencil</v-icon>
                        <v-icon @click="showDetailAnimalDialog(item)">mdi-delete</v-icon>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="2" offset="9">
                <v-btn density="comfortable" outlined color="light-blue-darken-3" @click="resetAnimalList">
                    Reset
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
    <edit-animal-dialog
        :animal="animalDialog"
        :editAnimal="editAnimal" 
        :closeHandler="closeEditAnimalDialog">
    </edit-animal-dialog>
</template>

<script>
import SideBar from '@/components/Sidebar.vue';
import EditAnimalDialog from '@/components/EditAnimalDialog.vue';
import { listAnimals } from '../services/animal.js'

export default {
    data() {
        return {
            animalList: [],
            animalShow: [],
            animalName: '',
            animalDialog: {},
            tableHeaders: [
                { title: 'Nome', value: 'name', sortable: false, align: 'center' },
                { title: 'Nascimento', value: 'birth_date', sortable: false, align: 'center' },
                { title: 'Idade', value: 'age', sortable: false, align: 'center' },
                { title: 'Sexo', value: 'animal_sex', sortable: false, align: 'center' },
                { title: 'Tipo', value: 'animal_type', sortable: false, align: 'center' },
                { title: 'Origem', value: 'origin', sortable: false, align: 'center' },
                { title: 'Detalhes', value: 'detail', sortable: false, align: 'center' },
                { title: 'Editar', value: 'edit', sortable: false, align: 'center' },
            ],
            editAnimal: false,
            deleteAnimal: false,
            detailtAnimal: false
        }
    },
    components: {
        SideBar,
        EditAnimalDialog
    },
    created: async function () {
        const token = localStorage.getItem('Token');
        this.animalList = await listAnimals(token);
        this.animalShow = this.animalList;
    },
    methods: {
        // Edit Animal handlers
        showEditAnimalDialog(item) {
            this.animalDialog = item;
            this.editAnimal = true;
        },
        closeEditAnimalDialog() {
            this.editAnimal = false;
        },
        // Detail Animal handlers
        showDetailAnimalDialog(item) {
            this.detailtAnimal = true;
        },
        closeDetailAnimalDialog(item) {
            this.detailtAnimal = false;
        },
        // Delete Animal handlers
        showDeleteAnimalDialog(item) {
            this.deleteAnimal = true;
        },
        closeDeleteAnimalDialog(item) {
            this.deleteAnimal = false;
        },
        // Animal query
        searchAnimal() {
            this.animalShow = this.animalList.filter(animal => animal.name === this.animalName);
        },
        resetAnimalList() {
            this.animalName = '';
            this.animalShow = this.animalList;
        }
    },
}
</script>