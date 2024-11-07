<script setup lang="ts">
import type { Release } from '@/components/ReleaseEntry.vue';
import ReleaseEntry from '@/components/ReleaseEntry.vue';


const RELEASES: Release[] = [
    {
        title: "Cycle Chaurasiya",
        description: "Rajiv learns that the forest he treads in is haunted by Cycle Chaurasiya — a thief who robs innocents of their money, valuables and even their clothes! Will he escape safe and sound?",
        site: "YouTube",
        link: "https://www.youtube.com/watch?v=oWxRk-NLBTA",
        image_link: "https://i.ytimg.com/vi/oWxRk-NLBTA/maxresdefault.jpg",
        genres: [
            {
                name: "Comedy",
                color: "teal"
            },
            {
                name: "Suspense",
                color: "indigo"
            },


        ]
    }
];
</script>

<template>
    <div v-for="release in RELEASES" :key="release.link">
        <ReleaseEntry :release="release" />
    </div>
</template>