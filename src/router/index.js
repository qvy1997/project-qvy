import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index.vue')
    },
    {
      path: '/subject',
      name: 'Subject',
      component: () => import('../views/subjectDetail.vue')
    },
    {
      path: '/quesionair',
      name: 'Quesionair',
      component: () => import('../views/quesionair.vue')
    }
  ]
})
