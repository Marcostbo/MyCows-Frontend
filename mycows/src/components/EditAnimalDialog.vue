<template>
    <v-dialog v-model="showDialog" width="auto">
        <v-card>
            <v-card-text>
                {{ animal }}
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" block @click="closeDialog">
                    Close Dialog
                </v-btn>
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
            // console.log(newVal);
            // if (newVal){
            //     this.showDialog = true;
            // }
        }
    },
    methods: {
        closeDialog() {
            this.showDialog = false;
            this.closeHandler();
        }
    } 
}

</script>