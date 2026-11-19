// TESTING NOTIFICATIONS
import { route } from 'quasar/wrappers'
import {
  createMemoryHistory,
  createRouter
} from 'vue-router'

import routes from './routes'

/*
 * If not building with SPA mode, you will want to
 * remove the MemoryHistory import and change the mode here.
 *
 * @quasar/app will automatically inject the router instance in
 * new AstroComponent() and will also inject the Router class
 * so you can easily ensure the routes all work
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (import.meta.env.PROD ? createMemoryHistory : createMemoryHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is for <quasar-cli>
    // it takes care of adding the router instance to the
    // disabledHistory mode used for SSG
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  return Router
})
