import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Games from '../views/Games.vue'
import Blog from '../views/Blog.vue'
import Support from '../views/Support.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
   {
    path: '/games',
    name: 'Games',
    component: Games
  },
   {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
