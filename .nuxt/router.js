import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _115dd3cb = () => interopDefault(import('../pages/users.vue' /* webpackChunkName: "pages/users" */))
const _a5b96abc = () => interopDefault(import('../pages/users/one.vue' /* webpackChunkName: "pages/users/one" */))
const _74ea08f0 = () => interopDefault(import('../pages/users/two.vue' /* webpackChunkName: "pages/users/two" */))
const _562943f6 = () => interopDefault(import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _68180cd6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _48e49e26 = () => interopDefault(import('../pages/_slug/comments.vue' /* webpackChunkName: "pages/_slug/comments" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/users",
      component: _115dd3cb,
      name: "users",
      children: [{
        path: "one",
        component: _a5b96abc,
        name: "users-one"
      }, {
        path: "two",
        component: _74ea08f0,
        name: "users-two"
      }, {
        path: ":id?",
        component: _562943f6,
        name: "users-id"
      }]
    }, {
      path: "/",
      component: _68180cd6,
      name: "index"
    }, {
      path: "/:slug/comments",
      component: _48e49e26,
      name: "slug-comments"
    }],

    fallback: false
  })
}
