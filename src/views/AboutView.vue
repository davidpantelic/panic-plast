<template>
  <main class="about">
    <h1>This is an about page</h1>
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue'

const { t } = useI18n();

const headTitle = computed(() => 'Panić Plast');
const pageTitle = computed(() => t('nav.about'));

useHead({
  title: computed(() => `${pageTitle.value} - ${headTitle.value}`),
});
</script>
