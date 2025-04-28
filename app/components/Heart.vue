<script setup lang="ts">
const props = withDefaults(defineProps<{
  count?: number
}>(), {
  count: 0,
})
const emits = defineEmits<{
  (e: 'countAdd'): void
}>()

const count = ref(0)
const animate = ref(false)

const add = throttle(async () => {
  emits('countAdd')
  count.value++
  animate.value = true
  await new Promise(resolve => setTimeout(resolve, 500))
  animate.value = false
}, 500)

watchEffect(() => {
  count.value = props.count
})
</script>

<template>
  <div class="mt-4">
    <div class="heart cursor-pointer" :class="{ like: count > 0, animate }" @click="add" />
    <div class="text-center text-muted font-bold">{{ count }}</div>
  </div>
</template>

<style lang="scss" scoped>
.heart {
  height: 100px;
  width: 100px;
  background-image: url('/heart.png');
  background-size: 2900% 100%;
  background-position: 0% center;
  background-repeat: no-repeat;
  margin-bottom: -20px;

  &.like {
    background-position: 100% center;
  }
  &.animate {
    animation: heartMove 0.5s steps(28) forwards;
  }
}

@keyframes heartMove {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 100% center;
  }
}
</style>
