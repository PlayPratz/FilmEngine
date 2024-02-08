<script setup lang="ts">

export interface SocialMediaConnection {
    site: "Instagram" | "YouTube" | "Twitter" | "LinkedIn";
    link: string;
}

const SITE_TO_ICON = {
    "Instagram": "/icons/instagram.png",
    "YouTube": "/icons/youtube.png",
    "Twitter": "/icons/twitter.png",
    "LinkedIn": "/icons/linkedin.png"
}

const props = defineProps<{connections: SocialMediaConnection[]}>();
</script>

<template>
    <div class="d-flex">
        <div v-for="platform in props.connections" :key="platform.site" class="me-3">
            <a :href="platform.link" target="_blank"> 
                <img :src="SITE_TO_ICON[platform.site]" class="social-media-icon" />
            </a>
        </div>
    </div>
</template>