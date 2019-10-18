import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Integration from './views/Integration.vue'
import IntegrationLayout from './views/IntegrationLayout.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/integration',
      component: IntegrationLayout,
      children: [
        {
          path: '',
          redirect: 'dashboard/main'
        },
        {
          path: '*',
          component: Integration
        }
      ]
    }
  ]
})
