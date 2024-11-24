<script
  setup
  lang="ts">
const {$gsap} = useNuxtApp()

onMounted(() => {
  $gsap.timeline({
    scrollTrigger: {
      trigger: '#service',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  }).to(
    '.service-section-item',
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
    id="service"
    class="py-16 lg:py-24 scroll-mt-16 bg-foreground text-black">
    <div class="container flex flex-col gap-12">
      <h2 class="text-[50px] leading-[1.1] font-extralight">Технический сервис</h2>
      <ul class="grid grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-16 gap-x-8 lg:gap-x-16">
        <li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">
          <NuxtImg
            width="72"
            class="w-[72px] h-[80px]"
            src="/icons/service-icon-7.svg"/>
          <h3 class="text-primary text-[18px]">Оперативная техническая поддержка</h3>
          <p class="~text-[14px]/[16px]">оборудование и запчасти для проточных цитометров  в наличии на складе в Санкт&#8209;Петербурге</p>
        </li>
        <li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">
          <NuxtImg
            width="72"
            class="w-[72px] h-[80px]"
            src="/icons/service-icon-9.svg"/>
          <h3 class="text-primary text-[18px]">Быстрая реакция на запросы</h3>
          <p class="~text-[14px]/[16px]">наличие квалифицированной команды технической поддержки позволяет быстро
            реагировать
            на возможные проблемы с оборудованием, что критично для лабораторий, где время может играть решающую
            роль.</p>
        </li>
        <li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">
          <NuxtImg
            width="72"
            class="w-[72px] h-[80px]"
            src="/icons/service-icon-10.svg"/>
          <h3 class="text-primary text-[18px]">Консультации и обучение</h3>
          <p class="~text-[14px]/[16px]">техническая поддержка не только решает проблемы,
            но и предоставляет консультации по правильной эксплуатации и обслуживанию проточных цитометров,
            что помогает предотвратить поломки.</p>
        </li>
        <li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">
          <NuxtImg
            width="72"
            class="w-[72px] h-[80px]"
            src="/icons/service-icon-11.svg"/>
          <h3 class="text-primary text-[18px]">Профилактика неисправностей</h3>
          <p class="~text-[14px]/[16px]">регулярные проверки и профилактическое обслуживание, проводимые техническими
            специалистами, помогают выявлять потенциальные проблемы до того, как они приведут к серьезным сбоям.</p>
        </li>
        <li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">
          <NuxtImg
            width="72"
            class="w-[72px] h-[80px]"
            src="/icons/service-icon-12.svg"/>
          <h3 class="text-primary text-[18px]">Снижение затрат для лаборатории</h3>
          <p class="~text-[14px]/[16px]">запас комплектующих на складе компании-производителя в России помогает
            избежать
            дополнительных расходов на экстренные заказы и доставку из-за рубежа.</p>
        </li>
        <li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">
          <NuxtImg
            width="72"
            class="w-[72px] h-[80px]"
            src="/icons/service-icon-8.svg"/>
          <h3 class="text-primary text-[18px]">Расширенная программа гарантийного обслуживания</h3>
        </li>
      </ul>
    </div>
  </section>
</template>