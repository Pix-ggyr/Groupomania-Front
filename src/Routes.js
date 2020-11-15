import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import Forum from './pages/Forum.vue';

export default {
  DEFAULT: Login,
  '/home': Home,
  '/login': Login,
  '/profile': Profile,
  '/forum': Forum,
};
