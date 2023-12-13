<template>
    My Home Page <br>
    Usuário logado é {{ loggedUser }}
</template>

<script>

import {getUser} from '../services/authentication.js'

export default {
    data() {
        return {
            loggedUser: {}
        }
    },
    created: async function () {
        try {
            const token = localStorage.getItem('Token');
            this.loggedUser = await getUser(token);    
        } catch(error){
            this.loggedUser = {};
        }
    }
}

</script>