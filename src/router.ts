import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/pages/home.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: '测速',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
