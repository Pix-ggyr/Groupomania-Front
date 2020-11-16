import Vue from 'vue';
import PortalVue from 'portal-vue';
import App from './App.vue';
import Store from './store';

Vue.config.productionTip = false;
Vue.use(PortalVue, {
  portalName: 'portal',
  portalTargetName: 'portal-target',
});

new Vue({
  Store,
  render: (h) => h(App),
}).$mount('#app');
