import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './utils/i18n'
import { createHead } from '@unhead/vue'

const app = createApp(App)
const head = createHead()

app.use(router)

app.use(i18n)

app.use(head)

app.mount('#app')
