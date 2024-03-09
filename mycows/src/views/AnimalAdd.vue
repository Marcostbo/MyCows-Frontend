<template>
    <side-bar></side-bar>
    <v-container>
        <v-row dense>
            <v-col cols="8" offset="2">
                <v-card class="mb-2" width="400" title="Novo Animal"
                    subtitle="Pàgina para adicionar novo animal" style="border-left: 4px solid #0277BD;"
                    elevation=0>
                </v-card>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col class="d-flex justify-center align-center" cols="3" offset="2">
                <v-icon color="light-blue-darken-3" icon="mdi-cow" size="100">
                </v-icon>
            </v-col>
            <v-col cols="3">
                <v-text-field rounded variant="solo" label="Nome">
                </v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field rounded variant="solo" label="Origem">
                </v-text-field>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col cols="3" offset="2">
                <v-text-field rounded variant="solo" type="date" label="Nascimento">
                </v-text-field>
            </v-col>
            <v-col cols="3">
                <v-select rounded variant="solo" label="Gênero" :items="['Macho', 'Femea']">
                </v-select>
            </v-col>
            <v-col cols="3">
                <v-select rounded variant="solo" label="Tipo" :items="['Boi', 'Vaca', 'Bezerro', 'Novilha']">
                </v-select>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col cols="3" offset="2">
                <v-text-field rounded variant="solo" label="Características"></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field rounded variant="solo" label="Local"></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-select rounded variant="solo" label="Status" :items="['Vivo', 'Morto', 'Vendido']"></v-select>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col cols="3" offset="2">
                    <v-text-field 
                    rounded variant="solo" 
                    label="Pai" 
                    append-inner-icon="mdi-card-search-outline"
                    @click:append-inner="addFatherDialog = !addFatherDialog"
                >
                </v-text-field>
                <v-text-field 
                    rounded variant="solo" 
                    label="Mãe" 
                    append-inner-icon="mdi-card-search-outline"
                    @click:append-inner="addMotherDialog = !addMotherDialog"
                >
                </v-text-field>
            </v-col>
            <v-col cols="6">
                <v-textarea variant="solo" label="Histórico"></v-textarea>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col cols="2" offset="8">
                <v-btn prepend-icon="mdi-restart" color="red">Limpar</v-btn>
            </v-col>
            <v-col cols="2">
                <v-btn prepend-icon="mdi-plus" color="light-blue-darken-3">Adicionar</v-btn>
            </v-col>
        </v-row>
        <v-dialog v-model="addFatherDialog" width="auto">
            <v-card width="900" height="700">
                <v-card-title>
                    Adicionar Pai
                </v-card-title>
                <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="9">
                            <v-text-field
                                rounded variant="solo"    
                                v-model="animalName"
                                label="Nome"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-btn class="mt-3" color="light-blue-darken-3" @click="getAnimalsbyGender('Macho')">
                                Buscar
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row v-if="animalsOptions">
                        <v-data-table :items="animalsOptions" :headers="tableHeaders">
                            <template v-slot:item.addAnimal="{ item }">
                                <v-icon>mdi-plus</v-icon>
                            </template>
                        </v-data-table>
                    </v-row>
                </v-container>
            </v-card-text>
            </v-card>
        </v-dialog>
        <v-dialog v-model="addMotherDialog" width="auto">
            <v-card width="900" height="700">
                <v-card-title>
                    Adicionar Mãe
                </v-card-title>
                <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="9">
                            <v-text-field
                                rounded variant="solo"    
                                v-model="animalName"
                                label="Nome"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-btn class="mt-3" color="light-blue-darken-3" @click="getAnimalsbyGender('Femea')">
                                Buscar
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row v-if="animalsOptions">
                        <v-data-table :items="animalsOptions" :headers="tableHeaders">
                            <template v-slot:item.addAnimal="{ item }">
                                <v-icon>mdi-plus</v-icon>
                            </template>
                        </v-data-table>
                    </v-row>
                </v-container>
            </v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import SideBar from '@/components/Sidebar.vue';
import { listAnimals } from '../services/animal.js'

export default {
    data() {
        return {
            animal: {},
            animalName: '',
            animalsOptions: [],
            addFatherDialog: false,
            addMotherDialog: false,
            tableHeaders: [
                { title: 'Nome', value: 'name', sortable: false, align: 'center' },
                { title: 'Nascimento', value: 'birth_date', sortable: false, align: 'center' },
                { title: 'Idade', value: 'age', sortable: false, align: 'center' },
                { title: 'Sexo', value: 'animal_sex', sortable: false, align: 'center' },
                { title: 'Tipo', value: 'animal_type', sortable: false, align: 'center' },
                { title: 'Adicionar', value: 'addAnimal', sortable: false, align: 'center' },
            ],
        }
    },
    components: {
        SideBar
    },
    methods:{
        async getAnimalsbyGender(gender) {
            const filters = {
                name: this.animalName
            };
            const token = localStorage.getItem('Token');
            this.animalsOptions = await listAnimals(token, filters);
        }
    }
}


</script>