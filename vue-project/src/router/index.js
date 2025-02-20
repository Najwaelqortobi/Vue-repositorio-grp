
import { createRouter, createWebHistory } from 'vue-router'
import TheWelcomeView from '../views/TheWelcomeView.vue';
import DirectivasView from '../views/DirectivasView.vue';
import HomeView from '../views/HomeView.vue';
import ParteDView from '../views/ParteDView.vue';
import Profile from '../views/Profile.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/welcome'
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: TheWelcomeView,
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/parte-a',
      name: 'Parte A',
      component: () => import('../views/ParteAView.vue'),
    },
    {
      path: '/directivas',
      name: 'Directivas',
      component: DirectivasView,
    },
    {
      path: '/Composition-Option API',
      name: 'Composition-Option API',
      component: () => import('../views/ParteCView.vue'),
    },
    {
      path: '/component communication',
      name: 'component communication',
      component: ParteDView
    },
    {
    path : '/directivas/ref-computed',
    name : 'Ref y Computed',
    component:DirectivasView,
    },
    {
      path : '/directivas/reactive',
      name : 'Reactive',
      component:DirectivasView,
    },
    { 
      path: '/directivas/provide',
      name : 'Provide',
      component:DirectivasView,

    },
    { path: '/directivas/v-for',
      name : 'v-for',
      component : DirectivasView,
    },
    {
      path : '/directivas/v-html',
      name : 'v-html',
      component : DirectivasView,
    },
    {
      path : '/profile/id:',
      component : Profile,
    }
  ],
});

export default router
