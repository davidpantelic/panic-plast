import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './utils/i18n'
import { createHead } from '@unhead/vue'

router.beforeEach((to, from, next) => {
  // Check if the route has the meta.lang property set correctly
  const lang = to.meta.lang || 'sr'
  if (i18n.global.locale !== lang) {
    i18n.global.locale = lang
  }
  next()
})

const app = createApp(App)
const head = createHead()

const locale = ref(i18n.global.locale)
const currentLocale = ref(i18n.global.locale)
const route = ref(router.currentRoute.value)

router.afterEach((to) => {
  route.value = to // Update the route whenever navigation occurs
})

// Global function to switch language and update route
app.config.globalProperties.switchLanguage = (lang) => {
  locale.value = lang
  currentLocale.value = lang

  if (route.value.name) {
    let newRouteName
    if (lang === 'sr') {
      newRouteName = route.value.name.replace('-en', '-sr')
    } else if (lang === 'en') {
      newRouteName = route.value.name.replace('-sr', '-en')
    }

    if (newRouteName) {
      router.push({ name: newRouteName })
    } else {
      console.error('Error: Route name not found for language switch.')
    }
  } else {
    console.error('Error: Current route name is undefined.')
  }
}

// Global function to generate localized paths
app.config.globalProperties.generateLocalizedPath = (path) => {
  if (currentLocale.value === 'en') {
    return `/en${path === '/' ? '' : path}` // Add `/en` prefix for English routes
  } else {
    return path // No prefix for Serbian (default)
  }
}

app.config.globalProperties.$currentLocale = currentLocale

app.use(router)

app.use(i18n)

app.use(head)

app.mount('#app')
