<template>
  <section id="kontakt" class="bg-brand-green text-brand-black w-full">
    <div class="flex lg:flex-wrap flex-col lg:flex-row justify-center items-center gap-x-[3%] gap-y-5 px-10 py-16 lg:py-20">
      <article class="text-center">
        <h2>Panić Plast</h2>
        <h3>{{ t('head.job') }}</h3>
        <br>
        <p><a href="tel:+381654441560" class="hover:underline"><span class="sr-only">{{ t('contact.call_us') }}:</span>+381 65/444-15-60</a></p>
        <p><a href="mailto:panicplast@gmail.com" class="hover:underline"><span class="sr-only">{{ t('contact.email_us') }}:</span>panicplast@gmail.com</a></p>
        <br>
        <p><a href="https://maps.app.goo.gl/zc7qfNHjkj58hweW8" target="_blank" class="hover:underline"><span class="sr-only">{{ t('contact.location_new_tab_1') }} </span>Dragijevica bb, 14253 Osečina, Srbija<span class="sr-only"> - {{ t('contact.location_new_tab_2') }}</span></a></p>
        <p>{{ t('contact.mat_broj') }}: 67674944</p>
        <p>{{ t('contact.pib') }}: 114560658</p>
        <img src="@/assets/images/panic_plast.png" :alt="['Panić Plast', t('head.job')]" class="max-h-56 max-w-full mx-auto mt-5">
      </article>

      <ContactForm class="w-full xl:w-[430px] max-w-[430px] m-5 lg:m-0" />

    </div>
    <article>
      <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d446936.1872260111!2d19.58135747271885!3d44.360042113931975!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDIwJzA3LjQiTiAxOcKwMzgnNDQuNyJF!5e0!3m2!1sen!2srs!4v1727288961385!5m2!1sen!2srs" class="w-full h-full min-h-96 border-t-2 border-brand-black" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </article>
  </section>
  <!-- <GoogleMap /> -->
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import ContactForm from './ContactForm.vue';
// import GoogleMap from './GoogleMap.vue';

const { t } = useI18n();
</script>