<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})
</script>

<template>
  <div class="blog">
    <template v-if="post">
      <ContentRenderer class="prose dark:prose-invert prose-neutral max-w-none prose-a:no-underline" tag="article" :value="post" />
      <div class="font-mono opacity-50 hover:opacity-90 cursor-pointer my-5">
        <span class="">> </span>
        <NuxtLink to="/blog">CD..</NuxtLink>
      </div>
    </template>
    <template v-else>
      <div class="empty-page">
        <h1>Page Not Found</h1>
        <p>Oops! The content you're looking for doesn't exist.</p>
        <NuxtLink to="/">Go back home</NuxtLink>
      </div>
    </template>
  </div>
</template>

<style>
/* .prose h2 a,
.prose h3 a {
  @apply no-underline;
} */
</style>
