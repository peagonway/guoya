<template>
  <div class="file-search">
    <ul class="dot-round">
      <li
        v-for="(item, index) in dotNumber"
        :key="index"
        :style="[`transform:translateX(-2px) rotate(${index*10}deg)`]"
      >
        <div class="dot" :style="[`animation:dot-flash 3.6s infinite ${index*100/1000}s`]"></div>
      </li>
    </ul>
    <div class="solid-round">
      <ul class="rect-line">
        <li
          v-for="(item, index) in rectNumber"
          :key="index"
        ></li>
      </ul>
      <ul class="rect-flash">
        <li
          class="item"
          v-for="item in flashRechNumber"
          :key="item.id"
          :style="[`left:${left()}px`, `top:${top()}px`,]"
        ></li>
      </ul>
      <div class="file">
        <div class="title">
          JS
        </div>
      </div>
      <div class="serch-line">
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, inject } from 'vue'
import { nanoid } from 'nanoid'
const dotNumber = 36 // 每10度一个点
const rectNumber = 500 // 每10度一个点
const flashRechNumber = reactive([
  { id: '001' },
  { id: '002' },
  { id: '003' }
])

const random = inject('random')
onMounted(() => {
  setInterval(() => {
    const newNumber = random(2, 4)
    flashRechNumber.length = []
    for (let i = 0; i < newNumber; i++) {
      flashRechNumber.push({ id: nanoid() })
    }
  }, 2400)
})

const left = () => {
  return 16 * random(1, 20)
}
const top = () => {
  return 16 * random(1, 20)
}

</script>

<style lang="less">
.file-search{
  position: relative;
  width:400px; height:400px;
  ul.dot-round{
    position: absolute;
    left:50%; top:50%;
    width:100%; height: 100%;
    transform: translate(-50%,-50%);
    li{
      position: absolute; left:50%; top:0;
      width:4px; height:50%;
      transform-origin:center bottom;
      .dot{
        display: block;
        width:100%; height:8px; border-radius: 2px;
        background: #fff;
        opacity: 0;
      }
    }
  }
  div.solid-round{
    position: absolute;
    left:50%; top:50%; transform: translate(-50%,-50%);
    width:360px; height:360px; overflow: hidden;
    border-radius: 50%;
    border:3px solid #ddd;
    font-size: 0;
    ul.rect-line{
      li{
        display: inline-block;
        width:16px; height: 16px;
        border-left: 1px solid #ddd;
        border-top: 1px solid #ddd;
        opacity: 0.3;
        transition: all 0.5s;
        &:hover{
          background:#fff;
        }
      }
    }
    .rect-flash{
      position: absolute;
      left:0; top:0;
      width:100%; height: 100%;
      .item{
        position: absolute;
        width:16px; height: 16px;
        background:#fff;
        animation: dot-flash .8s infinite;
      }
    }
    .file{
      position: absolute;
      width: 128px;height:150px;
      top: 50%; left:50%; transform: translate(-50%, -50%);
      background: #fff;
      border-radius: 6px;
      .title{
        position: absolute; right:12px; bottom:10px;
        font-size: 88px;
        font-weight: bold;
        color:#0482f1;
      }
    }
    .serch-line{
      position: absolute;
      top:-100%;
      width: 100%;height:150px;
      background: linear-gradient(to bottom, rgba(52, 247, 119,0), rgba(52, 247, 119,.6));
      animation: serch-line-move 2.4s infinite;
    }
  }
}
@keyframes serch-line-move {
  0%{top:-100%}
  100%{top: 120%}
}
@keyframes dot-flash {
  0%{opacity: 0;}
  50%{opacity: .3;}
  100%{opacity: 0;}
}
</style>
