import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ProjectPage from './components/ProjectPage.vue';
import AboutPage from './components/AboutPage.vue';
import ContactPage from './components/ContactPage.vue';
import WeatherAppPage from './components/projects/WeatherAppPage.vue';
import TaskTracker from './components/projects/TaskTracker.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { showNavbar: false },
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectPage,
    meta: { showNavbar: true },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    meta: { showNavbar: true },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
    meta: { showNavbar: true },
  },
  {
    path: '/projects/weatherApp',
    name: 'weatherApp',
    component: WeatherAppPage,
    meta: { showNavbar: true },
  },
  {
    path: '/projects/taskTracker',
    name: 'taskTracker',
    component: TaskTracker,
    meta: { showNavbar: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
