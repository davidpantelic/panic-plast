<template>
  <h2 class="text-center mb-5">{{ t('top_prods.title') }}</h2>
  <div class="flex flex-wrap lg:flex-nowrap gap-4 justify-center items-center max-w-[1500px] w-11/12 mx-auto">
    <RouterLink to="products/phr" class="bg-white hover:scale-[1.03] pb-3 self-stretch lg:self-auto flex-grow transition-all text-black order-2 lg:order-1 w-full sm:w-[45%] lg:w-[30%] text-center rounded-lg">
      <img class="w-full object-cover rounded-t-lg mb-3 h-[200px]" src="@/assets/images/products/phr_plasticni_horizontalni_rezervoar_3.webp" alt="">
      <h3>{{ products['phr'].name }}</h3>
    </RouterLink>
    <RouterLink to="products/pvr" class="bg-white hover:scale-[1.03] pb-3 self-stretch lg:self-auto flex-grow transition-all text-black order-1 lg:order-2 w-full lg:w-[40%] text-center rounded-lg">
      <img class="w-full object-cover rounded-t-lg mb-3 h-[300px]" src="@/assets/images/products/pvr_plasticni_vertikalni_rezervoari_3.webp" alt="">
      <h3>{{ products['pvr'].name }}</h3>
    </RouterLink>
    <RouterLink to="products/psj" class="bg-white hover:scale-[1.03] pb-3 self-stretch lg:self-auto flex-grow transition-all text-black order-3 lg:order-3 w-full sm:w-[45%] lg:w-[30%] text-center rounded-lg">
      <img class="w-full object-cover rounded-t-lg mb-3 h-[200px]" src="@/assets/images/products/psj_plasticna_septicka_jama_1.webp" alt="">
      <h3>{{ products['psj'].name }}</h3>
    </RouterLink>
  </div>
  <RouterLink :to="t('nav.products').toLowerCase()" class="btn-2 block w-fit mx-auto !mb-10" active-class="" exact-active-class="">{{ t('top_prods.button') }}</RouterLink>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n';
import productsJSON from '../../products_db.json';

const { t } = useI18n();

const { locale } = useI18n();
const currentLocale = computed(() => locale.value);

const products = computed(() => productsJSON[currentLocale.value]);
</script>