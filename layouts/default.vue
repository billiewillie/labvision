<template>
  <div class="bg-background flex flex-col min-h-screen justify-between pt-[80px] xl:pt-[92px]">
    <AppHeader />
    <div class="flex-auto min-h-screen bg-background">
      <slot />
    </div>
    <LazyAppFooter />
  </div>
</template>