<template>
  <NavBar />
  <RouterView />
  <SmallFooter />
</template>

<script setup>
import { computed, watch, ref } from 'vue';
import { RouterView, useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SmallFooter from './components/SmallFooter.vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue'

const route = useRoute();
const { t } = useI18n();

const headTitle = ref();
const headDescription = computed(() => t('head.description'));

const canonicalLink = ref({
  rel: 'canonical',
  href: window.location.origin
});

const hrefLangLink1 = ref({
  rel: 'alternate',
  hreflang: 'sr',
  href: window.location.href
});
const hrefLangLink2 = ref({
  rel: 'alternate',
  hreflang: 'en',
  href: window.location.href
});

function translatePathName(pathName) {
  switch (pathName.replace('-en', '').replace('-sr', '')) {
    case 'products': return t('nav.products') + ' - ';
    case 'gallery': return t('nav.gallery') + ' - ';
    case 'about': return t('nav.about') + ' - ';
    default: return "";
  }
}

watch(route, (newRoute) => {
  headTitle.value = translatePathName(newRoute.name) + 'Panić Plast';

  let canonicalPath = newRoute.path;
  if (newRoute.path == '/' || newRoute.path == '/en') {
    canonicalPath = '';
  }
  canonicalLink.value.href = (window.location.origin + canonicalPath).replace('/en', '');

  let hrefLangPath = newRoute.path;
  if (hrefLangPath.at(-1) == '/') {
    hrefLangPath = hrefLangPath.slice(0, -1);
  }

  if (newRoute.meta.lang == 'sr') {
    setTimeout(() => {
      hrefLangLink1.value.hreflang = 'sr';
      hrefLangLink1.value.href = window.location.origin + hrefLangPath;
    }, 100);
    setTimeout(() => {
      hrefLangLink2.value.hreflang = 'en';
      hrefLangLink2.value.href = (window.location.origin + '/en' + hrefLangPath);
    }, 150);
  } else if (newRoute.meta.lang == 'en') {
    setTimeout(() => {
      hrefLangLink1.value.hreflang = 'en';
      hrefLangLink1.value.href = window.location.origin + hrefLangPath;
    }, 100);

    setTimeout(() => {
      hrefLangLink2.value.hreflang = 'sr';
      hrefLangLink2.value.href = (window.location.origin + hrefLangPath).replace('/en', '');
    }, 150);
  }
});

useHead({
  title: headTitle,
  meta: [
    { name: 'title', content: headTitle },
    { name: 'description', content: headDescription },
    { property: 'og:title', content: headTitle },
    { property: 'og:description', content: headDescription },
    { name: 'twitter:title', content: headTitle },
    { name: 'twitter:description', content: headDescription },
  ],
  link: [
    canonicalLink.value,
    hrefLangLink1.value,
    hrefLangLink2.value
  ]
})

</script>
