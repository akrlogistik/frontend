import { defineNuxtPlugin } from '#app';
import Marquee from 'vue3-marquee';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Marquee);
});