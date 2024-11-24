<template>
  <section
    id="contacts"
    class="relative z-0 overflow-hidden py-16 lg:py-24">
    <video
      class="hidden lg:flex absolute z-10 w-full left-0 top-0 h-full object-cover object-center"
      loop
      muted
      autoplay
      playsinline
      poster="/img/first-screen-poster.webp">
      <source
        src="/video/video-2.mp4"
        type="video/mp4">
    </video>
    <div class="absolute z-20 w-full left-0 top-0 h-full bg-gradient-to-r from-black from-35% to-black lg:to-black/50"></div>
    <div class="container z-30 grid lg:grid-cols-2 relative">
      <div class="flex justify-center lg:justify-start">
        <BaseContactForm/>
      </div>
    </div>
  </section>
</template>