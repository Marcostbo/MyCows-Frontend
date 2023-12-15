<template>
    <div>
        <v-row>
            <v-col>
                <canvas v-if="dataSex" ref="donutChartSex"></canvas>
            </v-col>
            <v-col>
                <canvas v-if="dataType" ref="donutChartType"></canvas>
            </v-col>
        </v-row>
    </div>
</template>
  
<script>
import { Chart, ArcElement, DoughnutController } from 'chart.js';

// Register the DoughnutController
Chart.register(ArcElement, DoughnutController);

export default {
    props: {
        dataSex: Array,
        dataType: Array,
    },
    watch: {
        dataSex: {
            handler: 'renderChartSex',
            immediate: true,
        },
        dataType: {
            handler: 'renderChartType',
            immediate: true,
        },
    },
    methods: {
        renderChartSex() {
            this.$nextTick(() => {
                const ctx = this.$refs.donutChartSex.getContext('2d');
                new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: this.dataSex.map(item => item.type),
                        datasets: [{
                            data: this.dataSex.map(item => item.count),
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                        }],
                    },
                });
            });
        },
        renderChartType() {
            console.log("Rendering chart for type");
            console.log("Data:", this.dataType);

            this.$nextTick(() => {
                const ctx = this.$refs.donutChartType.getContext('2d');
                new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: this.dataType.map(item => item.type),
                        datasets: [{
                            data: this.dataType.map(item => item.count),
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                        }],
                    },
                });
            });
        },
    },
};
</script>
  
<style scoped>
canvas {
    max-width: 100%;
    max-height: 100%;
}
</style>
  