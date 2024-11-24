<script
  setup
  lang="ts">
import Lenis from 'lenis'
import Toaster from '@/components/ui/toast/Toaster.vue'

const {$gsap, $ScrollTrigger} = useNuxtApp()

onMounted(() => {
  const lenis: Lenis = new Lenis()

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on('scroll', $ScrollTrigger.update);

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  $gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  $gsap.ticker.lagSmoothing(0);
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator/>
    <NuxtPage/>
  </NuxtLayout>
  <Toaster/>
</template>