<template>
  <ul class="number-scaling">
    <RandomString v-for="(_, index) in number" :key="index">
    </RandomString>
  </ul>
</template>

<script setup>
import RandomString from './RandomString.vue'
const number = 12
</script>

<style lang="less">
.number-scaling{
  width:100%;
  li{
    font-size: 10px;
  }
}
</style>
