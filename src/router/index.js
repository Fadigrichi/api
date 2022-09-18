
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/form.vue'
const routes = [
  {
    path: '/form',
    name: 'home',
    component: HomeView
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
