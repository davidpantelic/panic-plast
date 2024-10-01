// i18n.js
import { createI18n } from 'vue-i18n'
import sr from '@/locales/sr.json'
import en from '@/locales/en.json'

// Create an i18n instance with the defined messages and default locale
const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: 'sr', // Set the default locale
  fallbackLocale: 'en',
  // fallbackLocale: 'sr',
  // globalInjection: true,
  messages: { sr, en }
})

export default i18n
