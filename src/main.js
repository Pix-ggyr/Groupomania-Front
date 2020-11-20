import Vue from 'vue';
import PortalVue from 'portal-vue';
import App from './App.vue';
import Store from './store';
// eslint-disable-next-line
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    sm: 780,
    md: 1250,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm',
});

Vue.config.productionTip = false;
Vue.use(PortalVue, {
  portalName: 'portal',
  portalTargetName: 'portal-target',
});

new Vue({
  Store,
  render: (h) => h(App),
}).$mount('#app');
