import Vue from 'vue'
import VueRouter from 'vue-router'
import Validate from 'src/support/services/validate'

import auth from 'app/auth/routes'
import dashboard from 'app/dashboard/routes'
import help from 'app/help/routes'

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
  ...help,
  ...auth,
  ...dashboard
  // ...errors
])

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach(async (to, from, next) => {
  let token = await Validate.isLogged()
  // /**
  //  * If user not logged yet
  //  */
  //

  if (to.name === null) {
    next({name: 'dashboard.index'})
    return
  }
  console.log(to.name)

  if (token === null) {
    next({name: 'auth.login'})
    return
  }

  /**
   * If this route are a login route and user are logged
   */
  if (to.name === 'auth.login' && token !== null) {
    next({name: 'dashboard.index'})
    return
  }

  if (to.name !== 'auth.login' && token === null) {
    next({name: 'auth.login'})
    return
  }

  /**
   * If user haven't permission to access this router 'to'
   */
  if (!Validate.havePermission(to, token)) {
    next({name: 'auth.login'})
    return
  }
  next()
})

export default router
