import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/views/Order'
import Film from '@/views/Film'
import Center from '@/views/Center'
import Cinema from '@/views/Cinema'
import Commingsoon from '@/views/Film/Commingsoon'
import Nowplaying from '@/views/Film/Nowplaying'
import Detail from '@/views/Film/Detail'
import ContactList from '@/views/Contact/ContactList'
import CreateContact from '@/views/Contact/CreateContact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/contactList',
      component: ContactList,
      children: [
        {
          path: 'createContact',
          component: CreateContact
        },
      ]
    },
    {
      path: '/film',
      component: Film,
      children: [
        {
          path: 'nowplaying',
          component: Nowplaying
        },
        {
          path: 'commingsoon',
          component: Commingsoon
        },
        {
          path: '',
          redirect: '/film/nowplaying'
        },
      ]
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '/detail/:myid',
      component: Detail
    },
    {
      path: '*',
      redirect: '/film'
    },
  ]
})
