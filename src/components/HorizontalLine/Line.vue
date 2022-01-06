<template>
  <li :style="{width: width + 'px'}" :class="{'actived': actived}">
    <span></span>
  </li>
</template>

<script setup>
import { defineProps } from 'vue'
import { inject } from '@vue/runtime-core'

const random = inject('random')
const width = random(40, 120)
defineProps({
  actived: Boolean
})
</script>
<style scoped lang="less">
  li{
    background: #fff; transition: all 1s;
    width:100px; height: 4px; border-radius: 2px;
    margin-bottom: 6px;
    overflow: hidden;
    span {
      display: block;
      height:100%; width:0;
      background: pink;
      transition: width 1s;
    }
  }
  .actived{
    span{
      width:100%;
    }
  }
</style>
