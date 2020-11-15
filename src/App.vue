<template>
  <section :is="getCurrentPage()" />
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
