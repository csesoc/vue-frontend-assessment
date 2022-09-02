import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../components/LoginForm.vue'
import ProfileCard from '../components/ProfileCard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: LoginForm },
    { path: '/profile', name: 'Profile', component: ProfileCard }
  ]
})

export default router
