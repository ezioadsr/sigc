import Vue from 'vue'
import VueRouter from 'vue-router'
import LocalForage from 'localforage'

import auth from 'app/auth/index'
import dashboard from 'app/dashboard/index'

// import {router as errors} from 'src/app/errors'

Vue.use(VueRouter)

function load (component) {
  if (!component) {
    return
  }
  return () => import(`src/${component}`)
}

const configure = (routes) => {
  return routes.map(route => {
    route.component = load(route.component)
    if (route.children) {
      route.children = configure(route.children)
    }
    return route
  })
}

const routes = configure([
  ...auth,
  ...dashboard
  // ...errors
])

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const token = LocalForage.getItem('token')
  console.log(token)
  next()
})

export default router
