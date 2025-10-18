<script setup lang="ts">
import { SITE_TO_ICON } from '@/common';


export interface Release {
    title: string;
    description: string;
    links: MovieLink[];
    genres: string[];
    image_link: string;
    release_date: Date;
}

export interface MovieLink {
    platform: "YouTube" | "Instagram",
    uri: string;
    message?: string;
}

const Genre_Colors: Record<string, string> = {
    Comedy: "teal",
    Suspense: "indigo",
    Biopic: "chocolate"
}

const props = defineProps<{ release: Release }>();
const release = props.release;

</script>


<template>
    <div class="d-flex flex-column flex-md-col">
        <div class="w-75 mx-auto">
            <a :href="release.links[0].uri" target="_blank">
                <img :src="release.image_link" class="img-thumbnail" />
            </a>
        </div>

        <div class="py-2 ms-md-3 my-3">
            <h5 class="team-member-name">{{ release.title }}</h5>
            <span>🕖 &nbsp;{{ release.release_date.toLocaleDateString() }}</span>
            <div class="d-flex mt-2">
                <div v-for="genre in release.genres" :key="genre" class="me-2 badge"
                    :style="{ background: Genre_Colors[genre] }">
                    <span>{{ genre }}</span>
                </div>
            </div>
            <p class="my-2">{{ release.description }}</p>
        </div>

        <div class="mx-auto">
            <a v-for="link in release.links" :key="link.uri" :href="link.uri" target="_blank"
                class="btn btn-primary fit-content me-3">
                <img :src="SITE_TO_ICON[link.platform]" class="social-media-icon me-1" />
                <span v-if="link.message">{{ link.message }}</span>
                <span v-else>Watch Now!</span>
            </a>
        </div>
    </div>
</template>