import Vue from 'vue'
import Router from 'vue-router'
import Scanner from '@/components/Scanner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Scanner',
      component: Scanner
    }
  ]
})
