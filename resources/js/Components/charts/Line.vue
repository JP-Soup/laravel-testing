<template>
    <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Line } from "vue-chartjs";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

ChartJS.defaults.color = "#fff";

const profit = [
    { year: 2017, count: 20000 },
    { year: 2018, count: 30000 },
    { year: 2019, count: 40000 },
    { year: 2020, count: 60000 },
    { year: 2021, count: 100000 },
    { year: 2022, count: 180000 },
    { year: 2023, count: 400000 },
];

export default {
    name: "LineChart",
    components: { Line },
    data() {
        return {
            chartData: {
                labels: profit.map((i) => i.year),
                datasets: [
                    {
                        fill: true,
                        label: "£ Net Profit",
                        data: profit.map((i) => i.count),
                        borderColor: "rgb(53, 162, 235)",
                        backgroundColor: "rgba(53, 162, 235, 0.5)",
                    },
                ],
            },
            chartOptions: {
                responsive: true,
            },
        };
    },
};
</script>
