// authGuard.ts

import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const requireAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const isAuthenticated = true

  if (isAuthenticated) {
    next()
  } else {
    next('/auth')
  }
}
