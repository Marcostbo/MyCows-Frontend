<template>
    <canvas v-if="dataDonut" ref="donutChart"></canvas>
</template>

<script>
import { Chart, ArcElement, DoughnutController, Legend, Tooltip } from 'chart.js';

// Register the DoughnutController
Chart.register(ArcElement, DoughnutController, Legend);

export default {
    props: {
        dataDonut: Array,
    },
    watch: {
        dataDonut: {
            handler: 'renderDonut',
            immediate: true,
        }
    },
    methods: {
        renderDonut() {
            this.$nextTick(() => {
                const ctx = this.$refs.donutChart.getContext('2d');
                new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: this.dataDonut.map(item => item.type),
                        datasets: [{
                            data: this.dataDonut.map(item => item.count),
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#7FFFD4'],
                            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#7FFFD4'],
                            hoverOffset: 4
                        }],
                    },
                    options: {
                        plugins: {
                            legend: {
                                display: true,
                                position: 'bottom',
                            },
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