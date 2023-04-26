import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import about from '@/views/about/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/home',
    component: () => import('@/views/mhome/index.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
