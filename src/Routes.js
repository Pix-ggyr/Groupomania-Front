import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import Profile from '@/pages/Profile.vue';
import Forum from '@/pages/Forum.vue';
import Logout from '@/pages/Logout.vue';

export default {
  DEFAULT: Login,
  '/': {
    component: Home,
    meta: {
      auth: true,
    },
  },
  '/home': {
    component: Home,
    meta: {
      auth: true,
    },
  },
  '/login': {
    component: Login,
    meta: {
      auth: false,
    },
  },
  '/logout': {
    component: Logout,
    meta: {
      auth: true,
    },
  },
  '/profile': {
    component: Profile,
    meta: {
      auth: true,
    },
  },
  '/forum': {
    component: Forum,
    meta: {
      auth: true,
    },
  },
};
