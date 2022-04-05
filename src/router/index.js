import Vue from 'vue';
import VueRouter from 'vue-router';
import EducationView from '@/views/EducationView.vue';
import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import ContactView from '@/views/ContactView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/educacao',
    name: 'Education',
    component: EducationView,
  },
  {
    path: '/trabalho',
    name: 'Jobs',
    component: JobsView,
  },
  {
    path: '/contato',
    name: 'Contact',
    component: ContactView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
