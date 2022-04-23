import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'

import HomeView from '../views/HomeView.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import MyCompte from '../views/dashboard/MyCompte.vue'
import Eleves from '../views/dashboard/Eleves.vue'
import Eleve from '../views/dashboard/Eleve.vue'
import AddEleve from '../views/dashboard/AddEleve.vue'
import EditeEleve from '../views/dashboard/EditeEleve.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/my-compte',
    name: 'MyCompte',
    component: MyCompte,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/eleves',
    name: 'Eleves',
    component: Eleves,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/eleves/:id',
    name: 'Eleve',
    component: Eleve,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/eleves/add',
    name: 'AddEleve',
    component: AddEleve,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/eleves/:id/edite',
    name: 'EditeEleve',
    component: EditeEleve,
    meta: {
      requireLogin: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/log-in')
  }else{
    next()
  }
})

export default router
