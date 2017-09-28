import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Dashboard from '@/components/Dashboard'
import CreatePoll from '@/components/CreatePoll'
import ViewPoll from '@/components/ViewPoll'
import VotePoll from '@/components/VotePoll'
import SignUp from '@/components/SignUp'
import LogIn from '@/components/LogIn'
import Results from '@/components/Results'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
      path: '/results:pollId',
      name: 'View Results',
      component: Results
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
