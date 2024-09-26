import { createRouter, createWebHistory } from 'vue-router';
import TheHome from '@/views/TheHome.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheHome',
      component: TheHome,
      meta: {
        layout: 'default',
      },
    },
  ],
});

export default router;
