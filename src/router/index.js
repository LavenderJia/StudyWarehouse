import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/centeredlogin.vue'
import Homepage from '../components/homepage.vue'
import Welcome from '../components/welcome.vue'
import Register from '../components/register'
Vue.use(Router)
let component1 = {
  template: `<div class="title">待补充...</div>`
}
let component2 = {
  template: `<div class="title">Page 2</div>`
}
let component3 = {
  template: `<div class="title">Page 3</div>`
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/homepage',
      name: 'Homepage',
      component: Homepage,
      children: [
        {
          path: '/page1',
          name: 'Page 1',
          component: component1
        },
        {
          path: '/page2',
          name: 'Page 2',
          component: component2
        },
        {
          path: '/page3',
          name: 'Page 3',
          component: component3
        },
        { path: '/', redirect: '/page1' }
      ]
    }
  ]
})
