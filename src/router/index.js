import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AppDetail from '../views/AppDetail.vue'
// import './axios';
Vue.use(VueRouter);
import store from '@/store';
const isAuthenticated = store.getters['isLoggedIn'];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    beforeEnter: (to, from, next) => {
      if(!isAuthenticated){ 
        next()
      }else{
        next({name: 'Home'})
      }
      },
    },
    {
      path: '/dashboard/details',
      name: 'AppDetail',
      component: AppDetail,
    },
];

const router = new VueRouter({
  mode:'history',
  routes,
});

export default router;
