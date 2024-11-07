<script setup lang="ts">

export interface Release {
    title: string;
    description: string;
    site: "YouTube",
    link: string;
    genres: {
        name: string;
        color: string;
    }[]
    image_link: string;
}

const props = defineProps<{ release: Release }>();
const release = props.release;

</script>


<template>
    <div class="d-flex flex-column flex-md-col">
        <a :href="release.link" target="_blank">
            <img :src="release.image_link" class="img-thumbnail" />
        </a>
        <div class="py-2 ms-md-3 my-3">
            <h5 class="team-member-name">{{ release.title }}</h5>
            <div class="d-flex">
                <div v-for="genre in release.genres" :key="genre.name" class="me-2 badge" :style="{background: genre.color}">
                    <span>{{ genre.name }}</span>
                </div>
            </div>
            <p class="my-2">{{ release.description }}</p>
        </div>

        <a :href="release.link" target="_blank" class="btn btn-primary fit-content">
            <img src="/icons/youtube.png" class="social-media-icon" />
            <span>
                Watch Now!
            </span>
        </a>
    </div>
</template>