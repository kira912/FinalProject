import Vue from 'vue'
import Router from 'vue-router'
import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Entity from './Entity'
// Containers
// import Full from '@/containers/Full'

// Views
// import Dashboard from '@/views/Dashboard'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (router.app.$root.user) next('/dashboard')
        else next()
      }
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/entity',
      component: Entity
    }
  ]
})

export default router
