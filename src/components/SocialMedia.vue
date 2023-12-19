<script setup lang="ts">

const SOCIAL_MEDIA = [
    {
        site: "Instagram",
        link: "https://instagram.com/TheFilmEngine.Co",
        icon: "/icons/instagram.png"
    },
    {
        site: "YouTube",
        link: "https://youtube.com/@TheFilmEngineCo",
        icon: "/icons/youtube.png"
    },
    {
        site: "Twitter",
        link: "https://twitter.com/TheFilmEngineCo",
        icon: "/icons/twitter.png"
    },
]
</script>

<template>
    <div class="d-flex">
        <div v-for="platform in SOCIAL_MEDIA" :key="platform.site" class="me-3">
            <a :href="platform.link" target="_blank"> 
                <img :src="platform.icon" class="social-media-icon" />
            </a>
        </div>
    </div>
</template>