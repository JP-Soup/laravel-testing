<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import { onMounted } from "vue";
import markerIcon from "../../../node_modules/leaflet/dist/images/marker-icon.png";
import leaflet from "leaflet";
import Line from "@/Components/charts/Line.vue";
import Radar from "@/Components/charts/Radar.vue";
import Doughnut from "@/Components/charts/Doughnut.vue";
import Checkbox from "primevue/checkbox";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import { ref } from "vue";
import Dropdown from "primevue/dropdown";

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

const pizza = ref();

const selectedCity = ref();
const cities = ref([
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
]);
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
                    <!-- First Column -->
                    <div
                        className="rounded-md border-2 border-slate-800 border-solid h-full"
                    >
                        <div id="map" class="h-full w-full rounded-md"></div>
                    </div>
                    <!-- Second Column -->
                    <div className="grid grid-flow-row auto-rows-max gap-4">
                        <div
                            className="row-span-1 flex items-center justify-center bg-transparent rounded-md border-2 border-slate-800 border-solid px-2 h-[30dvh]"
                        >
                            <Line />
                        </div>
                        <div
                            className="row-span-1 flex items-center justify-center bg-transparent rounded-md border-2 border-slate-800 border-solid p-2 h-[60dvh]"
                        >
                            <Radar />
                        </div>
                        <div
                            className="row-span-1 flex items-center justify-center bg-transparent rounded-md border-2 border-slate-800 border-solid p-2 h-[60dvh]"
                        >
                            <Doughnut />
                        </div>
                    </div>
                    <!-- Third Column -->
                    <div className="grid grid-flow-row auto-rows-max gap-4">
                        <!-- Checkbox -->
                        <div
                            class="card flex flex-wrap justify-center gap-3 text-white"
                        >
                            <div class="flex items-center">
                                <Checkbox
                                    v-model="pizza"
                                    inputId="ingredient1"
                                    name="pizza"
                                    value="Cheese"
                                />
                                <label for="ingredient1" class="ml-2">
                                    Cheese
                                </label>
                            </div>
                            <div class="flex items-center">
                                <Checkbox
                                    v-model="pizza"
                                    inputId="ingredient2"
                                    name="pizza"
                                    value="Mushroom"
                                />
                                <label for="ingredient2" class="ml-2">
                                    Mushroom
                                </label>
                            </div>
                            <div class="flex items-center">
                                <Checkbox
                                    v-model="pizza"
                                    inputId="ingredient3"
                                    name="pizza"
                                    value="Pepper"
                                />
                                <label for="ingredient3" class="ml-2">
                                    Pepper
                                </label>
                            </div>
                            <div class="flex items-center">
                                <Checkbox
                                    v-model="pizza"
                                    inputId="ingredient4"
                                    name="pizza"
                                    value="Onion"
                                />
                                <label for="ingredient4" class="ml-2">
                                    Onion
                                </label>
                            </div>
                        </div>
                        <!-- Dropdown -->
                        <div class="card flex justify-content-center">
                            <Dropdown
                                v-model="selectedCity"
                                :options="cities"
                                optionLabel="name"
                                placeholder="Select a City"
                                class="w-full md:w-14rem"
                            />
                        </div>
                        <!-- Accordion -->
                        <div class="card">
                            <Accordion>
                                <AccordionTab>
                                    <template #header>
                                        <span
                                            class="flex items-center gap-2 w-full"
                                        >
                                            <Avatar
                                                image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                                                shape="circle"
                                            />
                                            <span
                                                class="font-bold whitespace-nowrap"
                                                >Amy Elsner</span
                                            >
                                            <Badge value="3" class="ml-auto" />
                                        </span>
                                    </template>
                                    <p class="m-0">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum.
                                    </p>
                                </AccordionTab>
                                <AccordionTab>
                                    <template #header>
                                        <span
                                            class="flex items-center gap-2 w-full"
                                        >
                                            <Avatar
                                                image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png"
                                                shape="circle"
                                            />
                                            <span
                                                class="font-bold whitespace-nowrap"
                                                >Onyama Limba</span
                                            >
                                            <Badge value="4" class="ml-auto" />
                                        </span>
                                    </template>
                                    <p class="m-0">
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem
                                        aperiam, eaque ipsa quae ab illo
                                        inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo. Nemo
                                        enim ipsam voluptatem quia voluptas sit
                                        aspernatur aut odit aut fugit, sed quia
                                        consequuntur magni dolores eos qui
                                        ratione voluptatem sequi nesciunt.
                                        Consectetur, adipisci velit, sed quia
                                        non numquam eius modi.
                                    </p>
                                </AccordionTab>
                                <AccordionTab>
                                    <template #header>
                                        <span
                                            class="flex items-center gap-2 w-full"
                                        >
                                            <Avatar
                                                image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png"
                                                shape="circle"
                                            />
                                            <span
                                                class="font-bold whitespace-nowrap"
                                                >Ioni Bowcher</span
                                            >
                                            <Badge value="2" class="ml-auto" />
                                        </span>
                                    </template>
                                    <p class="m-0">
                                        At vero eos et accusamus et iusto odio
                                        dignissimos ducimus qui blanditiis
                                        praesentium voluptatum deleniti atque
                                        corrupti quos dolores et quas molestias
                                        excepturi sint occaecati cupiditate non
                                        provident, similique sunt in culpa qui
                                        officia deserunt mollitia animi, id est
                                        laborum et dolorum fuga. Et harum quidem
                                        rerum facilis est et expedita
                                        distinctio. Nam libero tempore, cum
                                        soluta nobis est eligendi optio cumque
                                        nihil impedit quo minus.
                                    </p>
                                </AccordionTab>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
