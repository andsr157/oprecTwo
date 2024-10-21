<script setup lang="ts">
import { useGeneralStore } from "@/stores/general"
const store = useGeneralStore()
</script>
<template>
  <section>
    <div class="fixed z-50 w-full p-7" v-if="!store.isLoading">
      <div
        class="flex justify-between font-[Satoshi-Medium] text-lg md:text-xl text-gray-100 cursor-default"
      >
      </div>
    </div>
    <ClientOnly>
      <TheExperience />
    </ClientOnly>
  </section>
</template>
