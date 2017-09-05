import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import CreatePoll from '@/components/CreatePoll'
import ViewPoll from '@/components/ViewPoll'
import VotePoll from '@/components/VotePoll'
import SignUp from '@/components/SignUp'
import LogIn from '@/components/LogIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/create',
      name: 'Create Poll',
      component: CreatePoll
    },
    {
      path: '/view/:pollId',
      name: 'View Poll',
      component: ViewPoll
    },
    {
      path: '/vote',
      name: 'Vote',
      component: VotePoll
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Log In',
      component: LogIn
    }
    // TODO: Create route for createpoll
  ]
})
