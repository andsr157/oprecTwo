<script setup lang="ts">
import { useGeneralStore } from "@/stores/general"
const store = useGeneralStore()
</script>
<template>
  <SectionsHero />
  <SectionsContent v-if="!store.isLoading" />
</template>
