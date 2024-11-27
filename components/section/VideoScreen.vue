<script
  setup
  lang="ts">
const isPlaying = ref<boolean>(true)
const video = ref<HTMLVideoElement | null>(null)

function toggleVideo(e: any) {
  if (!isPlaying.value) {
    video.value?.play()
  } else {
    video.value?.pause()
  }
  isPlaying.value = !isPlaying.value
}
</script>

<template>
  <section class="py-16 lg:py-24 bg-foreground">
    <div class="container relative">
      <video
        ref="video"
        controls
        playsinline
        @click="toggleVideo($event)"
        poster="/img/first-screen-poster.webp">
        <source
          src="https://labvision.me/video/labvision_postproduction.mp4"
          type="video/mp4">
      </video>
    </div>
  </section>
</template>