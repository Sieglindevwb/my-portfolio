import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ProjectPage from './components/ProjectPage.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
