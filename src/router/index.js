import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo_intro.vue'
import Demo2 from '../views/Demo2_data.vue'
import Demo3 from '../views/Demo3_computed.vue'
import Demo4 from '../views/Demo4_binding.vue'
import Demo5 from '../views/Demo_form.vue'
import Demo6 from '../views/Demo_slot.vue'
import Demo7 from '../views/Demo_condition.vue'
import Demo8 from '../views/Demo_loop'
import Demo9 from '../views/Demo_lifecycle.vue'
import Demo10 from '../views/Demo_variable.vue'
import Demo11 from '../views/Demo_ref.vue'
import Demo12 from '../views/Demo_filter.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/demo2',
    name: 'Demo2',
    component: Demo2
  },
  {
    path: '/demo3',
    name: 'Demo3',
    component: Demo3
  },
  {
    path: '/demo4',
    name: 'Demo4',
    component: Demo4
  },
  {
    path: '/demo5',
    name: 'Demo5',
    component: Demo5
  },
  {
    path: '/demo6',
    name: 'Demo6',
    component: Demo6
  },
  {
    path: '/demo7',
    name: 'Demo7',
    component: Demo7
  },
  {
    path: '/demo8',
    name: 'Demo8',
    component: Demo8
  },
  {
    path: '/demo9',
    name: 'Demo9',
    component: Demo9
  },
  {
    path: '/demo10',
    name: 'Demo10',
    component: Demo10
  },
  {
    path: '/demo11',
    name: 'Demo11',
    component: Demo11
  },
  {
    path: '/demo12',
    name: 'Demo',
    component: Demo12
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
