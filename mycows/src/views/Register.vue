<template>
    <div class="d-flex align-center justify-center" style="height: 100vh;  background-color: #0277BD;">
        <v-sheet rounded width="500" height="500" class="mx-auto" color="white" elevation=16>
            <v-form>
                <v-row justify="center" class="mt-8 mb-6">
                    <h2 style="color: #0277BD;">
                        Crie a sua conta
                    </h2>
                </v-row>
                <v-row justify="center" class="mt-4">
                    <v-col cols="9">
                        <v-text-field prepend-inner-icon="mdi-email" variant="solo" rounded v-model="name"
                            :counter="10" label="Nome" required hide-details>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="center" class="mt-4">
                    <v-col cols="9">
                        <v-text-field prepend-inner-icon="mdi-email" variant="solo" rounded v-model="email"
                            :counter="10" label="E-mail" required hide-details>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="center" class="mt-4">
                    <v-col cols="9">
                        <v-text-field prepend-inner-icon="mdi-lock" variant="solo" rounded v-model="password"
                            :type="show1 ? 'text' : 'password'" label="Senha" hint="Pelo menos 8 caracteres"
                            @click:append="show1 = !show1">
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="9">
                        <v-btn type="submit" color="light-blue-darken-3" block @click="createNewUser">Criar
                            Conta</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
import { login } from '../services/authentication.js'
import { createUser } from '../services/usercreation.js'
import logoImg from '../components/icons/logomeugado.png'

export default {
    data() {
        return {
            logoImg: logoImg,
            name: '',
            email: '',
            password: '',
            errorMsg: '',
            registerError: false
        }
    },
    methods: {
        async createNewUser() {
            const [data, status] = await createUser(this.name, this.email, this.password);
            console.log(data);
            console.log(status);
            if (status == 201) {
                const [data, status] = await login(this.username, this.password);
                const token = data.token;
                localStorage.setItem('Token', token);
                this.$router.push('/home');
            }
            else if (status == 202) {
                this.errorMsg = "Usuário com esse e-mail já existe";
                this.registerError = true;
            }
            else {
                this.errorMsg = "Não foi possível completar o cadastro. Tente novamente mais tarde"
                this.registerError = true;
            }
        }
    }
}

</script>