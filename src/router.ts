import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/pages/home.vue'
import write from '@/pages/write.vue'
import index from '@/pages/index.vue'

const routes = [
  {
    path: '/',
    component: index,
    meta: {
      title: '送ta封信',
    },
  },
  {
    path: '/:id',
    component: IndexPage,
    meta: {
      title: '写封信',
    },
  },
  {
    path: '/write',
    component: write,
    meta: {
      title: '写封信',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
