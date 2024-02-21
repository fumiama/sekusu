import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDayNightStore = defineStore('daynight', () => {
  const isNight = ref(false)
  function toggle(): boolean {
    isNight.value = !isNight.value
    return isNight.value
  }

  return { isNight, toggle }
}, { persist: true })
