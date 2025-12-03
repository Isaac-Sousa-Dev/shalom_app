import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/student/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '@/stores/auth'
import RegisterView from '@/views/RegisterView.vue'
import SchoolOfDisciplesView from '@/views/student/SchoolOfDisciplesView.vue'
import ClassroomView from '@/views/student/ClassroomView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/student/school-of-disciples',
      name: 'school-of-disciples',
      component: SchoolOfDisciplesView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/student/classroom/:id',
      name: 'aula',
      component: ClassroomView,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {

  const authStore = useAuthStore();
  // authStore.checkAuth();
  console.log(authStore.isAuthenticated);
  if (to.path === '/login' && authStore.isAuthenticated) {
    next({ name: 'home' })
  } else if (to.path === '/home' && !authStore.isAuthenticated) {
    next({ name: 'login' })
  } else {
    next();
  }
})

export default router
