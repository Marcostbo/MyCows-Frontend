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
        <v-row>
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
        <v-row>
            <v-col cols="3" offset="2">
                <v-text-field rounded variant="solo" label="Características"></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field rounded variant="solo" label="Local"></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field rounded variant="solo" label="Status"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3" offset="2">
                <v-text-field rounded variant="solo" label="Pai"></v-text-field>
                <v-text-field rounded variant="solo" label="Mãe"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-textarea variant="solo" label="Histórico"></v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="2" offset="8">
                <v-btn prepend-icon="mdi-restart" color="red">Limpar</v-btn>
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