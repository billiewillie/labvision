<script
  setup
  lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="text-white py-12">
    <div class="container flex justify-end">
      <span class="opacity-60 text-[18px] font-extralight">
        Labvision {{ year }} ©
      </span>
    </div>
  </footer>
</template>
