<template>
  <div class="inner">
    <div class="col col-1">
      <ScaleLine></ScaleLine>
    </div>
    <div class="col col-2">
      <HorizontalLine></HorizontalLine>
      <div>Vue3+nanoid+dayjs</div>
      <NumberScroll></NumberScroll>
      <VerticalLine></VerticalLine>
    </div>
    <div class="col col-3">
      <FileSearch></FileSearch>
    </div>
    <div class="col col-4">
      <YearNumber></YearNumber>
      <PieList></PieList>
      <Battery></Battery>
    </div>
  </div>
</template>
<script setup lang="ts">
import ScaleLine from './components/ScaleLine'
import HorizontalLine from './components/HorizontalLine'
import NumberScroll from './components/NumberScroll'
import VerticalLine from './components/VerticalLine'
import FileSearch from './components/FileSearch'
import YearNumber from './components/YearNumber'
import PieList from './components/PieList'
import Battery from './components/Battery'
</script>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App'
})
</script>

<style lang="less">
*{
  margin:0; padding:0;
  box-sizing: border-box;
}
::after,::before{box-sizing: border-box;}
html,body{height: 100%; color:#fff;}
ul,li{list-style: none;}
#app{
  width:100%; height:100%;
  display: flex; justify-content: center; align-items: center;
  background: linear-gradient(to bottom right, #3c30c5, #36a5fe);
}
.flex-center-center{display: flex; justify-content: center; align-items: center;}
.inner{
  width: 1200px; height:400px; margin: 0 auto;
  display: flex;
  .col{
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }
  .col-1{
    width:50px;
  }
  .col-2{
    width:240px;
  }
  .col-3{
    flex:1;
    align-items: center;
  }
  .col-4{
    width:240px; align-items: flex-end;
  }
}
.f12{font-size: 12px;}
.f14{font-size: 14px;}
.f16{font-size: 16px;}
.f18{font-size: 18px;}
.f32{font-size: 32px;}
.f48{font-size: 48px;}

</style>
