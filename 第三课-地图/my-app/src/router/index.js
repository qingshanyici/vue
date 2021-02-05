import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Index from '@/components/Index'
import Application from '@/components/Application'
import Config from '@/components/Config'

Vue.use(Router)

export default new Router({
  routes: [    
    {
      path: "/index",
      name: 'Index',
      component: Index
    },
    {
      path: '/1-1',
      name: 'Home',
      component: Home
    },    
    {
      path: "/application",
      component: Application
    },
    {
      path: "/config",
      component: Config
    }
  ]
})
