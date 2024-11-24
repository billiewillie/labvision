<script
  setup
  lang="ts">
const {$gsap} = useNuxtApp()

onMounted(() => {
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: '#fifth-screen',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  })
  tl.to(
    '.fifth-section-item',
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
    id="fifth-screen"
    class="py-16 lg:py-24 text-white">
    <div class="container relative grid lg:grid-cols-3 lg:grid-rows-2 gap-8 lg:gap-16">
      <div class="fifth-section-item relative opacity-0 top-[100px] flex flex-col gap-4 lg:gap-8">
        <h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight">
          <span class="text-primary">Автоматическая</span> подача образцов
        </h2>
        <p>Автоматизация процесса подачи образцов освобождает исследователя от выполнения рутинных процедур загрузки
          образцов при выполнении серийных исследований, а также снижает контакт с потенциально инфицированными
          образцами</p>
        <div class="flex-col flex gap-2">
          <p class="text-primary">Пробы могут быть загружены в:</p>
          <ul class="list-disc pl-4 marker:text-primary">
            <li>Пробирки малых объемов от 1,5 мл</li>
            <li>96-лучные планшеты</li>
            <li>Стандартные цитометрические пробирки</li>
          </ul>
        </div>
      </div>
      <div class="fifth-section-item relative opacity-0 top-[100px] flex flex-col gap-4 lg:gap-8">
        <h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight">
          <span class="text-primary">Компактный</span> размер корпуса
        </h2>
        <p>Проточный цитометр CELLRIVER благодаря компактному размеру может быть размещен в помещении любого размера
          или даже в ламинарно-потоковом шкафу.</p>
        <p>Классический и лаконичный дизайн прибора легко интегрируется в уже существующую лабораторную
          инфраструктуру, обеспечивая высокий уровень удобства и эргономики.</p>
      </div>
      <div class="hidden lg:flex lg:row-span-2"></div>
      <div class="fifth-section-item relative opacity-0 top-[100px] flex flex-col gap-4 lg:gap-8">
        <h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight">
          <span class="text-primary">Низкий уровень</span> шума работы прибора
        </h2>
        <p>Низкий уровень шума во время работы проточного цитометра повышает комфорт работы в лаборатории, особенно
          при размещении нескольких приборов в одном помещении.</p>
      </div>
      <div class="fifth-section-item relative opacity-0 top-[100px] flex flex-col gap-4 lg:gap-8">
        <h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight">
          <span class="text-primary">Волюметрический анализ</span> концентраций клеток
        </h2>
        <p>Технология волюметрического анализа концентраций клеток позволяет получать результаты в абсолютных значений
          без использования дополнительных частиц.</p>
        <p>Это значительно упрощает подготовку образцов и снижает себестоимость исследования.</p>
      </div>
      <NuxtImg
        format="webp"
        class="m-auto xl:w-1/2 xl:absolute xl:left-[70%] xl:top-1/2 xl:translate-y-[-50%]"
        alt="Проточный цитометр CELLRIVER"
        title="Проточный цитометр CELLRIVER"
        src="/img/item-photo-3.webp"/>
    </div>
  </section>
</template>