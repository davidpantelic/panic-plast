<template>
  <main class="bg-brand-yellow text-brand-black text-center pt-28">
    <h1>{{ t('nav.gallery') }}</h1>
    <div class="flex flex-wrap items-center justify-center gap-2 p-2 mt-5">
      <img class="w-[240px] h-[240px] grow object-cover border border-brand-black" v-for="(image, index) in images" :key="index" :src="image" alt="" />
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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
