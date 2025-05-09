<script setup lang="ts">
const { data: blogs } = await useAsyncData('blog', () => {
  return queryCollection('blog').select('title', 'description', 'date', 'path').all()
})

function getReadableDate(dateString: Date) {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).replaceAll('/', '.')
}
</script>

<template>
  <div class="px-4">
    <div class="mb-10">
      <h1 class="text-2xl font-bold select-none">Blog</h1>
      <p class="mt-6 text-sm text-muted">每月两篇, 真的吗?</p>
    </div>
    <!-- <div>
      <pre>{{ blogs }}</pre>
    </div> -->
    <ul class="space-y-16">
      <li v-for="blog in blogs" :key="blog.title">
        <NuxtLink :to="blog.path">
          <article class="cursor-pointer group">
            <time class="relative z-10 order-first mb-3 flex items-center text-sm text-muted pl-3.5">
              <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                <span class="h-4 w-1 rounded-full bg-accented" />
              </span>
              {{ getReadableDate(blog.date) }}
            </time>
            <h2 class="text-lg font-bold transition-colors duration-300 group-hover:text-highlighted">{{ blog.title }}</h2>
            <p class="mt-2 text-sm text-dimmed">{{ blog.description }}</p>
          </article>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
