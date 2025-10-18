<script setup lang="ts">
import type { Release } from '@/components/ReleaseEntry.vue';
import ReleaseEntry from '@/components/ReleaseEntry.vue';

const CYCLE_CHAURASIYA: Release = {
    title: "Cycle Chaurasiya",
    description: "Rajiv learns that the forest he treads in is haunted by Cycle Chaurasiya — a thief who robs innocents of their money, valuables and even their clothes! Will he escape safe and sound?",
    links: [
        {
            platform: "YouTube",
            uri: "https://www.youtube.com/watch?v=oWxRk-NLBTA",
        }
    ],
    image_link: "https://i.ytimg.com/vi/oWxRk-NLBTA/maxresdefault.jpg",
    genres: ["Comedy", "Suspense"],
    release_date: new Date(2024, 4, 23),
};

const DIGITAL_DREAMERS: Release = {
    title: "Digital Dreamers",
    description: "Based on a true story, a few great minds struggle to design a revolutionary payment system while facing immense criticism and pushback from politicians.",
    links: [
        {
            platform: "YouTube",
            uri: "https://www.youtube.com/watch?v=ldJua03PRww",
            message: "Watch on TV/PC",
        },
        {
            platform: "Instagram",
            uri: "https://www.youtube.com/watch?v=ldJua03PRww",
            message: "Watch on Phone",
        }
    ],
    image_link: "https://i.ytimg.com/vi/ldJua03PRww/maxresdefault.jpg",
    genres: ["Biopic", "Suspense"],
    release_date: new Date(2025, 9, 17),
};

const RELEASES: Release[] = [
    DIGITAL_DREAMERS,
    CYCLE_CHAURASIYA
];
</script>

<template>
    <div v-for="(release, index) in RELEASES" :key="index">
        <ReleaseEntry :release="release" />
        <hr v-if="index < RELEASES.length - 1" class="my-5" />
    </div>
</template>