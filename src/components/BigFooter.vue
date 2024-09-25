<template>
  <footer class="bg-brand-green text-brand-black w-full">
    <div id="kontakt" class="flex lg:flex-wrap flex-col lg:flex-row justify-center items-center gap-x-[3%] gap-y-5 p-10">
      <div class="text-center">
        <h2>{{ t('head.title') }}</h2>
        <h3>{{ t('head.job') }}</h3>
        <br>
        <p><a href="tel:+381654441560" class="hover:underline"><span class="sr-only">Pozovite nas na:</span>+381 65/444-15-60</a></p>
        <p><a href="mailto:panicplast@gmail.com" class="hover:underline"><span class="sr-only">Pisite nam na mejl:</span>panicplast@gmail.com</a></p>
      </div>

      <ContactForm class="w-full xl:w-[430px] max-w-[430px] m-5 lg:m-0" />

      <img src="@/assets/images/panic_plast.png" :alt="[t('head.title'), t('head.job')]" class="max-h-80 lg:max-h-96 max-w-full">
    </div>
  </footer>
  <!-- <GoogleMap /> -->
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import ContactForm from './ContactForm.vue';
// import GoogleMap from './GoogleMap.vue';

const { t } = useI18n();
</script>