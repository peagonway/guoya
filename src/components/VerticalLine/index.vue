<template>
  <ul class="vertical-line">
    <Item v-for="(_, index) in number" :key="index" ></Item>
  </ul>
</template>

<script setup>
import { inject } from '@vue/runtime-core'
import Item from './Item'
const number = 25

const random = inject('random')
const height = () => random(10, 40)
</script>

<style lang="less">
.vertical-line{
  height:50px;
  display: flex; justify-content: flex-start; align-items: flex-end;;
  li{
    width:4px; border-radius: 2px;
    margin-right: 4px;
    background: #fff;
    opacity: .6;
    transition: all .5s;
  }
}
</style>
