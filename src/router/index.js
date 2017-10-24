import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/page/surface/list'
import Blog from '@/page/surface/blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'List',
      component: List,
    },
    {
      path: '/blog:id',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
  ]
})
