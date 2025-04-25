<script setup lang="ts">
// import { ref } from 'vue'

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  },
})
</script>

<template>
  <ClientOnly>
    <Icon :name="isDark ? 'i-heroicons:moon-20-solid' : 'i-heroicons:sun-20-solid'" class="size-5" @click="isDark = !isDark" />
  </ClientOnly>
</template>

<style scoped></style>
