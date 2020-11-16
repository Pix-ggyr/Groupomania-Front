<template>
  <div>
    <section :is="getCurrentPage()" />
    <portal-target name="popup" />
  </div>
</template>

<script>
import routes from './Routes';

export default {
  name: 'App',
  methods: {
    getCurrentPage() {
      return routes[window.location.pathname] || routes.DEFAULT;
    },
  },
};
</script>
