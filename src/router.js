import Vue from 'vue'
import VueRouter from 'vue-router'

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

export default new VueRouter({
  routes: routes
})
