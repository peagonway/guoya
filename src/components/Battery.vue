<template>
  <div class="battery">
    <div class="hack"></div>
    <ul class="list">
      <li v-for="(_, index) in number" :key="index"></li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from '@vue/runtime-core'

const number = ref(0)
onMounted(() => {
  setInterval(() => {
    if (number.value++ > 28) {
      number.value = 0
    }
  }, 2000)
})
</script>
<style lang="less">
.battery{
  position: relative;
  height: 40px; width: 240px;
  &::before{
    content: '';
    position: absolute;
    left:0; top:0;
    width:235px; height:40px;
    border:2px solid #fff;
    border-radius:6px;
  }
  .hack{
    position: absolute;
    width:100%; height:12px;
    left:0;top:50%;
    transform: translateY(-50%);

    &::after{
      content: '';
      position: absolute;
      right:0;top:0;
      width:7px;height:12px;
      background: #fff;
    }
  }
  .list{
    position: absolute;
    height: 30px; width:220px;
    left:8px; top:5px;
    display: flex;
    li{
      width:6px; height:100%; margin-right:2px;
      background: #fff;
      opacity: .3;
    }
  }
}
</style>
