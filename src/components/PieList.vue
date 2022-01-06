<template>
  <div class="pie-list">
    <div class="pie pie-01">
      <div class="left"><span></span></div>
      <div class="right"><span></span></div>
    </div>
    <div class="pie pie-02">
      <div class="left"><span></span></div>
      <div class="right"><span></span></div>
    </div>
    <div class="pie pie-03">
      <div class="left"><span></span></div>
      <div class="right"><span></span></div>
    </div>
    <div class="pie pie-04">
      <div class="left"><span></span></div>
      <div class="right"><span></span></div>
    </div>
  </div>
</template>

<script setup>
</script>
<style lang="less">
.pie-list{
  width:240px;
  display: flex; justify-content: space-between; align-items: center;
  .pie{
    width: 40px; height: 40px; border-radius: 50%;
    background: rgba(255,255,255,.3);
    font-size: 0;
    overflow: hidden;
    .left,.right{
      height: 100%; width:50%; display: inline-block;
      overflow: hidden;
      span{display: inline-block; width: 100%; height:100%;}
    }
    .left span{
      background:#fff; transform-origin: right center;
    }
    .right span{
      background:#fff;
      transform-origin: left center;
    }
  }
  .pie-01{
    .left span{}
    .right span{transform: rotate(0deg); animation: rotate-01 .5s forwards; }
  }
  .pie-02{
    .left span{transform: rotate(0deg);}
    .right span{transform: rotate(120deg); animation: rotate-02 1s forwards;}
  }
  .pie-03{
    .left span{transform: rotate(0deg);animation: rotate-03-02 .5s forwards .7s;}
    .right span{transform: rotate(0deg);animation: rotate-03-01 .8s forwards;}
  }
  .pie-04{
    .left span{transform: rotate(0deg); animation: rotate-04 .8s forwards;}
    .right span{transform: rotate(0deg);}
  }

  @keyframes rotate-01{
    0%{transform: rotate(0deg);}
    100%{transform: rotate(60deg);}
  }
  @keyframes rotate-02{
    0%{transform: rotate(0deg);}
    100%{transform: rotate(120deg);}
  }
  @keyframes rotate-03-01{
    0%{transform: rotate(0deg);}
    100%{transform: rotate(180deg);}
  }
  @keyframes rotate-03-02{
    0%{transform: rotate(0deg);}
    100%{transform: rotate(60deg);}
  }
  @keyframes rotate-04{
    0%{transform: rotate(0deg);}
    100%{transform: rotate(-120deg);}
  }
}
</style>
