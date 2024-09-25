<template>
  <footer>
    <div class="bg-brand-black text-brand-yellow w-full flex flex-wrap gap-5 justify-center items-center p-5 text-center">
      <img src="@/assets/images/accessibility_icon_yellow.png" :alt="t('footer.acc_badge_alt')" :title="t('footer.acc_badge_title')" class="w-20 order-2">
      <div class="w-full md:w-auto md:order-2 order-1">
        <p>Copyright &copy; {{ getCurrentYear }} {{ t('head.title') }}. {{ t('footer.rights') }}</p>
        <p>{{ t('footer.webdak') }} - <a href="mailto:dpdavid156@gmail.com" class="hover:underline">Webdak</a></p>
      </div>
      <a href="https://google.com" target="_blank" class="hover:rotate-6 transition-all order-3"><img src="@/assets/images/webdak_logo_small.png" :alt="t('footer.webdak_badge_alt')" :title="t('footer.webdak_badge_title')" class="w-20 border-2 border-brand-black bg-brand-black rounded-full"></a>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const getCurrentYear = computed(() => {
  return new Date().getFullYear();
})
</script>