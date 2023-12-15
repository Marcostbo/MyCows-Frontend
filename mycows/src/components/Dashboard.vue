<template>
    <div>
        <v-row>
            <v-col cols="6">
                <v-card title="Gado por gênero" prepend-icon="mdi-gender-male-female">
                    <canvas v-if="dataSex" ref="donutChartSex"></canvas>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card title="Gado por tipo" prepend-icon="mdi-alpha-t-box">
                    <canvas v-if="dataType" ref="donutChartType"></canvas>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
  
<script>
import { Chart, ArcElement, DoughnutController, Legend, Tooltip } from 'chart.js';

// Register the DoughnutController
Chart.register(ArcElement, DoughnutController, Legend);

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
                    options: {
                        plugins: {
                            legend: {
                                display: true,
                                position: 'bottom',
                            },
                            // tooltip: {
                            //     callbacks: {
                            //         label: (tooltipItem, data) => {
                            //             const dataset = data.datasets[tooltipItem.datasetIndex];
                            //             const currentValue = dataset.data[tooltipItem.index];
                            //             return ` ${currentValue} animals`;
                            //         },
                            //     },
                            // }
                        }
                    }
                });
                Chart.register(Tooltip);
            });
        },
        renderChartType() {
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
                    options: {
                        plugins: {
                            legend: {
                                display: true,
                                position: 'bottom',
                            },
                            tooltip: {
                                callbacks: {
                                    label: (tooltipItem, data) => {
                                        const dataset = data.datasets[tooltipItem.datasetIndex];
                                        const currentValue = dataset.data[tooltipItem.index];
                                        return ` ${currentValue} animals`;
                                    },
                                },
                            }
                        }
                    }
                });
                Chart.register(Tooltip);
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
  