import { createWebHistory, createRouter } from 'vue-router'
import Counter from '@/components/Counter.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  {
      path: '/',
      name: 'Counter',
      Component: Counter
  },
  {
      path:  '/:pathMatch(.*)',
      name: 'NotFound',
      component: NotFound
  },
]

const router = createRouter({
     history: createWebHistory(),
     routes, //same ---> routes:routes
})
export default router