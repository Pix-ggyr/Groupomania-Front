<template>
  <header :is="responsiveHeader()" />
</template>

<script>
import CustomHeaderDesktop from './CustomHeaderDesktop.vue';
import CustomHeaderMobile from './CustomHeaderMobile.vue';

export default {
  name: 'Header',
  methods: {
    responsiveHeader() {
      return this.$mq === 'sm' ? CustomHeaderMobile : CustomHeaderDesktop;
    },
  },
};
</script>
