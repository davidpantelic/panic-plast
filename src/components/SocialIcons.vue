<template>
  <ul class="flex items-center gap-2 z-50">
    <li v-for="icon in socIcons" :key="icon.name">
      <a :href="icon.path" :target="icon.target" class="text-xl p-1 flex justify-center items-center hover:text-brand-black hover:bg-brand-yellow rounded"><i :class="icon.class"></i><span class="sr-only">{{ icon.name }}</span></a>
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const socIcons = computed(() => [
  {
    name: t('nav.fb'),
    path: 'https://www.facebook.com/panicplast/',
    target: '_blank',
    class: 'pi pi-facebook'
  },
  // {
  //   name: t('nav.ig'),
  //   path: 'https://www.instagram.com/panicplast/',
  //   target: '_blank',
  //   class: 'pi pi-instagram'
  // },
  {
    name: t('nav.email'),
    path: 'mailto:panicplast@gmail.com',
    target: '_self',
    class: 'pi pi-envelope'
  },
  {
    name: t('nav.phone'),
    path: 'tel:+381654441560',
    target: '_self',
    class: 'pi pi-phone'
  },
]);
</script>