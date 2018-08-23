import Vue from 'vue'
import Router from 'vue-router'
import ToiletAvailability from '@/components/ToiletAvailability'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ToiletAvailability',
      component: ToiletAvailability
    }
  ]
})
