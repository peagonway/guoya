<template>
  <div class="year-number">
    <div class="f32">
      {{ $filter.Day([date,'YYYY年MM月']) }}
    </div>
    <div>
      <span class="big">{{ $filter.Day([date,'D'])}}</span>
    </div>
  </div>
</template>

<script setup>
const date = Date.now()
</script>

<style lang="less">
.year-number{
  width:240px; height: 240px;
  border: 6px solid #04c1fb; border-radius: 24px;
  background:linear-gradient(to bottom, #0089f3, #0183f3);
  display: flex; justify-content: center; align-items: center; flex-direction: column;
  .small{
    font-size:48px
  }
  .big{
    font-size:150px; line-height: 150px;
  }
}
</style>
