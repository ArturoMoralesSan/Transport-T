import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import ListPage from '../views/List.vue'
import LoginPage from '../views/Login.vue'
import RegisterPage from '../views/Register.vue'
import MonederoPage from '../views/Monedero.vue'
import RecargarPage from '../views/Recarga.vue'
import RecorridosPage from '../views/Recorridos.vue'


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/lista',
    name: 'List',
    component: ListPage
  },
  {
    path: '/iniciar-sesion',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/registro',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/monedero',
    name: 'monedero',
    component: MonederoPage
  },
  {
    path: '/recargar',
    name: 'recargar',
    component: RecargarPage
  },
  {
    path: '/recorridos',
    name: 'recorridos',
    component: RecorridosPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
