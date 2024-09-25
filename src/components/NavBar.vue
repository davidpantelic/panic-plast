<template>
  <header>
    <nav :class="[isScrolling ? 'py-4' : 'py-5 bg-opacity-90']" class="bg-brand-black text-white fixed top-0 w-full flex justify-end px-6 lg:px-10 z-50">

      <RouterLink to="/" class="absolute h-28 sm:h-32 top-2 left-3 hover:scale-105 z-10">
        <img src="@/assets/images/panic_plast.png" alt="Panic Plast" :class="[isScrolling ? 'h-4/5' : 'h-full']" class="inline mr-3 transition-all">
      </RouterLink>

      <ul class="nav-tabs items-center gap-5 hidden lg:flex mr-5">
        <li v-for="tab in navTabs" :key="tab.name">
          <RouterLink :to="tab.path" class="text-xl hover:text-brand-yellow">{{ tab.name }}</RouterLink>
        </li>
      </ul>

      <SocialIcons />

      <div class="ml-3 z-50">
        <button v-if="locale === 'en'" @click="switchLanguage('sr')" class="h-full rounded border-2 px-1 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-black">Srb</button>
        <button v-if="locale === 'sr'" @click="switchLanguage('en')" class="h-full rounded border-2 px-1 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-black">En</button>
      </div>

      <button :class="[{ 'collapsed': !isBurgerOpen }]" class="lg:hidden navbar-toggler rounded ml-5 flex flex-col items-center justify-center gap-[3px] border-white border-2 px-2 min-w-12 relative z-50" @click="toggleBurger" :aria-expanded="isBurgerOpen" aria-label="Toggle navigation">
        <span v-for="index in 3" :key="index" class="w-7 h-[2px] bg-white rounded transition-all duration-300"></span>
      </button>

      <div class="overflow-hidden absolute top-full left-0 right-0">
        <ul :class="{ 'bg-opacity-90': !isScrolling, [!isBurgerOpen ? 'translate-y-[-100%]' : 'translate-y-0']: true }" class="nav-tabs flex flex-col lg:hidden px-6 pb-2 items-end gap-3 bg-brand-black transition-all" :aria-hidden="!isBurgerOpen">
          <li v-for="tab in navTabs" :key="tab.name">
            <RouterLink :to="tab.path" class="text-xl hover:text-brand-yellow" :tabindex="isBurgerOpen ? 0 : -1" @click="toggleBurger">{{ tab.name }}</RouterLink>
          </li>
        </ul>
      </div>

    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watchEffect } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n';
import SocialIcons from './SocialIcons.vue';

const route = useRoute()
const router = useRouter()

// Use watchEffect to track changes in route.query
watchEffect(() => {
  if (route.query.lang) {
    locale.value = route.query.lang;
    document.documentElement.setAttribute('lang', route.query.lang);
  }
});

const { locale } = useI18n();
const { t } = useI18n();
// Function to switch languages
const switchLanguage = (lang) => {
  document.documentElement.setAttribute('lang', lang);
  router.push({ query: { lang } });
  locale.value = lang;
};

const navTabs = computed(() => [
  {
    name: t('nav.home'),
    path: '/'
  },
  {
    name: t('nav.products'),
    path: t('nav.products').replace(" ", "-").toLowerCase()
  },
  {
    name: t('nav.gallery'),
    path: t('nav.gallery').replace(" ", "-").toLowerCase()
  },
  {
    name: t('nav.about'),
    path: t('nav.about').replace(" ", "-").toLowerCase()
  },
  {
    name: t('nav.contact'),
    path: t('nav.contact').replace(" ", "-").toLowerCase()
  }
]);

const isScrolling = ref(false);

const handleScroll = () => {
  if (window.scrollY === 0) {
    isScrolling.value = false;
  } else {
    if (!isScrolling.value) {
      isScrolling.value = true;
    }
  }
};

const isBurgerOpen = ref(false);
function toggleBurger() {
  isBurgerOpen.value = !isBurgerOpen.value;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>