<script
  setup
  lang="ts">
const {$gsap} = useNuxtApp()
onMounted(() => {
  $gsap.timeline({
    scrollTrigger: {
      trigger: '#third-screen',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  }).to(
    '.third-section-item',
    {
      duration: .5,
      y: -100,
      opacity: 1,
      stagger: .2,
      delay: .2
    }
  )
})
</script>

<template>
  <section
    id="third-screen"
    class="py-16 lg:py-24 text-white">
    <div class="container">
      <ul class="grid grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-16 gap-x-16 lg:gap-x-24">
        <li class="relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]">
          <NuxtImg
            width="72"
            class="w-[72px] h-[80px]"
            src="/icons/service-icon-1.svg"/>
          <p>Произведено в России</p>
        </li>
        <li class="relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]">
          <NuxtImg
            width="72"
            class="w-[72px] h-[80px]"
            src="/icons/service-icon-2.svg"/>
          <p>Тщательный контроль каждого элемента в системе</p>
        </li>
        <li class="relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]">
          <NuxtImg
            width="72"
            class="w-[72px] h-[80px]"
            src="/icons/service-icon-3.svg"/>
          <p>Короткие сроки поставки</p>
        </li>
        <li class="relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]">
          <NuxtImg
            width="72"
            class="w-[72px] h-[80px]"
            src="/icons/service-icon-4.svg"/>
          <p>Программное обеспечение на русском языке</p>
        </li>
        <li class="relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]">
          <NuxtImg
            width="72"
            class="w-[72px] h-[80px]"
            src="/icons/service-icon-5.svg"/>
          <p>Расширенная программа гарантийного обслуживания</p>
        </li>
        <li class="relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]">
          <NuxtImg
            width="72"
            class="w-[72px] h-[80px]"
            src="/icons/service-icon-6.svg"/>
          <p>Наличие склада запчастей в РФ</p>
        </li>
      </ul>
    </div>
  </section>
</template>