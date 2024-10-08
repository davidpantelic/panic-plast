<template>
  <header>
    <nav :class="[isScrolling ? 'py-4' : 'py-5 bg-opacity-90']" class="bg-brand-black text-white fixed top-0 w-full flex justify-end px-6 lg:px-10 z-50">

      <RouterLink :to="generateLocalizedPath('/')" class="absolute h-28 sm:h-32 top-2 left-3 hover:scale-105 z-10" active-class="" exact-active-class="">
        <img src="@/assets/images/panic_plast.png" alt="Panic Plast" :class="[isScrolling ? 'h-4/5' : 'h-full']" class="inline mr-3 transition-all">
      </RouterLink>

      <ul class="nav-tabs items-center gap-5 hidden lg:flex mr-5">
        <li v-for="tab in navTabs" :key="tab.name">
          <RouterLink :to="generateLocalizedPath(tab.path)" class="text-xl hover:text-brand-yellow">{{ tab.name }}</RouterLink>
        </li>
        <li>
          <RouterLink :to="generateLocalizedPath('/#kontakt')" @click="focusKontakt" class="text-xl hover:text-brand-yellow" active-class="" exact-active-class="">{{ t('nav.contact') }}</RouterLink>
        </li>
      </ul>

      <SocialIcons />

      <div class="ml-3 z-50">
        <button v-if="$currentLocale.value === 'en'" @click="switchLanguage('sr')" class="h-full rounded border-2 px-1 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-black">Srb</button>
        <button v-if="$currentLocale.value === 'sr'" @click="switchLanguage('en')" class="h-full rounded border-2 px-1 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-black">En</button>
      </div>

      <button :class="[{ 'collapsed': !isBurgerOpen }]" class="lg:hidden navbar-toggler rounded ml-5 flex flex-col items-center justify-center gap-[3px] border-white border-2 px-2 min-w-12 relative z-50" @click="toggleBurger" :aria-expanded="isBurgerOpen" :aria-label="t('nav.burger')">
        <span v-for="index in 3" :key="index" class="w-7 h-[2px] bg-white rounded transition-all duration-300"></span>
      </button>

      <div class="overflow-hidden absolute top-full left-0 right-0 pointer-events-none">
        <ul :class="{ 'bg-opacity-90': !isScrolling, [!isBurgerOpen ? 'translate-y-[-100%]' : 'translate-y-0']: true }" class="nav-tabs flex flex-col lg:hidden px-6 pb-2 items-end gap-3 bg-brand-black transition-all pointer-events-auto" :aria-hidden="!isBurgerOpen">
          <li v-for="tab in navTabs" :key="tab.name">
            <RouterLink :to="generateLocalizedPath(tab.path)" class="text-xl hover:text-brand-yellow" :tabindex="isBurgerOpen ? 0 : -1" @click="toggleBurger">{{ tab.name }}</RouterLink>
          </li>
          <li>
            <RouterLink :to="generateLocalizedPath('/#kontakt')" class="text-xl hover:text-brand-yellow" :tabindex="isBurgerOpen ? 0 : -1" @click="toggleBurger(); focusKontakt()" active-class="" exact-active-class="">{{ t('nav.contact') }}</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';
import SocialIcons from './SocialIcons.vue';

const { t } = useI18n();

const navTabs = computed(() => [
  {
    name: t('nav.home'),
    path: '/',
  },
  {
    name: t('nav.products'),
    path: '/proizvodi',
  },
  {
    name: t('nav.gallery'),
    path: '/galerija',
  },
  {
    name: t('nav.about'),
    path: '/o-nama',
  },
]);

const isScrolling = ref(false);
const isBurgerOpen = ref(false);

const handleScroll = () => {
  isScrolling.value = window.scrollY !== 0;
};

// Function to toggle the burger menu
function toggleBurger() {
  isBurgerOpen.value = !isBurgerOpen.value;
}

function focusKontakt() {
  setTimeout(() => {
    const contactSection = document.querySelector('#kontakt');
    contactSection.setAttribute('tabindex', '-1');
    contactSection.focus();
  }, 200);
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>