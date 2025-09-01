<script setup lang="ts">
import Placeholder from './components/Placeholder.vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader></SiteHeader>
  <RouterView />
  <SiteFooter></SiteFooter>
</template>

<style scoped></style>
