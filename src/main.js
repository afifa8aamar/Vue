import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

const app = createApp(App).mount('#app')
app.use(VueRouter)

// import Register from './components/Register/Register';
// import Dashboard from './components/Dashboard/Dashboard';


// const routes = [
//     { path: '', component: Register },
//     // { path: '/bar', component: Dashboard }
//   ]

// const router = new VueRouter({
//     routes,
//     base: "/"
//   });


