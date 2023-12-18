<template>
    <v-dialog v-model="showDialog" width="auto">
        <v-card width="600" height="350">
            <v-card-title>
                Editar {{ originalAnimal.name }}
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-text-field
                                v-model="animalEdited.name"
                                label="Nome"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                                v-model="animalEdited.birth_date"
                                label="Nascimento"
                                >
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                                v-model="animalEdited.origin"
                                label="Origem"
                                >
                            </v-text-field>
                        </v-col>
                        <v-col>
                            <v-select
                                v-model="animalEdited.animal_sex"
                                :items="['Macho', 'Fêmea']"
                                label="Gênero"
                            >
                            </v-select>
                        </v-col>
                        <v-col>
                            <v-select
                                v-model="animalEdited.animal_type"
                                :items="['Boi', 'Vaca', 'Bezerro', 'Novilha']"
                                label="Tipo"
                            >
                            </v-select>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-row>
                    <v-col>
                        <v-btn color="info" block @click="resetChanges">
                            Reset
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn color="red" block @click="closeDialog">
                            Fechar
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn color="success" block @click="saveChanges">
                            Salvar
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>

import { updateAnimal } from '../services/animal.js'

export default {
    props: {
        animal: {},
        editAnimal: false,
        closeHandler: Function,
    },
    data() {
        return {
            showDialog: false,
            updated: false,
            animalEdited: {},
            originalAnimal: {}
        }
    },
    watch: {
        editAnimal(newVal){
            this.showDialog = newVal;
            this.animalEdited = { ...this.animal };
            this.originalAnimal = { ...this.animal };
        }
    },
    methods: {
        closeDialog() {
            this.showDialog = false;
            this.closeHandler(this.updated);
        },
        resetChanges(){
            this.animalEdited = { ...this.originalAnimal };
        },
        saveChanges() {
            const changedFields = Object.keys(this.animalEdited).filter(
                key => this.animalEdited[key] !== this.originalAnimal[key]
            );
            if (changedFields.length >= 1) {
                this.updated = true;
                const token = localStorage.getItem('Token');
                updateAnimal(token, this.animalEdited, changedFields);
            }
            this.closeDialog();
        }
    } 
}

</script>