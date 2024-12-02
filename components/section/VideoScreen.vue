<script
  setup
  lang="ts">
import videojs from "video.js";
import 'video.js/dist/video-js.css'

const isPlaying = ref<boolean>(true)
const video = ref<HTMLVideoElement | null>(null)
const videoPlayer = ref()
let player = null;
onMounted(() => {
  player = videojs(
    videoPlayer.value,
    {
      autoplay: false,
      controls: true,
      poster: '/img/first-screen-poster.webp',
      sources: [
        {
          src: 'https://labvision.me/video/labvision_postproduction.mp4',
          type: 'video/mp4'
        }
      ]
    },
  );
})
</script>

<template>
  <section class="py-16 lg:py-24 bg-foreground">
    <div class="container relative">
      <video
        ref="videoPlayer"
        class="video-js w-full h-auto aspect-video"/>
    </div>
  </section>
</template>

<style>
.video-js .vjs-big-play-button {
  @apply h-24 w-24 rounded-full;
}

.video-js .vjs-big-play-button .vjs-icon-placeholder:before {
  @apply h-auto -translate-y-1/2 top-1/2;
}
</style>