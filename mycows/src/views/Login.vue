<template>
    <v-container fluid class="py-0 px-0" fill-height>
        <v-card color="info" class="custom-card">
            <v-form v-model="valid">
                <v-card class="mx-auto mt-5" max-width="400" color="white">
                    <h2 class="text-center mt-6">
                        Cadastro
                    </h2>
                    <v-row justify="center">
                        <v-col cols="12" class="mt-6" md="8">
                            <v-text-field v-model="username" :rules="nameRules" :counter="10" label="Usuário" required
                                hide-details></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" md="8">
                            <v-text-field v-model="password" :type="show1 ? 'text' : 'password'" name="input-10-1"
                                label="Senha" hint="Pelo menos 8 caracteres" @click:append="show1 = !show1">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" class="ml-6">
                            <v-checkbox label="Permanecer conectado"></v-checkbox>
                        </v-col>
                        <v-col cols="2" class="ml-2">
                            <v-btn color="info">
                                Login
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>

export default {
    data() {
        return {
            username: '',
            password: '',
            email: ''
        };
    }
}
</script>

<style scoped>
.custom-card {
    border-radius: 0;
}
</style>