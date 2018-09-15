import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { i18n } from './i18n';
import VueReactiveCookie from 'vue-reactive-cookie';
import StoryblokVue from 'storyblok-vue';
import deviceQueries from './plugins/device-queries';
import storyblokLivePreview from '@/mixins/StoryBlokLive';

Vue.config.productionTip = false;

Vue.use(VueReactiveCookie);
Vue.use(StoryblokVue);

Vue.use(deviceQueries, {
  phone: 'max-width: 567px',
  tablet: 'min-width: 568px',
  mobile: 'max-width: 1024px',
  laptop: 'min-width: 1025px',
  desktop: 'min-width: 1280px',
  monitor: 'min-width: 1448px'
});

new Vue({
  router,
  store,
  i18n,
  mixins: [storyblokLivePreview],
  render: h => h(App)
}).$mount('#app');
