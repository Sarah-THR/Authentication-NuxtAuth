import { defineNuxtRouteMiddleware } from '#app'

export default defineNuxtRouteMiddleware(async (to, from) => {
    const { status } = await useAuth()
  
    if (to.path === '/auth/signin') {
      return
    }
  
    if (status.value !== 'authenticated') {
      return navigateTo('/auth/signin')
    }
  })
  
