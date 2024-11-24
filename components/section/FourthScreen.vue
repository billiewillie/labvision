<script
  setup
  lang="ts">
import {onMounted, watch} from "vue";

const {$gsap, $ScrollTrigger} = useNuxtApp()
const {$viewport} = useNuxtApp()

watch($viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log('Breakpoint updated:', oldBreakpoint, '->', newBreakpoint)
})
onMounted(() => {
  if (
    $viewport.breakpoint.dep?.computed.value === 'desktopMedium'
    || $viewport.breakpoint.dep?.computed.value === 'desktopWide'
  ) {
    console.log($viewport)
    $gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});

    const images = $gsap.utils.toArray('.panel:not(.purple)');

    images.forEach((image, i) => {
      const tl = $gsap.timeline({
        scrollTrigger: {
          trigger: ".black",
          start: () => "top -" + (window.innerHeight * (i + 0.5)),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        }
      })
      tl.to(image, {height: 0});
    });

    $gsap.set(".panel-text", {zIndex: (i, target, targets) => targets.length - i});

    const texts = $gsap.utils.toArray('.panel-text');

    texts.forEach((text, i) => {
      const tl = $gsap.timeline({
        scrollTrigger: {
          trigger: ".black",
          start: () => "top -" + (window.innerHeight * i),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        }
      })

      tl
        .to(text, {duration: 0.33, opacity: 1, y: "20%"})
        .to(text, {duration: 0.33, opacity: 0, y: "0%"}, 0.66)
    })

    $ScrollTrigger.create({
      trigger: ".black",
      scrub: true,
      pin: true,
      start: () => "top top",
      end: () => "+=" + ((images.length + 1) * window.innerHeight),
      invalidateOnRefresh: true,
    });
  }
})
</script>

<template>
  <section
    id="fourth-screen"
    class="bg-foreground text-black py-16 lg:pb-24">
    <div class="black container grid grid-cols-1 xl:grid-cols-2 gap-28 xl:gap-4 justify-between">
      <div class="text-wrap grid gap-12 relative xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 w-full xl:h-[80vh]">
        <div class="panel-text xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10">
          <h2 class="~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8">
            <span class="text-primary">Современное и надежное</span> конструктивное решение
          </h2>
          <p class="text-[20px]">Конструкция прибора соответствует всем самым современным тенденциям и
            стандартам и
            ориентирована на
            максимальную гибкость в решении различных исследовательских и рутинных задач</p>
        </div>
        <div class="panel-text xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10">
          <h2 class="~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8">
            Доступные конфигурации проточного цитометра <span class="text-primary">CELLRIVER</span>
          </h2>
          <ul class="list-disc pl-4 marker:text-primary">
            <li>2 лазера, 6 флюоресцентных каналов детекции</li>
            <li>3 лазера, 14 флюоресцентных каналов детекции</li>
          </ul>
        </div>
        <div class="panel-text xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10">
          <h2 class="~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8">
            Лавинные фотодиоды в качестве фотодетекторов
          </h2>
          <ul class="list-disc pl-4 marker:text-primary">
            <li>максимально высокая чувствительность</li>
            <li>низкий уровень электронного шума</li>
            <li>напряжение на детекторах фиксировано</li>
            <li>нет необходимости настраивать специфическое для образцов различных типов напряжение</li>
            <li>абсолютная линейность в широком диапазоне</li>
            <li>предсказуемая флюоресцентная компенсация независимо от расположения популяции</li>
          </ul>
        </div>
        <div class="panel-text xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10">
          <h2 class="~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8">
            Шприцевой насос, управляющий подачей образца
          </h2>
          <ul class="list-disc pl-4 marker:text-primary">
            <li>низкий уровень шума</li>
            <li>плавная подача образца</li>
            <li>
              волюметрический анализ абсолютных концентраций без использования дополнительных  референсных
               частиц
            </li>
          </ul>
        </div>
      </div>
      <div class="p-wrap relative overflow-hidden top-0 h-[50vh] xl:h-[90vh] flex flex-col gap-8">
        <NuxtImg
          format="webp"
          class="panel absolute xl:top-[160px] left-0 w-full h-full object-cover"
          alt="Проточный цитометр CELLRIVER"
          title="Проточный цитометр CELLRIVER"
          src="/img/item-photo-2.webp"/>
        <NuxtImg
          format="webp"
          class="panel absolute xl:top-[160px] left-0 w-full h-full z-10 object-cover"
          alt="Проточный цитометр CELLRIVER"
          title="Проточный цитометр CELLRIVER"
          src="/img/item-photo-6.jpg"/>
        <NuxtImg
          format="webp"
          class="panel absolute xl:top-[160px] left-0 w-full h-full object-cover"
          alt="Проточный цитометр CELLRIVER"
          title="Проточный цитометр CELLRIVER"
          src="/img/item-photo-2.webp"/>
        <NuxtImg
          format="webp"
          class="panel purple absolute xl:top-[160px] left-0 w-full h-full z-10 object-cover"
          alt="Проточный цитометр CELLRIVER"
          title="Проточный цитометр CELLRIVER"
          src="/img/item-photo-6.jpg"/>
        <!--          <div class="flex flex-col md:flex-row md:items-center gap-4 justify-start">-->
        <!--            <p>Техническая спецификация</p>-->
        <!--            <BaseRainbowButton-->
        <!--              variant="black">-->
        <!--              Скачать PDF-->
        <!--            </BaseRainbowButton>-->
        <!--          </div>-->
      </div>
    </div>
  </section>
</template>