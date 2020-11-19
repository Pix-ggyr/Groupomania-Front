import Vue from 'vue';
import VueMq from '../node_modules/vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1250,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm',
});
