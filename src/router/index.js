import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/oauth/confirm',
      name: 'OAuthConfirm',
      component: () => import('../views/OAuthConfirm.vue'),
      props: route => ({
        clientName: route.query.client_name,
        scope: route.query.scope,
        requestId: route.query.request_id,
      })
    }
  ]
})

export default router
