<script setup lang="ts">
import { SITE_TO_ICON } from '@/common';


export interface SocialMediaConnection {
    site: "Instagram" | "YouTube" | "Twitter" | "LinkedIn";
    link: string;
}

const props = defineProps<{ connections: SocialMediaConnection[] }>();
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