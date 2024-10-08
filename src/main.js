import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './utils/i18n'
import { createHead } from '@unhead/vue'

const app = createApp(App)
const head = createHead()

// Load stored locale from localStorage (if any)
// Default to Serbian if no saved locale
const savedLocale = localStorage.getItem('locale') || 'sr'
i18n.global.locale.value = savedLocale

// Initialize locale as a reactive variable using `ref`
const locale = ref(savedLocale)
// Keep track of current locale
const currentLocale = ref(savedLocale)

const route = ref(router.currentRoute.value)

// Function to handle locale-based redirection on initial load
const handleInitialLocaleRedirect = () => {
  const currentPath = router.currentRoute.value.path // Get the current path
  if (savedLocale === 'en' && !currentPath.startsWith('/en')) {
    // Redirect to English version of the path if saved locale is 'en' and path doesn't have /en
    router.push({
      path: `/en${currentPath === '/' ? '' : currentPath}`,
      query: router.currentRoute.value.query
    })
    document.documentElement.lang = 'en'
  } else if (savedLocale === 'sr' && currentPath.startsWith('/en')) {
    // Redirect to Serbian version of the path if saved locale is 'sr' and path has /en
    router.push({ path: currentPath.replace('/en', ''), query: router.currentRoute.value.query })
    document.documentElement.lang = 'sr'
  }
}

// Add a watcher to `router.isReady` to execute the logic only once after the router is fully loaded
router.isReady().then(() => {
  handleInitialLocaleRedirect() // Call the redirection function on initial load
})

router.beforeEach((to, from, next) => {
  // Set the locale to match the route's language (if it has one) or default to saved locale
  if (savedLocale && savedLocale === 'en') {
    // router.push('/en')
  }
  const lang = to.meta.lang || savedLocale
  if (i18n.global.locale.value !== lang) {
    i18n.global.locale.value = lang
  }
  locale.value = lang
  currentLocale.value = lang
  document.documentElement.lang = lang
  next()
})

router.afterEach((to) => {
  // Update the route whenever navigation occurs
  route.value = to
})

// Global function to switch language and update route
app.config.globalProperties.switchLanguage = (lang) => {
  locale.value = lang
  currentLocale.value = lang
  i18n.global.locale.value = lang // Update the i18n locale
  localStorage.setItem('locale', lang) // Save the selected language in localStorage

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
  // console.log(path)
  if (currentLocale.value === 'en') {
    // Add `/en` prefix for English routes
    return `/en${path === '/' ? '' : path}`
  } else {
    // No prefix for Serbian (default)
    return path
  }
}

app.config.globalProperties.$currentLocale = currentLocale

app.use(router)

app.use(i18n)

app.use(head)

app.mount('#app')
