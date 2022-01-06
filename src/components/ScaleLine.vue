<template>
  <ul class="scale-line">
    <li v-for="(_, index) in number" :key="index"></li>
  </ul>
</template>

<script setup>
const number = 80
</script>

<style lang="less">
.scale-line{
  li{
    width:10px; height: 1px;
    margin-bottom: 4px;
    background: #fff;
  }
  :nth-child(1), :nth-child(10n){
    width:20px;
  }
}
</style>
