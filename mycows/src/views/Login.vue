<template>
    <div class="d-flex align-center justify-center" style="height: 100vh;  background-color: #0277BD;">
        <v-sheet rounded width="500" height="450" class="mx-auto" color="white" elevation=16>
            <v-form>
                <v-row justify="center" class="mt-8 mb-6">
                    <img :src="logoImg" alt="">
                </v-row>
                <v-row justify="center" class="mt-6">
                    <v-col cols="9">
                        <v-text-field prepend-inner-icon="mdi-email" variant="solo" rounded v-model="username" :counter="10" label="E-mail" required
                            hide-details>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="9">
                        <v-text-field prepend-inner-icon="mdi-lock" variant="solo" rounded v-model="password" :type="show1 ? 'text' : 'password'" label="Senha"
                            hint="Pelo menos 8 caracteres" @click:append="show1 = !show1">
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="9">
                        <v-btn type="submit" color="light-blue-darken-3" block @click="userLogin">Login</v-btn>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="4">
                        <a href="#" class="custom-link text-body-2 font-weight-regular">Esqueceu a senha?</a>
                    </v-col>
                    <v-col cols="5">
                        <router-link to="/cadastro" class="custom-link text-body-2 font-weight-regular">Não tem conta? Cadastre-se</router-link>
                    </v-col>
                </v-row>
            </v-form>
        </v-sheet>
        <v-snackbar v-model="loginError" :color="loginErrorColor" rounded="pill">
          {{ errorMsg }}
          <template v-slot:actions>
            <v-btn @click="loginError = false">
                Fechar
            </v-btn>
          </template>
        </v-snackbar>
    </div>
</template>

<script>

import {login} from '../services/authentication.js'
import logoImg from '../components/icons/logomeugado.png'
import logoImg2 from '../components/icons/logomeugado2.png'

export default {
    data() {
        return {
            username: '',
            password: '',
            show1: false,
            loginError: false,
            errorMsg: '',
            loginErrorColor: 'red',
            logoImg: logoImg
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
.custom-link{
    color: #0277BD;
    text-decoration: none;
}
</style>