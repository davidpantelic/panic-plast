<template>
  <NavBar />
  <RouterView />
</template>

<script setup>
import { computed, provide } from 'vue';
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
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

const myFunction = (text) => {
  console.log(text);
};

provide('myFunction', myFunction);
</script>
