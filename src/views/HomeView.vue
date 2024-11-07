<script setup lang="ts">
import SocialMedia, { type SocialMediaConnection } from '@/components/SocialMedia.vue';

const SOCIAL_MEDIA: SocialMediaConnection[] = [
  {
    site: "Instagram",
    link: "https://instagram.com/FilmEngine.in",
  },
  {
    site: "YouTube",
    link: "https://youtube.com/@FilmEngineIn",
  },
  {
    site: "Twitter",
    link: "https://twitter.com/TheFilmEngineCo",
  },
]

</script>

<template>
  <div class="fit-content">
    <!-- <img src="/logos/TFE-logo-only-transparent.png" class="img-fluid mx-auto d-block" style="height: 250px;" /> -->
    <object data="/logos/logo-s-max.svg" style="max-height: 350px" class="fe-logo"/>
    <div class="fit-content">
      <!-- <h5 class="sec-title">We're here to produce entertainment.</h5> -->
      <SocialMedia class="my-3 mx-auto" :connections="SOCIAL_MEDIA" />
    </div>
  </div>
  <RouterLink to="meet-us" class="text-decoration-none text-grey">
    <div class="elevated-button my-5 px-5 fit-content">
      <h5 class="text-uppercase m-0">Meet the Team</h5>
    </div>
  </RouterLink>
</template>
