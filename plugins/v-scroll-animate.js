// plugins/v-scroll-animate.js
import vScrollAnimate from '@/directives/v-scroll-animate';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-animate', vScrollAnimate);
});
