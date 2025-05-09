<script setup lang="ts">
const heartCount = useHeart()
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <div class="group">
      <NuxtImg src="/avatar.png" class="size-16 rounded-full ring-2 group-hover:ring-4 ring-neutral-500/10  dark:ring-white/10" />
      <h1 class="mt-2 font-bold ">Seikonn</h1>
    </div>
    <!-- <p class="mt-4 text-muted text-pretty">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dolores molestias deserunt, incidunt corrupti quis velit voluptas debitis aspernatur perspiciatis maiores quia ab autem porro nisi repellat recusandae ducimus est.</p> -->
    <Heart :count="heartCount" @count-add="heartCount++" />
  </div>
</template>
