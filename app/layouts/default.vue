<script setup lang="ts">

</script>

<template>
  <UContainer class="max-w-3xl">
    <Navbar />
    <slot />

    <!-- <div class="flex gap-4 my-4">
      <span class="text-primary">Primary</span>
      <span class="text-secondary">Secondary</span>
      <span class="text-warning">Warning</span>
      <span class="text-error">Error</span>
    </div> -->
    <!--
    <div class="flex gap-4 my-4">
      <span class="text-dimmed">Dimmed</span>
      <span class="text-muted">Muted</span>
      <span class="text-toned">Toned</span>
      <span class="text-default">default</span>
      <span class="text-highlighted">Highlighted</span>
    </div> -->

    <!-- <div class="flex gap-4 my-4">
      <div class="bg-default">bg-default</div>
      <div class="bg-muted">bg-muted</div>
      <div class="bg-elevated">bg-elevated</div>
      <div class="bg-accented">bg-accented</div>
      <div class="bg-inverted">bg-inverted</div>
    </div> -->
  </UContainer>
</template>
