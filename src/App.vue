<template>
  <div>
    <section :is="currentPage" />
    <portal-target name="popup" />
  </div>
</template>

<script>
import bus from '@/bus';
import routes from './Routes';

export default {
  name: 'App',
  data() {
    return {
      get accessToken() {
        return localStorage.getItem('accessToken');
      },
      // eslint-disable-next-line
      set accessToken(accessToken) {
        if (accessToken === null) {
          return localStorage.removeItem('accessToken');
        }
        return localStorage.setItem('accessToken', accessToken);
      },
    };
  },
  computed: {
    currentPage() {
      const destRoute = routes[window.location.pathname] || routes.DEFAULT;
      if (destRoute.meta.auth) {
        if (this.accessToken === null) {
          window.location.pathname = '/login';
          return false;
        }
      } else if (this.accessToken) {
        return false;
      }
      return destRoute.component;
    },
  },
  created() {
    bus.$on('logged-in', this.logUserIn);
    bus.$on('logout', this.logUserOut);
  },
  methods: {
    logUserIn({ accessToken, user }) {
      localStorage.setItem('user', JSON.stringify(user));
      this.accessToken = accessToken;
    },
    logUserOut() {
      this.accessToken = null;
    },
  },
};
</script>
