<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { useFixedHeader } from 'vue-use-fixed-header'

const headerRef = ref(null)
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  },
})

const items = ref<NavigationMenuItem[][]>([
  [
    { label: 'Home', to: '/', icon: 'i-heroicons-home-20-solid', class: 'font-bold' },
    { label: 'Blog', to: '/blog', icon: 'i-heroicons-book-open-solid', class: 'font-bold' },
  ],
  [
    { label: 'Theme', slot: 'theme' },
  ],
])

const { styles } = useFixedHeader(headerRef)
</script>

<template>
  <div ref="headerRef" :style="styles" class="limit fixed top-0 right-0 left-0 z-50">
    <UNavigationMenu :items="items" color="primary" variant="link" highlight class="my-4 flex items-center text-sm font-medium text-neutral-800 rounded-full shadow-lg bg-white/90 shadow-neutral-800/5 ring-1 backdrop-blur dark:bg-neutral-800/90 dark:text-neutral-200 dark:ring-white/20 ring-neutral-900/5">
      <template #theme>
        <ClientOnly>
          <UIcon :name="isDark ? 'i-heroicons:moon-20-solid' : 'i-heroicons:sun-20-solid'" class="size-5" @click="isDark = !isDark" />
        </ClientOnly>
      </template>
    </UNavigationMenu>
  </div>
</template>

<style scoped>

</style>
