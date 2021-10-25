import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import constRoute from './const/index'
import permissionRoute from './permission/index'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home'
  },
  ...constRoute.data,
  ...permissionRoute.data,
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
