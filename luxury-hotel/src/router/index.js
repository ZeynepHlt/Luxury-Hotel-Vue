import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FacilitiesView from '../views/FacilitiesView.vue'
import RoomsView from '../views/RoomsView.vue'
import ContactView from '../views/ContactView.vue'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import RezervationPage from '@/views/RezervationPage.vue'
import RoomDetails from '@/views/RoomDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/facilities',
      name: 'facilities',
      component: FacilitiesView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: RoomsView
    },
    {
      path: '/room-details',
      name: 'room-details',
      component: RoomDetails
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/rezervation',
      name: 'rezervation',
      component: RezervationPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
