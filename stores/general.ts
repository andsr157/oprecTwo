// useGeneralStore.ts
import { defineStore } from "pinia"

export const useGeneralStore = defineStore("useGeneralStore", {
  state: () => ({
    isLoading: true,
  }),
})
