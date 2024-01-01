<script setup lang="ts">
import SocialMedia, { type SocialMediaConnection } from '@/components/SocialMedia.vue';

const SOCIAL_MEDIA: SocialMediaConnection[] = [
  {
    site: "Instagram",
    link: "https://instagram.com/TheFilmEngine.Co",
  },
  {
    site: "YouTube",
    link: "https://youtube.com/@TheFilmEngineCo",
  },
  {
    site: "Twitter",
    link: "https://twitter.com/TheFilmEngineCo",
  },
]

</script>

<template>
  <div class="fit-content">
    <img src="/logos/TFE-logo-only-transparent.png" class="img-fluid" style="height: 250px;" />
    <div class="fit-content my-4">
      <div>
        <h2 class="pre-title"> The </h2>
        <h2 class="pre-title"> Film </h2>
        <h1 class="title"> Engine </h1>
      </div>
      <SocialMedia class="my-5" :connections="SOCIAL_MEDIA" />
    </div>
  </div>
  <RouterLink to="meet-us" class="text-decoration-none text-grey">
    <div class="elevated-button my-5 px-5 fit-content">
      <h5 class="text-uppercase m-0">Meet the Team</h5>
    </div>
  </RouterLink>
</template>
