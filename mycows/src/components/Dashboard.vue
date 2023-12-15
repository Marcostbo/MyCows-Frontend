<template>
    <div>
        <v-row>
            <v-col cols="6">
                <v-card title="Gado por gênero" prepend-icon="mdi-gender-male-female">
                    <donut v-if="dataSex" :dataDonut="dataSex"></donut>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card title="Gado por tipo" prepend-icon="mdi-alpha-t-box">
                    <donut v-if="dataType" :dataDonut="dataType"></donut>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
  
<script>
import Donut from '@/components/Donut.vue';

export default {
    props: {
        dataSex: Array,
        dataType: Array,
    },
    components: {
        Donut
    }
};
</script>