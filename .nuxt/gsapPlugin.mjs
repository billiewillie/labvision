// Generated by @hypernym/nuxt-gsap
import { defineNuxtPlugin } from '#app';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const plugin = defineNuxtPlugin(() => {
  if(process.client) {
  gsap.registerPlugin(ScrollTrigger);
  
  
}
  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})
export default plugin;