<script setup lang="ts">
import {} from 'vue'

const articles = ref([
  { title: 'Article 1', date: '2023-01-01', description: 'Description of article 1' },
  { title: 'Article 2', date: '2023-02-01', description: 'Description of article 2' },
  { title: 'Article 3', date: '2023-03-01', description: 'Description of article 3' },
])
</script>

<template>
  <div class="min-h-screen px-4">
    <div class="mb-10">
      <h1 class="text-2xl font-bold select-none">Articles</h1>
      <p class="mt-6 text-sm text-muted">Articles are written in Markdown and stored in the <code>content/articles</code> directory.</p>
    </div>

    <ul class="space-y-16">
      <li v-for="article in articles" :key="article.title">
        <article class="cursor-pointer group">
          <time class="relative z-10 order-first mb-3 flex items-center text-sm text-muted pl-3.5" :datetime="article.date">
            <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
              <span class="h-4 w-1 rounded-full bg-accented" />
            </span>
            {{ article.date }}
          </time>
          <h2 class="text-lg font-bold transition-colors duration-300 group-hover:text-highlighted">{{ article.title }}</h2>
          <p class="mt-2 text-sm text-dimmed">{{ article.description }}</p>
        </article>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
