<template>
    <v-dialog v-model="showDialog" width="auto">
        <v-card width="600" height="350">
            <v-card-title>
                Editar {{ animal.name }}
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-text-field
                                v-model="animal.name"
                                label="Nome"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                                v-model="animal.birth_date"
                                label="Nascimento"
                                >
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                                v-model="animal.origin"
                                label="Origem"
                                >
                            </v-text-field>
                        </v-col>
                        <v-col>
                            <v-select
                                v-model="animal.animal_sex"
                                :items="['Macho', 'Fêmea']"
                                label="Gênero"
                            >
                            </v-select>
                        </v-col>
                        <v-col>
                            <v-select
                                v-model="animal.animal_type"
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

export default {
    props: {
        animal: {},
        editAnimal: false,
        closeHandler: Function,
    },
    data() {
        return {
            showDialog: false
        }
    },
    watch: {
        editAnimal(newVal){
            this.showDialog = newVal;
        }
    },
    methods: {
        closeDialog() {
            this.showDialog = false;
            this.closeHandler();
        },
        saveChanges() {
            this.closeDialog();
        }
    } 
}

</script>