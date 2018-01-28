import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Transaction from '@/components/Transaction'
import Pay from '@/components/Pay'
import Account from '@/components/Account'
import CreateAccount from '@/components/CreateAccount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/:username',
      component: Transaction,
      props: true
    },
    {
      path: '/user/:username/pay',
      component: Pay,
      props: true
    },
    {
      path: '/user/:username/account',
      component: Account,
      props: true
    },
    {
      path: '/signup',
      component: CreateAccount
    }
  ],
  mode: 'history'
})
