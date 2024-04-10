<template>
    <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { fontString } from "chart.js/helpers";

ChartJS.register(ArcElement, Tooltip, Legend);
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
    name: "DoughnutChart",
    components: { Doughnut },
    data() {
        return {
            chartData: {
                labels: profit.map((i) => i.year),
                datasets: [
                    {
                        label: "$ Net Profit",
                        data: profit.map((i) => i.count),
                        backgroundColor: [
                            "rgba(210, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
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
