<script
  setup
  lang="ts">
const {$gsap} = useNuxtApp()

onMounted(() => {
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: '#areas-screen',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  })
  tl.to(
    '.areas-screen-item-left',
    {
      duration: .5,
      x: 100,
      opacity: 1,
      stagger: .2,
      delay: .2
    }
  )
  tl.to(
    '.areas-screen-item-right',
    {
      duration: .5,
      x: -100,
      opacity: 1,
      stagger: .2,
    },
    '<'
  )
  tl.to(
    '.areas-screen-img',
    {
      duration: .5,
      y: -100,
      opacity: 1,
    },
    '<'
  )
  tl.to(
    '.areas-screen-title',
    {
      y: -50,
      delay: -.3,
      opacity: 1,
      duration: .5,
    },
  )
})
</script>

<template>
  <section
    id="areas-screen"
    class="py-16 lg:pt-24 bg-foreground text-black">
    <div class="container">
      <h2 class="areas-screen-title relative opacity-0 top-[50px] lg:text-center mb-12 ~text-[40px]/[50px] leading-[1.1] font-extralight">
        Области применения
      </h2>
      <div class="grid lg:grid-cols-3 gap-8">
        <div class="xl:pr-12 xl:order-1 xl:pt-24">
          <ul class="flex flex-col gap-8 xl:text-right">
            <li class="areas-screen-item-left opacity-0 relative -left-[100px] flex gap-4">
              <p class="flex-auto order-2 xl:order-1">Иммунофенотипирование (в том числе иммунный статус)</p>
              <div class="xl:order-2 relative bottom-[8px] bg-[url('/icons/check.svg')] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div>
            </li>
            <li class="areas-screen-item-left opacity-0 relative -left-[100px] flex gap-4">
              <p class="flex-auto order-2 xl:order-1">Разработка клеточных продуктов</p>
              <div class="relative xl:order-2 bottom-[8px] bg-[url('/icons/check.svg')] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div>
            </li>
            <li class="areas-screen-item-left opacity-0 relative -left-[100px] flex gap-4">
              <p class="flex-auto order-2 xl:order-1">Фундаментальные исследования в иммунологии</p>
              <div class="relative xl:order-2 bottom-[8px] bg-[url('/icons/check.svg')] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div>
            </li>
          </ul>
        </div>
        <div class="order-3 xl:order-2 flex justify-center">
          <NuxtImg
            format="webp"
            class="areas-screen-img w-full opacity-0 relative top-[100px]"
            alt="Проточный цитометр CELLRIVER"
            title="Проточный цитометр CELLRIVER"
            src="/img/item-photo-4.webp"/>
        </div>
        <div class="xl:pl-12 xl:order-3 xl:pt-24">
          <ul class="flex flex-col gap-8">
            <li class="areas-screen-item-right opacity-0 relative -right-[100px] flex gap-4">
              <div class="relative bottom-[8px] bg-[url('/icons/check.svg')] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div>
              <p class="flex-auto">Исследование опухолевых клеток</p>
            </li>
            <li class="areas-screen-item-right opacity-0 relative -right-[100px] flex gap-4">
              <div class="relative bottom-[8px] bg-[url('/icons/check.svg')] bg-contain rounded-full w-[40px] h-[40px] border border-primary flex items-center flex-shrink-0 justify-center"></div>
              <p class="flex-auto">Разработка и тестирование CAR&#8209;T продуктов</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>