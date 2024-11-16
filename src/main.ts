import 'floating-vue/dist/style.css'
import '@/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import FloatingVue from 'floating-vue'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(FloatingVue, {
  themes: {
    tooltip: {
      distance: 8,
      placement: 'bottom',
    },
  },
})
app.mount('#app')
