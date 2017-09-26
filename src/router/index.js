import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/page/surface/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'List',
      component: List,
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
  ]
})
