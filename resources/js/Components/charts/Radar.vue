<template>
    <Radar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Radar } from "vue-chartjs";
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    RadialLinearScale,
    PointElement,
    LineElement,
} from "chart.js";

ChartJS.register(Tooltip, Legend, RadialLinearScale, PointElement, LineElement);
ChartJS.defaults.color = "#fff";

const lifestyle = [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
];

export default {
    name: "RadarChart",
    components: { Radar },
    data() {
        return {
            chartData: {
                labels: lifestyle.map((i) => i),
                datasets: [
                    {
                        label: "Week 1",
                        data: [65, 59, 90, 81, 56, 55, 40],
                        fill: true,
                        backgroundColor: "rgb(247, 49, 165, 0.4)",
                        borderColor: "rgb(247, 49, 165, 0.5)",
                        pointBackgroundColor: "#fff",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "#fff",
                    },
                    {
                        label: "Week 2",
                        data: [28, 48, 40, 19, 96, 27, 100],
                        fill: true,
                        backgroundColor: "rgba(54, 162, 235, 0.2)",
                        borderColor: "rgb(54, 162, 235)",
                        pointBackgroundColor: "#fff",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "#fff",
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                scales: {
                    r: {
                        ticks: {
                            callback: function (value, index, ticks) {
                                return null;
                            },
                        },
                    },
                },
            },
        };
    },
};
</script>
