<template>
  <ul class="horizontal-line">
    <Line v-for="(_, index) in number" :key="index" :actived="activeNumber === index"></Line>
  </ul>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Line from './Line'
export default defineComponent({
  name: 'HorizontalLine'
})
</script>
<script setup lang="ts">
const number = 5
const activeNumber = ref(0)
onMounted(() => {
  setInterval(() => {
    if (activeNumber.value < number - 1) {
      activeNumber.value++
    } else {
      activeNumber.value = 0
    }
    console.log(activeNumber.value)
  }, 2000)
})
</script>

<style lang="less">

</style>
