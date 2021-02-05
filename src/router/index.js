import { createRouter, createWebHashHistory } from 'vue-router'
import Register from '../components/Register/Register';
import Dashboard from '../components/Dashboard/Dashboard';

const routes = [
  {
    path: '',
    name: 'Register',
    component: Register
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
