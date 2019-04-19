import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'drag-and-drop-page',
      component: require('@/components/FileDragAndDrop').default
    },
    {
      path: '/match',
      name: 'match-page',
      component: require('@/components/FileMatch').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
