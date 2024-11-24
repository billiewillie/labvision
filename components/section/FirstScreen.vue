<script
  setup
  lang="ts">
const {$gsap} = useNuxtApp()
onMounted(() => {
  $gsap.to(
    '#first-screen-title',
    {
      opacity: 1,
      duration: .5,
      y: 50,
      delay: .2
    }
  )
  $gsap.to(
    '#first-screen-subtitle',
    {
      opacity: 1,
      duration: .5,
      y: -50,
      delay: .6
    }
  )
})
</script>

<template>
  <section class="relative">
    <video
      class="absolute z-10 w-full left-0 top-0 h-full object-cover object-center"
      loop
      muted
      autoplay
      playsinline
      poster="/img/first-screen-poster.webp">
      <source
        src="/video/video-1.mp4"
        type="video/mp4">
    </video>
    <div class="absolute z-20 w-full left-0 top-0 h-full bg-black/60"></div>
    <div class="container h-[calc(100vh-90px)] relative z-20 flex flex-col gap-4 lg:gap-4 items-center justify-center">
      <h1
        id="first-screen-title"
        class="~text-[22px]/[30px] relative opacity-0 -top-[50px] md:~text-[40px]/[60px] lg:~text-[60px]/[70px] xl:text-[88px] uppercase font-bold text-white/70 leading-none text-center">
        проточная цитометрия
      </h1>
      <p
        id="first-screen-subtitle"
        class="~text-[18px]/[24px] top-[50px] relative opacity-0 md:~text-[30px]/[40px] lg:~text-[40px]/[50px] xl:text-[62px] uppercase font-light text-white/70 leading-none text-center">
        без границ и ограничений
      </p>
    </div>
  </section>
</template>