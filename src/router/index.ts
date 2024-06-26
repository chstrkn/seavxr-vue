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
      path: '/login',
      name:'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/user',
      name:'user',
      component: () => import('../views/UserManagementView.vue')
    },
    {
      path: '/audit',
      name:'audit',
      component: () => import('../views/AuditView.vue')
    },
    {
      path: '/data',
      name:'data',
      component: () => import('../views/DataManagementView.vue')
    },
    {
      path: '/configuration',
      name:'configuration',
      component: () => import('../views/ConfigurationView.vue')
    }
  ]
})

export default router
