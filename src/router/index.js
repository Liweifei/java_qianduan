import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/appLogin/appLogin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
