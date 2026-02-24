import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/student/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '@/stores/auth'
import RegisterView from '@/views/RegisterView.vue'
import SchoolOfDisciplesView from '@/views/student/SchoolOfDisciplesView.vue'
import ClassroomView from '@/views/student/ClassroomView.vue'
import SiteView from '@/views/SiteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'site',
      component: SiteView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
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
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: { name: 'home' },
      // component: () => import('../views/NotFoundView.vue'),
    }
  ],
})

router.beforeEach((to, from, next) => {

  const authStore = useAuthStore();
  // authStore.checkAuth();

  console.log(from, 'from');

  // Se rota não encontrada
  if (to.matched.length === 0) {
    if (from.name) {
      return next(from.fullPath)
    } else {
      return next({ name: 'home' })
    }
  }
  console.log(to.path, authStore.isAuthenticated);
  if (to.path === '/login' && authStore.isAuthenticated) {
    console.log('redirecting to home');
    next({ name: 'home' })
  } else if (to.path === '/home' && !authStore.isAuthenticated) {
    next({ name: 'login' })
  } else {
    next();
  }
})

export default router
