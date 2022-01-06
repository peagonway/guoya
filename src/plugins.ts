import Vue from 'vue'
import * as Dayjs from 'dayjs'

export default {
  install(Vue){
    console.log(Vue);
    Vue.filter('day',(value)=>{
      return Dayjs(value[0]).format(value[1])
    })
  }
}