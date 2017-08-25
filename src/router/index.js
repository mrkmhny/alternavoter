import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/layouts/Home'
import ViewPoll from '@/layouts/ViewPoll'
import Dashboard from '@/layouts/Dashboard'
import EditPoll from '@/layouts/EditPoll'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pollview',
      name: 'ViewPoll',
      component: ViewPoll
    },
    {
      path: '/dash',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/edit',
      name: 'EditPoll',
      component: EditPoll
    }
  ]
})
