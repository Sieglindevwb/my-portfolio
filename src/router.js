import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ProjectPage from './components/ProjectPage.vue';
import AboutPage from './components/AboutPage.vue';
import ContactPage from './components/ContactPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectPage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
