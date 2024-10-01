import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryView from '@/views/GalleryView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home-sr',
      component: HomeView,
      meta: { lang: 'sr' }
    },
    {
      path: '/proizvodi',
      name: 'products-sr',
      component: HomeView,
      meta: { lang: 'sr' }
    },
    {
      path: '/galerija',
      name: 'gallery-sr',
      component: GalleryView,
      meta: { lang: 'sr' }
    },
    {
      path: '/o-nama',
      name: 'about-sr',
      component: AboutView,
      meta: { lang: 'sr' }
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found-sr',
      component: NotFoundView,
      meta: { lang: 'sr' }
    },
    {
      path: '/en',
      children: [
        {
          path: '',
          name: 'home-en',
          component: HomeView,
          meta: { lang: 'en' }
        },
        {
          path: 'proizvodi',
          name: 'products-en',
          component: HomeView,
          meta: { lang: 'en' }
        },
        {
          path: 'galerija',
          name: 'gallery-en',
          component: GalleryView,
          meta: { lang: 'en' }
        },
        {
          path: 'o-nama',
          name: 'about-en',
          component: AboutView,
          meta: { lang: 'en' }
        },
        {
          path: '/:catchAll(.*)',
          name: 'not-found-en',
          component: NotFoundView,
          meta: { lang: 'en' }
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      // return { top: 0 }
    }
  }
})

export default router
