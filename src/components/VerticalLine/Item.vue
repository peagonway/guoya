<template>
  <li :style="{height: height + 'px'}"></li>
</template>

<script setup>
import { inject, onMounted, ref } from '@vue/runtime-core'
const random = inject('random')
const timmer = random(1000, 2500)
const height = ref(random(10, 40))
onMounted(() => {
  setInterval(() => {
    height.value = random(10, 40)
  }, timmer)
})
</script>

<style>

</style>
