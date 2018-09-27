import Vue from 'vue'
import Router from 'vue-router'
import ToiletAvailability from '@/components/ToiletAvailability'
import ChatBot from '@/components/chatBot/ChatBot'

Vue.use(Router)

import App from '@/App.vue'

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'ToiletAvailability',
    //   component: ToiletAvailability
    // }
    {
      path: '/app',
      name: 'App',
      component: App,
      children: [{
        path: 'toilet',
        name: 'ToiletAvailability',
        component: ToiletAvailability
      },
      {
        path: 'toilet-bot',
        name: 'ChatBot',
        component: ChatBot
      }
    ]
    }
  ]
})
