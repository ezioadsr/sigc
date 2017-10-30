import Vue from 'vue'
import VueRouter from 'vue-router'
import Validate from 'src/support/services/validate'

import auth from 'app/auth/router'
import dashboard from 'app/dashboard/router'
import help from 'app/help/router'

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
  ...dashboard,
  ...help
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
  console.log(token)
  // if (token === null) {
  //   next('/login')
  //   return
  // }
  //
  // /**
  //  * If this route are a login route and user are logged
  //  */
  if (to.name === 'auth.index' && token !== null) {
    next({name: 'dashboard.index'})
    return
  }

  if (to.name !== 'auth.index' && token === null) {
    next({name: 'auth.index'})
    return
  }
  //
  // /**
  //  * If user haven't permission to access this router 'to'
  //  */
  // if (!Validate.havePermission(to, token)) {
  //   next({name: 'auth.index'})
  //   return
  // }
  next()
})

export default router
