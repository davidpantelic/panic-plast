import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryView from '@/views/GalleryView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/proizvodi',
      alias: '/products',
      name: 'products',
      component: HomeView
    },
    {
      path: '/galerija',
      alias: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/o-nama',
      alias: '/about-us',
      name: 'about',
      component: AboutView
    },
    // {
    //   path: '/kontakt',
    //   alias: '/contact',
    //   name: 'contact',
    //   component: HomeView
    // },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
