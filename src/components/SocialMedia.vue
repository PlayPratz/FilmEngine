<script setup lang="ts">

import instagram_icon from "../assets/icons/instagram.png";
import youtube_icon from "../assets/icons/youtube.png";
import twitter_icon from "../assets/icons/twitter.png";

const SOCIAL_MEDIA = [
    {
        site: "Instagram",
        link: "https://instagram.com/TheFilmEngine.Co",
        icon: instagram_icon
    },
    {
        site: "YouTube",
        link: "https://youtube.com/TheFilmEngineCo",
        icon: youtube_icon
    },
    {
        site: "Twitter",
        link: "https://twitter.com/TheFilmEngineCo",
        icon: twitter_icon
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