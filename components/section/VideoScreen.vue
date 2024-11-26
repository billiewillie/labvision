<script
  setup
  lang="ts">
const isPlaying = ref<boolean>(false)
const video = ref<HTMLVideoElement | null>(null)

function toggleVideo(e: any) {
  console.log(isPlaying.value)
  if (isPlaying.value) {
    isPlaying.value = false
    video.value?.pause()
  } else {
    isPlaying.value = true
    video.value?.play()
  }
  console.log(isPlaying.value)
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
      <div
        v-if="!isPlaying"
        @click="video?.play(); isPlaying = true"
        class="grid place-items-center w-12 h-12 border-black border-2 cursor-pointer rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Icon
          name="mdi:play"
          style="color: black"
          width="40"
          height="40"
          class=""/>
      </div>
    </div>
  </section>
</template>