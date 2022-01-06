import { createApp } from 'vue'
import App from './App.vue'
import * as Dayjs from 'dayjs'

const app = createApp(App)

app.provide('random', function (min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min
})
app.config.globalProperties.$filter = {
  Day (value) {
    return Dayjs(value[0]).format(value[1])
  }
}

app.mount('#app')
