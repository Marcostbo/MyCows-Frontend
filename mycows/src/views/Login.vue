<template>
    <div class="d-flex align-center justify-center" style="height: 100vh;  background-color: #2196F3;">
        <v-sheet rounded width="500" height="450" class="mx-auto" color="white">
            <v-form v-model="valid">
                <h2 class="text-center mt-6">
                    Cadastro
                </h2>
                <v-row justify="center">
                    <v-col cols="9">
                        <v-text-field v-model="username" :rules="nameRules" :counter="10" label="Usuário" required
                            hide-details>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="9">
                        <v-text-field v-model="password" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Senha"
                            hint="Pelo menos 8 caracteres" @click:append="show1 = !show1">
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="9">
                        <a href="#" class="text-body-2 font-weight-regular">Esqueceu a senha?</a>
                    </v-col>
                    <v-col cols="9">
                        <v-btn type="submit" color="info" block>Login</v-btn>
                    </v-col>
                    <v-col cols="9">
                        <a href="#" class="text-body-2 font-weight-regular">Não tem conta? Cadastre-se</a>
                    </v-col>
                </v-row>
            </v-form>
        </v-sheet>
    </div>
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