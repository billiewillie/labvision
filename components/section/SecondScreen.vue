<script
  setup
  lang="ts">
const {$gsap} = useNuxtApp()

onMounted(() => {
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: '#cellriver',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  })
  tl.to(
    '#second-screen-img',
    {
      opacity: 1,
      left: 0,
      duration: 1,
    }
  )
  tl.to(
    '#second-screen-content',
    {
      opacity: 1,
      right: 0,
      duration: 1,
    },
    '<'
  )
})
</script>

<template>
  <section
    class="py-16 lg:pb-0 lg:pt-24 scroll-mt-16 bg-foreground text-black"
    id="cellriver">
    <div class="container grid xl:grid-cols-2 justify-between">
      <div>
        <NuxtImg
          id="second-screen-img"
          class="relative w-full flex justify-center opacity-0 -left-[200px]"
          format="webp"
          alt="Проточный цитометр CELLRIVER"
          title="Проточный цитометр CELLRIVER"
          src="/img/item-photo-1.webp"/>
      </div>
      <div
        id="second-screen-content"
        class="relative xl:pl-16 opacity-0 flex flex-col gap-6 -right-[200px]">
        <h2 class="~text-[32px]/[50px] font-extralight leading-[1.1]">
          Проточный цитометр <span class="text-primary">CELLRIVER</span>
        </h2>
        <p class="text-[18px]">
          Первый российский проточный цитометр для широкого круга научных исследований, скрининговых исследований
          и фармацевтических разработок*.
        </p>
        <p class="text-[30px] font-light leading-[35px] text-primary">
          Создан с учётом актуальных требований и мировых стандартов отрасли.
        </p>
        <p class="text-[18px]">
          *Модель, разработанная для клинического использования, находится в процессе регистрации.
        </p>
      </div>
    </div>
  </section>
</template>