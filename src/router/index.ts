/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { requireAuth } from './authGuard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: setupLayouts
})

// Defina suas rotas aqui
router.beforeEach((to, from, next) => {
  if (to.name === '/') {
    requireAuth(to, from, next)
  } else {
    next()
  }
})

export default router
