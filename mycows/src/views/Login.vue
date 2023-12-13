<template>
    <div class="d-flex align-center justify-center" style="height: 100vh;  background-color: #2196F3;">
        <v-sheet rounded width="500" height="450" class="mx-auto" color="white">
            <v-form>
                <h2 class="text-center mt-6">
                    Cadastro
                </h2>
                <v-row justify="center" class="mt-6">
                    <v-col cols="9">
                        <v-text-field v-model="username" :counter="10" label="E-mail" required
                            hide-details>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="9">
                        <v-text-field v-model="password" :type="show1 ? 'text' : 'password'" label="Senha"
                            hint="Pelo menos 8 caracteres" @click:append="show1 = !show1">
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="9">
                        <v-btn type="submit" color="info" block @click="userLogin">Login</v-btn>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="4">
                        <a href="#" class="text-body-2 font-weight-regular">Esqueceu a senha?</a>
                    </v-col>
                    <v-col cols="5">
                        <a href="#" class="text-body-2 font-weight-regular">Não tem conta? Cadastre-se</a>
                    </v-col>
                </v-row>
            </v-form>
        </v-sheet>
        <v-snackbar v-model="loginError" :color="loginErrorColor">
          {{ errorMsg }}
          <template v-slot:actions>
            <v-btn color="white" @click="loginError = false">
                Fechar
            </v-btn>
          </template>
        </v-snackbar>
    </div>
</template>

<script>

import {login} from '../services/authentication.js'

export default {
    data() {
        return {
            username: '',
            password: '',
            show1: false,
            loginError: false,
            errorMsg: '',
            loginErrorColor: 'red'
        };
    },
    methods: {
        async userLogin() {
            const [data, status] = await login(this.username, this.password);
            console.log(status);
            if (status == 200) {
                const token = data.token;
                localStorage.setItem('Token', token);
                this.$router.push('/home');
            }
            else if (status == 403) {
                this.loginError = true;
                this.errorMsg = 'Usuário ou senha incorretos';
            }
            else {
                this.loginError = true;
                this.errorMsg = 'Erro ao realizar login. Tente novamente mais tarde';
            }
        }
    }
}
</script>

<style scoped>
.custom-card {
    border-radius: 0;
}
</style>