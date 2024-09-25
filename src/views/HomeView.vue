<template>
  <main class="bg-brand-green">
    <div class="hp-cover w-full h-screen flex items-center justify-center flex-col bg-fixed bg-brand-black">
      <h1 class="text-white text-center"><span class="block mb-2 text-[1.5em]">{{ actionWord }}</span> {{ t('cover.title') }}</h1>
      <h2 class="mt-5 text-white uppercase">{{ t('head.title') }}</h2>
      <RouterLink :to="t('nav.products').toLowerCase()" class="btn-1" active-class="" exact-active-class="">{{ t('cover.button') }}</RouterLink>
      <button @click="scrollToNextSection()" class="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-2xl animate-bounce" tabindex="-1" aria-hidden="true"><i class="pi pi-arrow-down"></i><span class="sr-only">{{ t('cover.scroll') }}</span></button>
    </div>

    <div class="prod-desc flex flex-wrap gap-5 md:gap-10 justify-between items-center px-5 pt-[4%] text-center max-w-[1600px] mx-auto">
      <div class="w-full xl:w-1/4">
        <h2 class="mb-5">{{ t('prod_desc.subtitle_1') }}</h2>
        <p v-if="currentLocale === 'sr'">Razumemo važnost zaštite životne sredine, zbog čega smo posvećeni proizvodnji <strong>ekološki prihvatljivih</strong> proizvoda. Naši proizvodi su napravljeni od netoksičnih materijala koji se mogu reciklirati, što obezbeđuje minimalan uticaj na životnu sredinu.</p>

        <p v-if="currentLocale === 'en'">We understand the importance of protecting the environment, which is why we are committed to producing <strong>environmentally friendly</strong> products. Our products are made from non-toxic, recyclable materials, which ensures that they have a minimal impact on the environment.</p>
      </div>
      <div class="w-full md:w-1/4">
        <h2 class="mb-5">{{ t('prod_desc.subtitle_2') }}</h2>
        <p v-if="currentLocale === 'sr'">Nudimo širok spektar visokokvalitetnih plastičnih proizvoda dizajniranih da izdrže najteže životne uslove. Naši proizvodi, uključujući <strong>rezervoare</strong>, <strong>septičke jame</strong>, <strong>prečistače otpadnih voda</strong>, <strong>pontone</strong>, (i još mnogo toga), se prave od najboljih i najotpornijih materijala dostupnih na tržištu.</p>

        <p v-if="currentLocale === 'en'">We offer a wide range of high-quality plastic products designed to withstand the toughest environmental conditions. Our products, including <strong>reservoirs</strong>, <strong>septic tanks</strong>, <strong>wastewater purifiers</strong>, <strong>pontoons</strong>, (and much more), are made from the most durable and weather-resistant materials available on the market.</p>
      </div>
      <div class="w-full md:w-1/4">
        <h2 class="mb-5">{{ t('prod_desc.subtitle_3') }}</h2>
        <p v-if="currentLocale === 'sr'">Naši proizvodi su <strong>napravljeni da traju</strong> i uvereni smo da će premašiti vaša očekivanja. Dizajnirani su tako da izdrže teške vremenske uslove, a otporni su i na UV zračenje, što im omogućava da tokom vremena zadrže izgled i funkcionalnost.</p>

        <p v-if="currentLocale === 'en'">Our products are <strong>built to last</strong>, and we are confident that they will exceed your expectations. They are designed to resist harsh weather conditions, and they are also resistant to UV radiation, which ensures that they maintain their appearance and functionality over time.</p>
      </div>
      <div class="w-full rounded p-3 bg-white">
        <p v-if="currentLocale === 'sr'">Posvećeni smo pružanju <strong>našim klijentima</strong> najbolju moguću uslugu i ponosni smo na naše kvalitetne proizvode. Bilo da tražite septičku jamu za vaš dom, rezervoar za vašu farmu ili ponton za vaš dok, imamo savršen proizvod koji će zadovoljiti vaše potrebe.</p>

        <p v-if="currentLocale === 'en'">We are committed to providing <strong>our customers</strong> with the best possible service, and we pride ourselves on our quality products and customer support. Whether you are looking for a septic tank for your home, a reservoir for your farm, or a pontoon for your dock, we have the perfect product to meet your needs.</p>
      </div>
    </div>
    <a href="/#kontakt" class="btn-2 block w-fit mx-auto !mb-10">{{ t('nav.contact') }}</a>

    <TopProds />

    <div class="black-text-box bg-brand-black text-brand-yellow p-[5%] flex gap-x-5 flex-col lg:flex-row text-center lg:text-left">
      <div class="flex flex-wrap gap-y-5 flex-col w-full lg:w-1/2 lg:flex-row justify-center">
        <div class="w-full">
          <h2 class="mb-3">{{ t('about.our_products') }}</h2>
          <p>{{ t('about.our_products_text') }}</p>
        </div>
        <div class="w-full">
          <h2 class="mb-3">{{ t('about.transport') }}</h2>
          <p>{{ t('about.transport_text') }}</p>
        </div>
      </div>
      <div class="w-full lg:w-1/2 flex-grow">
        <h2 class="mb-3">{{ t('about.about_products') }}</h2>
        <p v-if="currentLocale === 'sr'">Plastični rezervoari, septičke jame, pontoni i drugi proizvodi izrađuju se tehnologijom spiralnog namotavanja od polietilena visoke gustine (HDPE) i polipropilena (HDPP). Otporan na udarce, agresivne hemikalije, pogodan za delimično ili potpuno ukopavanje i kao takav predstavlja idealnu i dugoročnu investiciju. Praktični su, laki za manipulisanje i ugradnju, a garantuju vodonepropusnost i dugotrajno rešenje, jer materijal gubi samo 5% svojih svojstava nakon 50 godina upotrebe. Svaki plastični proizvod može biti opremljen raznim dodacima kao što su ventili, slavine, pokazivači nivoa, spoljni ili unutrašnji navojni priključci, prelivi, revizioni otvori, prigušnice, nožice za sidrenje, ramovi za penjanje i sve ostalo prema vašim potrebama. <br> Pogledajte <RouterLink to="gallery" class="text-white hover:underline">Galeriju</RouterLink> naših proizvoda.</p>
        <p v-if="currentLocale === 'en'">Plastic reservoirs, septic tanks, pontoons and other products are made by spiral winding technology of high-density polyethylene (HDPE) and polypropylene (HDPP). Resistant to impacts, aggressive chemicals, suitable for burying partially or completely, and as such represent an ideal and long-term investment. They are practical, easy to manipulate and install, and they guarantee waterproofness and a long-lasting solution, because the material loses only 5% of its properties after 50 years of use. Any plastic product can be fitted with various accessories such as valves, faucets, level indicators, external or internal threaded connections, overflows, inspection openings, chokes, anchoring feet, climbing frames and everything else according to your needs. <br> Check out the <RouterLink to="gallery" class="text-white hover:underline">Gallery</RouterLink> of our products.</p>
      </div>
    </div>

    <BigFooter />

  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject, computed } from 'vue';
import nextElementInList from '@/utils/nextElementInLIst';
import { useI18n } from 'vue-i18n';
import TopProds from '@/components/TopProds.vue';
import BigFooter from '@/components/BigFooter.vue';

const { locale } = useI18n();
const currentLocale = computed(() => locale.value);

const { t } = useI18n();

const myFunction = inject('myFunction');
myFunction('func from parent');

const actionWord = ref(t('cover.actionWord_1'));

let intervalId;

const changeTitle = () => {
  intervalId = setInterval(() => {
    const actions = [t('cover.actionWord_1'), t('cover.actionWord_2'), t('cover.actionWord_3'), t('cover.actionWord_4')];
    actionWord.value = nextElementInList(actions, actionWord.value);
  }, 2000);
};

onMounted(() => {
  changeTitle();
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const scrollToNextSection = () => {
  const section = document.querySelector('main > div:not(:first-of-type)');
  section.scrollIntoView({ behavior: 'smooth' });
};
</script>