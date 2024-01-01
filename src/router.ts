import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import MeetUsView from './views/MeetUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: ':pathMatch(.*)*',
          redirect: '/'
        }
      ]
    },
    {
      path: '/meet-us',
      name: 'meet',
      component: MeetUsView
    },
  ]
});

export default router
