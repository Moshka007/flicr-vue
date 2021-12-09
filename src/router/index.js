import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Bookmark from '../views/Bookmark.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/bookmark',
    component: Bookmark
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
