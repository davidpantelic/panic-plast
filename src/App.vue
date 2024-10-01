<template>
  <NavBar />
  <RouterView />
  <SmallFooter />
</template>

<script setup>
import { computed } from 'vue';
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SmallFooter from './components/SmallFooter.vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue'

const { t } = useI18n();

const headTitle = computed(() => t('head.title'));
const headDescription = computed(() => t('head.description'));

useHead({
  title: headTitle,
  meta: [
    { name: 'description', content: headDescription },
    { property: 'og:title', content: headTitle },
    { property: 'og:description', content: headDescription },
    { name: 'twitter:title', content: headTitle },
    { name: 'twitter:description', content: headDescription },
  ],
})

</script>
