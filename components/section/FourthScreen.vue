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
    $viewport.breakpoint.dep?.computed.value === 'desktop'
    || $viewport.breakpoint.dep?.computed.value === 'desktopMedium'
    || $viewport.breakpoint.dep?.computed.value === 'desktopWide'
  ) {
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
      });
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
        .to(text, {duration: 0.33, opacity: 1, y: "30%"})
        .to(text, {duration: 0.33, opacity: 0, y: "0%"}, 0.66)
    })

    $ScrollTrigger.create({
      trigger: ".black",
      scrub: true,
      pin: true,
      start: () => "top 130",
      end: () => "+=" + ((images.length + 1) * window.innerHeight),
      invalidateOnRefresh: true,
    });
  }
})
</script>

<template>
  <section
    id="fourth-screen"
    class="bg-foreground text-black py-16">
    <div class="black container grid grid-cols-1 xl:grid-cols-2 gap-28 xl:gap-8 justify-between">
      <div class="text-wrap grid gap-12 relative xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 w-full xl:h-[80vh]">
        <div class="panel-text bg-foreground xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-20 xl:translate-y-[80%] z-10">
          <h2 class="~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8">
            <span class="text-primary">Современное и надежное</span> конструктивное решение
          </h2>
          <p class="text-[20px]">Конструкция прибора соответствует всем самым современным тенденциям и
            стандартам и
            ориентирована на
            максимальную гибкость в решении различных исследовательских и рутинных задач</p>
        </div>
        <div class="panel-text bg-foreground xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10">
          <h2 class="~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8">
            Доступные конфигурации проточного цитометра <span class="text-primary">CELLRIVER</span>
          </h2>
          <ul class="flex flex-col gap-4">
            <li class="flex gap-4 items-center">
              <NuxtImg
                class="object-contain"
                width="42"
                height="42"
                src="/icons/check.svg"/>
              <p>2 лазера, 6 флюоресцентных каналов детекции</p>
            </li>
            <li class="flex gap-4 items-center">
              <NuxtImg
                class="object-contain"
                width="42"
                height="42"
                src="/icons/check.svg"/>
              <p>3 лазера, 14 флюоресцентных каналов детекции</p>
            </li>
          </ul>
        </div>
        <div class="panel-text bg-foreground xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10 flex flex-col xl:flex-row gap-8">
          <div class="basis-1/2">
            <h2 class="~text-[18px]/[20px] leading-[1.1] mb-8 text-primary">
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
          <div class="basis-1/2">
            <h2 class="~text-[18px]/[20px] leading-[1.1] mb-8 text-primary">
              Шприцевой насос, управляющий подачей образца
            </h2>
            <ul class="list-disc pl-4 marker:text-primary">
              <li>низкий уровень шума</li>
              <li>плавная подача образца</li>
              <li>волюметрический анализ абсолютных концентраций без использования дополнительных референсных частиц
              </li>
            </ul>
          </div>
        </div>
        <div class="panel-text bg-foreground xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10 flex flex-col xl:flex-row gap-8">
          <div class="basis-1/2">
            <h2 class="~text-[18px]/[20px] leading-[1.1] mb-8 text-primary">
              Твердотельные лазеры
            </h2>
            <ul class="list-disc pl-4 marker:text-primary">
              <li>488 нм, 638 нм, 405 нм</li>
              <li>оптимизированной мощности, позволяющие поддерживать работу с большинством доступных флюорохромов и
                флюоресцентных белков
              </li>
            </ul>
          </div>
          <div class="basis-1/2">
            <h2 class="~text-[18px]/[20px] leading-[1.1] mb-8 text-primary">
              Широкий выбор вариантов загрузки образца
            </h2>
            <ul class="list-disc pl-4 marker:text-primary">
              <li>Отдельные пробирки объемом 5, 2 и 1,5 мл</li>
              <li>Загрузка пробирок группой до 40 единиц</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="p-wrap relative overflow-hidden top-0 h-[50vh] xl:h-[80vh] flex flex-col gap-8">
        <NuxtImg
          format="webp"
          class="panel absolute xl:top-0 left-0 w-full h-full object-cover"
          alt="Проточный цитометр CELLRIVER"
          title="Проточный цитометр CELLRIVER"
          src="/img/item-photo-2.webp"/>
        <NuxtImg
          format="webp"
          class="panel absolute xl:top-0 left-0 w-full h-full z-10 object-cover"
          alt="Проточный цитометр CELLRIVER"
          title="Проточный цитометр CELLRIVER"
          src="/img/item-photo-6.webp"/>
        <NuxtImg
          format="webp"
          class="panel absolute xl:top-0 left-0 w-full h-full object-cover"
          alt="Проточный цитометр CELLRIVER"
          title="Проточный цитометр CELLRIVER"
          src="/img/item-photo-7.webp"/>
        <NuxtImg
          format="webp"
          class="panel purple absolute xl:top-0 left-0 w-full h-full z-10 object-cover"
          alt="Проточный цитометр CELLRIVER"
          title="Проточный цитометр CELLRIVER"
          src="/img/item-photo-8.webp"/>
      </div>
    </div>
  </section>
</template>