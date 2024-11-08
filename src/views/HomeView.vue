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
    <object data="/logos/fe-text.svg" style="max-height: 350px" class="img-fluid fe-logo"/>
    <div class="fit-content">
      <!-- <h5 class="sec-title">We're here to produce entertainment.</h5> -->
      <SocialMedia class="my-3 mx-auto" :connections="SOCIAL_MEDIA" />
    </div>
  </div>
  <div class="w-50 mx-auto mt-5">
    <RouterLink to="releases" class="text-decoration-none text-grey">
    <div class="btn btn-fe btn-primary p-2 w-100 my-2">
      <h5 class="text-uppercase m-0">Releases</h5>
    </div>
  </RouterLink>
    <RouterLink to="meet-us" class="text-decoration-none text-grey">
    <div class="btn btn-fe btn-beige p-2 w-100 my-2">
      <h5 class="text-uppercase m-0">Meet the Team</h5>
    </div>
  </RouterLink>
 
  </div>
 
</template>
