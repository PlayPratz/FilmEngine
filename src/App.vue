<script setup lang="ts">
import CommonFooter from './components/CommonFooter.vue';
import CommonHeader from './components/CommonHeader.vue';

// import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <CommonHeader/>
  <div id="content">
    <RouterView />
  </div>
  <CommonFooter/>
</template>
