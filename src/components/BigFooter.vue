<template>
  <footer class="bg-brand-green text-brand-black w-full">
    <div id="kontakt" class="flex lg:flex-wrap flex-col lg:flex-row justify-center items-center gap-x-[5%] gap-y-5 p-10">
      <div class="text-center">
        <h2>{{ t('head.title') }}</h2>
        <h3>{{ t('head.job') }}</h3>
        <br>
        <p><a href="mailto:panicplast@gmail.com" class="hover:underline"><span class="sr-only">Pisite nam na mejl:</span>panicplast@gmail.com</a></p>
        <p><a href="tel:+381654441560" class="hover:underline"><span class="sr-only">Pozovite nas na:</span>+381 65/444-15-60</a></p>
        <br>
        <p>Copyright &copy; {{ getCurrentYear }} {{ t('head.title') }}. {{ t('footer.rights') }}</p>
        <p>{{ t('footer.webdak') }} - <a href="mailto:dpdavid156@gmail.com" class="hover:underline">Webdak</a></p>
      </div>

      <ContactForm class="w-full xl:w-1/3 m-5 lg:m-0" />

      <img src="@/assets/images/panic_plast.png" :alt="[t('head.title'), t('head.job')]" class="max-h-80 lg:max-h-96 max-w-full">
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ContactForm from './ContactForm.vue';

const { t } = useI18n();

const getCurrentYear = computed(() => {
  return new Date().getFullYear();
})
</script>