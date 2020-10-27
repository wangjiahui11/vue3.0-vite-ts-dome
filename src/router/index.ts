import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/@/views/home/index.vue'),
  },
  {
    path: '/mine',
    name: 'Mime',
    component: () => import('/@/views/mine/index.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('/@/views/profile/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
