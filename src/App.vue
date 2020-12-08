<template>
  <div>
    <section :is="currentPage" />
    <portal-target name="popup" />
  </div>
</template>

<script>
import axios from 'axios';
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
        window.location.pathname = '/';
        return false;
      }
      return destRoute.component;
    },
  },
  created() {
    bus.$on('logged-in', this.logUserIn);
    bus.$on('logout', this.logUserOut);
    bus.$on('updated-user', this.updateUser);
    this.checkAuth();
  },
  methods: {
    logUserIn({ accessToken, user }) {
      localStorage.setItem('user', JSON.stringify(user));
      this.accessToken = accessToken;
    },
    logUserOut() {
      this.accessToken = null;
    },
    updateUser(updatedUser) {
      localStorage.setItem('user', JSON.stringify(updatedUser));
    },
    checkAuth() {
      this.getMyInfos();
      window.setInterval(async () => {
        this.getMyInfos();
      }, 10 * 1000);
    },
    async getMyInfos() {
      try {
        if (!this.accessToken) {
          return;
        }
        const user = await axios.get('http://localhost:3000/api/v1/user/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        localStorage.setItem('user', JSON.stringify(user));
      } catch (_e) {
        // eslint-disable-next-line no-console
        console.log('An error has occurred');
        this.accessToken = null;
      }
    },
  },
};
</script>
