<template>
  <li class="type-letter">
    <span>
      {{showString}}
    </span>
  </li>
</template>

<script setup>
import { inject, onMounted, ref } from '@vue/runtime-core'
import { nanoid } from 'nanoid'

const random = inject('random')
const showString = ref(nanoid(random(5, 32)))
const timer = random(2000, 3000)
let innerTimer = null
onMounted(() => {
  setInterval(() => {
    const value = nanoid(random(5, 32))
    clearInterval(innerTimer)
    let i = 0
    innerTimer = setInterval(() => {
      if (i >= value.length) clearInterval(innerTimer)
      showString.value = value.slice(0, i++)
    }, 20)
  }, timer)
})
</script>

<style>
  .type-letter{
    height:12px;
  }
</style>
