<script
  setup
  lang="ts">
import NAVIGATION from "~/data/navigation";
import {VisuallyHidden} from "radix-vue";

const isModalOpen = ref(false)
</script>

<template>
  <header class="fixed w-full top-0 left-0 flex justify-between items-center shadow-lg z-30 bg-background py-4 xl:py-4 px-4 xl:px-8">
    <NuxtLink
      to="/"
      class="pt-2.5">
      <NuxtImg
        src="/img/logo.svg"
        alt="logo"
        title="labvision"
        height="50"
        width="118"
        class="lg:mx-auto w-[96px] xl:w-[118px]"/>
    </NuxtLink>
    <ul class="hidden 2xl:flex gap-8">
      <li
        v-for="item in NAVIGATION"
        :key="item.id">
        <NuxtLink
          class="text-white hover-underline-animation relative"
          :to="item.href">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
    <Sheet v-model="isModalOpen">
      <SheetTrigger
        as-child
        class="2xl:hidden">
        <BaseRainbowButton class="!py-1 !px-1">
          <Icon
            name="ic:baseline-menu"
            class="w-8 h-8"/>
        </BaseRainbowButton>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <VisuallyHidden>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </VisuallyHidden>
        </SheetHeader>
        <ul class="grid gap-8 py-8 text-center">
          <li
            v-for="item in NAVIGATION"
            :key="item.id">
            <DialogClose>
              <a
                :href="item.href">
                {{ item.title }}
              </a>
            </DialogClose>
          </li>
          <li>
            <DialogClose class="w-full">
              <a
                href="#contacts"
                class="w-full">
                <BaseRainbowButton class="w-full">
                  Связаться с нами
                </BaseRainbowButton>
              </a>
            </DialogClose>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
    <a
      href="/#contacts"
      class="hidden 2xl:flex">
      <BaseRainbowButton>
        Связаться с нами
      </BaseRainbowButton>
    </a>
  </header>
</template>

<style scoped>
.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: hsl(197 100% 40%);
  transition: transform 0.25s ease-out;
  transform-origin: bottom right;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
