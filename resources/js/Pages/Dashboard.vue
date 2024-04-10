<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import { onMounted } from "vue";
import markerIcon from "../../../node_modules/leaflet/dist/images/marker-icon.png";
import leaflet from "leaflet";

let myMap;
let latlngs = [
    [51.637411, -3.435676],
    [51.634428, -3.175437],
    [51.555088, -3.206336],
    [51.497496, -3.325628],
    [51.55338, -3.533852],
];

leaflet.Marker.prototype.setIcon(
    leaflet.icon({
        iconUrl: markerIcon,
    })
);

onMounted(() => {
    myMap = leaflet.map("map").setView([51.602463, -3.337637], 9);
    leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution:
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(myMap);

    // leaflet
    //     .circle([51.602463, -3.337637], {
    //         color: "blue",
    //         fillColor: "#488bf7",
    //         fillOpacity: 0.5,
    //         radius: 500,
    //     })
    //     .bindTooltip("A beautiful town<br>Great park")
    //     .openTooltip()
    //     .addTo(myMap);

    leaflet
        .polygon(latlngs, { color: "blue" })
        .bindTooltip(
            "A beautiful area, with great walks<br>Wonderful views of the valleys"
        )
        .openTooltip()
        .addTo(myMap);
});
</script>

<template>
    <Head>
        <title>Dashboard</title>
        <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
            crossorigin=""
        />
    </Head>

    <AuthenticatedLayout>
        <template #header>
            <h2
                class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
            >
                Dashboard
            </h2>
        </template>

        <div class="py-4">
            <div
                className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 h-fit w-full"
            >
                <div className="grid grid-cols-3 gap-4">
                    <div
                        className="row-span-1 rounded-md border-2 border-slate-800 border-solid h-[50dvh]"
                    >
                        <div id="map" class="h-full w-full rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
