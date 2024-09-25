<template>
  <div class="bg-brand-yellow text-brand-black text-center pt-28">
    <h1>Gallery</h1>
    <div class="flex flex-wrap items-center justify-center gap-2 p-2 mt-5">
      <img class="w-[240px] h-[240px] grow object-cover border border-brand-black" v-for="(image, index) in images" :key="index" :src="image" alt="" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue'

const { t } = useI18n();

const headTitle = computed(() => t('head.title'));
const pageTitle = computed(() => t('nav.gallery'));

useHead({
  title: computed(() => `${pageTitle.value} - ${headTitle.value}`),
});

// Use import.meta.glob to import all images from the directory
const images = ref([]);
const imageModules = import.meta.glob('@/assets/images/products/*.{webp,jpg,jpeg}');

// Load all image URLs into the `images` array
for (const path in imageModules) {
  imageModules[path]().then((mod) => {
    images.value.push(mod.default);
  });
}
</script>
