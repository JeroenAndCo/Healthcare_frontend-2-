import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    // Each of these routes are loaded asynchronously, when a user first navigates to each corresponding endpoint.
    // The route will load once into memory, the first time it's called, and no more on future calls.
    // This behavior can be observed on the network tab of your browser dev tools.
    {
      path: '/',
      name: 'home',
      component: function (resolve) {
        require(['@/components/landingpage/index.vue'], resolve)
      }
    },
    {
      path: '/login',
      name: 'login',
      component: function (resolve) {
        require(['@/components/login/Login.vue'], resolve)
      }
    },
    {
      path: '/register',
      name: 'register',
      component: function (resolve) {
        require(['@/components/login/Register.vue'], resolve)
      }
    },
    {
      path: '/contactgegevens',
      name: 'contactgegevens',
      component: function (resolve) {
        require(['@/components/landingpage/contactgegevens.vue'], resolve)
      }
    },
    {
      path: '/medewerkers',
      name: 'medewerkers',
      component: function (resolve) {
        require(['@/components/landingpage/medewerkers.vue'], resolve)
      }
    },
    { path: '/patients',
      name: 'beheer',
      component: function (resolve) {
      require(['@/components/Patiëntbeheer/Beheer.vue'], resolve)
      }
    },
    { path: '/patient/:patient_id',
      name: 'patient',
      component: function (resolve) {
        require(['@/components/Patiëntbeheer/Patient.vue'], resolve)
      }
    },
    { path: '/add-patient',
      name: 'patient-add',
      component: function (resolve) {
        require(['@/components/Patiëntbeheer/addPatient.vue'], resolve)
      }
    },
    { path: '/product/:product_id/edit',
      name: 'patient-edit',
      component: function (resolve) {
        require(['@/components/Patiëntbeheer/patientEdit.vue'], resolve)
      }
    },
    { path: '/patient/:patient_id/delete',
      name: 'patient-delete',
      component: function (resolve) {
        require(['@/components/Patiëntbeheer/patientDelete.vue'], resolve)
      }
    },

  ]
})

function guardRoute (to, from, next) {
  // work-around to get to the Vuex store (as of Vue 2.0)
  const auth = router.app.$options.store.state.auth

  if (!auth.isLoggedIn) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default router
